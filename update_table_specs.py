import os
import pandas as pd
import subprocess
from bs4 import BeautifulSoup
from openpyxl import load_workbook

# Map current image paths/IDs to their recommended dimensions
IMAGE_SPECS = {
    "hero_img_0": "1200 x 1600 px (3:4)",
    "portfolio_img_0": "1400 x 1750 px (4:5)",
    "portfolio_img_1": "1000 x 1175 px (4:4.7)",
    "portfolio_img_2": "800 x 1000 px (4:5)",
    "portfolio_img_3": "800 x 1000 px (4:5)",
    "testimonials_img_0": "1000 x 750 px (4:3)",
    "testimonials_img_1": "1000 x 750 px (4:3)",
    "testimonials_img_2": "1000 x 750 px (4:3)",
    "contact-modal-container_img_0": "400 x 400 px (1:1)",
}

def has_chinese(text):
    return any('\u4e00' <= char <= '\u9fff' for char in text) if text else False

def extract_content_with_images(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    data = {}
    
    # Process text tags and image tags
    for tag in soup.find_all(['h1', 'h2', 'h3', 'p', 'span', 'a', 'li', 'summary', 'img']):
        # Avoid duplicate text capture
        if tag.name != 'img' and tag.find(['h1', 'h2', 'h3', 'p', 'span', 'a', 'li', 'summary']):
            continue
            
        content = ""
        if tag.name == 'img':
            content = tag.get('src', '')
        else:
            content = tag.get_text(strip=True)
            if not has_chinese(content): continue
            
        if content:
            parent_with_id = tag.find_parent(lambda t: t.has_attr('id'))
            parent_id = parent_with_id.get('id') if parent_with_id else 'global'
            
            siblings = tag.find_all_previous(tag.name)
            count = 0
            for s in siblings:
                s_parent = s.find_parent(lambda t: t.has_attr('id'))
                if (s_parent.get('id') if s_parent else 'global') == parent_id:
                    count += 1
            
            field_id = f"{parent_id}_{tag.name}_{count}"
            data[field_id] = content
            
    return data

def main():
    work_dir = '/Users/gardsale/Projects/Makeup - YELLOW - 2/'
    history_file = os.path.join(work_dir, 'text_history.xlsx')
    
    with open(os.path.join(work_dir, 'atelier.html'), 'r', encoding='utf-8') as f:
        current_data = extract_content_with_images(f.read())
    
    # Reload existing history to preserve it
    if os.path.exists(history_file):
        df = pd.read_excel(history_file)
    else:
        df = pd.DataFrame(columns=['Field ID'])

    # Prepare current state
    current_list = []
    for fid, content in current_data.items():
        spec = IMAGE_SPECS.get(fid, "")
        current_list.append({
            'Field ID': fid,
            'Current Text CN': content if '_img_' not in fid else f"[IMG] {content}",
            'Dimensions (px)': spec
        })
    
    current_df = pd.DataFrame(current_list)
    
    # Merge existing history with new columns (including dimensions)
    # This keeps history and adds the new dimension column
    df = pd.merge(df, current_df, on='Field ID', how='outer', suffixes=('_old', ''))
    
    # Cleanup: If we already had columns, pandas might have made duplicates
    if 'Current Text CN_old' in df.columns:
        df = df.drop(columns=['Current Text CN_old', 'Current Text EN']) # Recalculate EN
    
    # Add/Update translations (only for text)
    from fix_translations import EDITORIAL_TRANSLATIONS
    def get_en(row):
        val = row['Current Text CN']
        if pd.isna(val): return ""
        if str(val).startswith("[IMG]"): return "Image Asset"
        return EDITORIAL_TRANSLATIONS.get(val, val)

    df['Current Text EN'] = df.apply(get_en, axis=1)

    # Reorder columns
    cols = ['Field ID']
    history_cols = [c for c in df.columns if 'CN 20' in c]
    cols += history_cols + ['Current Text CN', 'Current Text EN', 'Dimensions (px)']
    
    # Final cleanup of columns list (avoid errors if some don't exist)
    final_cols = [c for c in cols if c in df.columns]
    
    df[final_cols].to_excel(history_file, index=False)
    print(f"Updated {history_file} with Image Dimensions.")

    # Re-highlight
    import subprocess
    subprocess.run(['python3', 'highlight_changes.py'], cwd=work_dir)

if __name__ == "__main__":
    main()
