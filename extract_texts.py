import os
import pandas as pd
from bs4 import BeautifulSoup
from datetime import datetime

def get_stable_id(tag, section_id, index):
    return f"{section_id}_{tag.name}_{index}"

def has_chinese(text):
    if not text: return False
    return any('\u4e00' <= char <= '\u9fff' for char in text)

def extract_current_state(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    data = []
    sections = soup.find_all(['section', 'nav', 'footer', 'div'])
    seen_ids = set()
    
    # We focus on major blocks
    blocks = soup.find_all(['section', 'nav', 'footer', 'div'], id=True)
    if not blocks:
        blocks = [soup] # Fallback if no IDs

    global_index = 0
    for block in blocks:
        block_id = block.get('id', 'global')
        local_index = 0
        for tag in block.find_all(['h1', 'h2', 'h3', 'p', 'span', 'a', 'li', 'summary']):
            # Skip if tag has children that are also on the list (avoid duplicates)
            if any(child.name in ['h1', 'h2', 'h3', 'p', 'span', 'a', 'li', 'summary'] for child in tag.find_all()):
                continue
                
            content = tag.get_text(strip=True)
            if content and has_chinese(content):
                field_id = get_stable_id(tag, block_id, local_index)
                data.append({
                    'Field ID': field_id,
                    'Text CN': content,
                    'Text EN': '' # Translation placeholder
                })
                local_index += 1
    
    return pd.DataFrame(data)

def update_history(html_file, history_file):
    current_df = extract_current_state(html_file)
    
    if os.path.exists(history_file):
        history_df = pd.read_excel(history_file)
        
        # Merge on Field ID
        # We need to check if current 'Text CN' matches the LATEST 'Text CN' in history
        # Latest CN is usually in the last columns
        cn_cols = [c for c in history_df.columns if 'Text CN' in c]
        latest_cn_col = cn_cols[-1]
        
        # Merge logic
        merged = pd.merge(history_df, current_df, on='Field ID', how='outer', suffixes=('', '_new'))
        
        # Check for changes
        changed_mask = (merged[latest_cn_col] != merged['Text CN_new']) & (merged['Text CN_new'].notna())
        
        if changed_mask.any():
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
            new_cn_col = f"Text CN ({timestamp})"
            new_en_col = f"Text EN ({timestamp})"
            
            merged[new_cn_col] = merged['Text CN_new']
            merged[new_en_col] = '' # EN placeholder
            
            # Drop the temporary '_new' columns
            result_df = merged.drop(columns=['Text CN_new', 'Text EN_new'])
            result_df.to_excel(history_file, index=False)
            print(f"Updates recorded in {history_file} at {timestamp}")
        else:
            print("No changes detected in text.")
    else:
        current_df.to_excel(history_file, index=False)
        print(f"Created new history file: {history_file}")

if __name__ == "__main__":
    work_dir = '/Users/gardsale/Projects/Makeup - YELLOW - 2/'
    html_file = os.path.join(work_dir, 'atelier.html')
    history_file = os.path.join(work_dir, 'text_history.xlsx')
    
    update_history(html_file, history_file)
