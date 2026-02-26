import os
import pandas as pd
import subprocess
from bs4 import BeautifulSoup
from datetime import datetime

TRANSLATION_MAP = {
    "普吉島": "Phuket", "私人": "Private", "妝髮": "Makeup & Hair",
    "精選": "Selected", "作品": "Portfolio", "理由": "Reasons",
    "一對一": "One-on-one", "溝通": "Communication", "專業": "Professional",
    "流程": "Process", "服務": "Service", "預約": "Booking",
    "聯絡": "Contact", "微信": "WeChat", "常用": "Common",
    "問題": "Questions", "解答": "Answers", "回饋": "Reviews", "客戶": "Clients",
}

def translate_text(text):
    if not text: return ""
    en = text
    for cn, eng in TRANSLATION_MAP.items():
        en = en.replace(cn, eng)
    return en

def has_chinese(text):
    return any('\u4e00' <= char <= '\u9fff' for char in text) if text else False

def extract_clean_texts(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    data = {}
    
    # We want to visit every relevant tag only once
    for tag in soup.find_all(['h1', 'h2', 'h3', 'p', 'span', 'a', 'li', 'summary']):
        # Ignore tags that contain other text tags (to avoid capturing the same text at multiple levels)
        if tag.find(['h1', 'h2', 'h3', 'p', 'span', 'a', 'li', 'summary']):
            continue
            
        content = tag.get_text(strip=True)
        if content and has_chinese(content):
            # Find the CLOSEST parent with an ID
            parent_with_id = tag.find_parent(lambda t: t.has_attr('id'))
            parent_id = parent_with_id.get('id') if parent_with_id else 'global'
            
            # Create a unique but stable key based on the parent ID and the tag's sequence within THAT parent
            # To do this correctly, we count how many tags of this type are before it in the SAME parent
            siblings = tag.find_all_previous(tag.name)
            count = 0
            for s in siblings:
                s_parent = s.find_parent(lambda t: t.has_attr('id'))
                s_parent_id = s_parent.get('id') if s_parent else 'global'
                if s_parent_id == parent_id:
                    count += 1
            
            field_id = f"{parent_id}_{tag.name}_{count}"
            data[field_id] = content
            
    return data

def main():
    work_dir = '/Users/gardsale/Projects/Makeup - YELLOW - 2/'
    history_file = os.path.join(work_dir, 'text_history.xlsx')
    
    # 1. Get current state from disk (this is our master list of IDs)
    with open(os.path.join(work_dir, 'atelier.html'), 'r', encoding='utf-8') as f:
        current_data = extract_clean_texts(f.read())
    
    # 2. Re-pull history from git, but map ONLY to current IDs where possible
    # We'll build a history for each current field
    cmd = ['git', 'log', '--reverse', '--pretty=format:%h|%ad', '--date=short', 'atelier.html']
    result = subprocess.run(cmd, cwd=work_dir, capture_output=True, text=True, check=True)
    commits = [line.split('|') for line in result.stdout.split('\n') if line]
    
    all_history = {fid: {'Field ID': fid} for fid in current_data.keys()}
    
    # Track text for each field across commits
    for hash_id, date in commits:
        print(f"Processing {hash_id}...")
        try:
            cmd_show = ['git', 'show', f'{hash_id}:atelier.html']
            res_show = subprocess.run(cmd_show, cwd=work_dir, capture_output=True, text=True, check=True)
            past_texts = extract_clean_texts(res_show.stdout)
            
            col_name = f"CN {date} ({hash_id})"
            for fid in all_history.keys():
                if fid in past_texts:
                    all_history[fid][col_name] = past_texts[fid]
        except: pass

    # Convert to DF
    df = pd.DataFrame.from_dict(all_history, orient='index').reset_index(drop=True)
    
    # Add current and translation
    df['Current Text CN'] = df['Field ID'].map(current_data)
    df['Current Text EN'] = df['Current Text CN'].apply(translate_text)
    
    # Save
    cols = ['Field ID'] + [c for c in df.columns if 'CN 20' in c] + ['Current Text CN', 'Current Text EN']
    df[cols].to_excel(history_file, index=False)
    print(f"Cleaned history saved to {history_file}")

if __name__ == "__main__":
    main()
