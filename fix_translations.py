import os
import pandas as pd
from openpyxl import load_workbook

# High-quality editorial translations for the current site content
EDITORIAL_TRANSLATIONS = {
    "Phuket Atelier": "Phuket Atelier",
    "專業化妝髮型設計": "Professional Makeup & Hair Styling",
    "為您的普吉島婚禮或專注細節的活動，打造精緻的高級美感。": "Crafting refined, high-end aesthetics for your Phuket wedding or detail-oriented events.",
    "預約諮詢": "Book a Consultation",
    "關於我": "About Me",
    "服務項目": "Services",
    "作品集": "Portfolio",
    "預約流程": "Booking Process",
    "常見問題": "FAQ",
    "服務": "Services",
    "妝髮": "Makeup & Hair Styling",
    "新娘化妝髮型服務": "Bridal Makeup & Hair Services",
    "完全的一對一化妝服務。針對婚禮當天的主紗與外拍造型，打造自然且持久的高級妝感。包含試妝與婚禮當天全程隨行服務方案。": "Personalized one-on-one service. We create natural, long-lasting, high-end looks for your main bridal gown and outdoor shoots, including trial sessions and full-day accompaniment.",
    "婚紗攝影與旅拍妝髮": "Pre-wedding & Travel Photography Styling",
    "適合婚紗攝影與旅拍拍攝。妝髮設計會考慮拍攝光線、場景與鏡頭呈現效果。可提供造型更換與補妝。": "Tailored for pre-wedding and travel photography. Designs are optimized for lighting, scenery, and camera lens effects, with options for styling changes and touch-ups.",
    "活動及晚宴妝髮": "Event & Gala Styling",
    "適用於晚宴、品牌活動與正式場合。妝容方向依活動性質與服裝風格調整。可提供上門妝髮服務。": "Ideal for galas, brand events, and formal occasions. Styling is customized to the event's nature and your attire. On-site services available.",
    "精選作品": "Selected Portfolio",
    "實際新娘妝髮呈現。": "Real bridal styling showcases.",
    "合作的理由": "Why Choose Me",
    "針對海外婚禮與重要場合，提供細緻而有條理的妝髮服務。": "Offering meticulous and organized styling services for overseas weddings and major events.",
    "一對一服務": "Bespoke One-on-One Service",
    "一對一溝通，根據服裝與場合細緻調整妝髮細節.": "Direct communication to refine every detail of your look based on your attire and the specific occasion.",
    "熟悉環境": "Local Expertise",
    "熟悉普吉島婚禮場地與自然光線條件，能根據不同環境調整妝髮方向。": "Familiar with Phuket's wedding venues and natural lighting, allowing for perfectly adjusted styling for any environment.",
    "熟悉亞洲女性審美與文化": "Asian Aesthetic & Cultural Heritage",
    "了解亞洲女性面部特徵與當前流行趨勢，能平衡傳統美感與現代時尚。": "Deep understanding of Asian facial features and trends, balancing traditional beauty with modern fashion.",
    "高品質妝材": "Premium Products",
    "使用國際線一線品牌化妝品與護膚品，確保妝感高級且對皮膚負擔降至最低。": "Exclusively using global luxury cosmetic and skincare brands for a premium finish that is gentle on the skin.",
    "客戶回饋": "Client Reviews",
    "來自婚禮與旅拍客戶的真實回饋，關於溝通與妝髮服務。": "Honest feedback from wedding and travel photography clients regarding communication and styling services.",
    "“妝面太高級了”": "\"The look was so sophisticated\"",
    "完全是我想要的泰式輕混血感，眼妝超級精緻。在普吉島這麼熱的天氣下，底妝居然一天都沒脫...": "Exactly the Thai 'light mixed-race' look I wanted—the eye makeup was exquisite. Even in Phuket's heat, the base stayed perfect all day.",
    "“像朋友一樣貼心”": "\"As thoughtful as a friend\"",
    "溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態...": "The communication was effortless. During the trial, I could already sense the attention to detail. On the wedding morning, she wasn't just doing makeup; she was also helping me stay calm and centered.",
    "“自然又高級”": "\"Natural yet Premium\"",
    "非常喜歡老師化的妝，自然又高級，完全不是那種假面的感覺。朋友們都夸我那天美呆了...": "I absolutely loved the styling—natural and high-end, without looking like a mask. My friends kept saying I looked stunning that day.",
    "更多妝髮紀錄": "More Styling Stories",
    "不同場景與妝髮呈現，完整收錄於小紅書。": "Various scenes and styling records, fully archived on Xiaohongshu.",
    "前往小紅書瀏覽": "Browse on Xiaohongshu",
    "預約流程": "Booking Process",
    "由初步查詢至服務當天，流程清晰明確。": "A clear and structured journey from initial inquiry to your special day.",
    "微信查詢檔期": "WeChat Availability Inquiry",
    "提供日期、地點與服務類型，確認可預約的檔期。": "Provide your dates, location, and service type to check for availability.",
    "確認內容與造型": "Confirm Style & Details",
    "溝通需求、風格及時間安排，確定服務內容與費用。": "Discuss requirements, style preferences, and scheduling to finalize the service scope and fees.",
    "支付訂金確認": "Confirm with Deposit",
    "確認訂金後，正式保留當日服務檔期。": "Upon receipt of the deposit, your service date is officially reserved.",
    "服務當天": "Day of Service",
    "依約定時間到達，完成當天妝髮造型。": "Arrival as scheduled to complete your makeup and hair styling professionally.",
    "常見問題解答": "Frequently Asked Questions",
    "關於預約與服務細節的說明。": "Clarifications regarding bookings and service details.",
    "是否可以只預約單一妝髮服務？": "Can I book only a single makeup or hair service?",
    "可以，但需視當天檔期情況而定。通常建議完整妝髮預約，以確保整體比例與風格的完整性。": "Yes, though it depends on daily availability. We generally recommend full makeup and hair styling to ensure aesthetic balance and style consistency.",
    "預約試妝的流程是怎樣的？": "What is the process for booking a trial session?",
    "確認正式婚禮檔期後，可安排試妝。建議提前 1-2 個月進行，以便有充足時間優化造型細節。": "Trial sessions can be arranged after confirming your wedding date. We suggest scheduling this 1-2 months in advance to allow time for refining style details.",
    "是否提供外島或曼谷等地的跨區服務？": "Do you offer services in other regions like the islands or Bangkok?",
    "是的，我們提供全泰國範圍的服務。跨區服務產生的差旅與住宿費用需由客戶負擔。": "Yes, we offer services throughout Thailand. Travel and accommodation expenses for out-of-region services are to be covered by the client.",
    "如果需要更換造型或全程隨行補妝，如何收費？": "What are the fees for style changes or full-day touch-up accompaniment?",
    "我們提供專門的隨行方案。具體收費依隨行時數與造型數量而定，請在諮詢時說明您的需求。": "We offer dedicated accompaniment packages. Fees depend on the duration and number of styling changes; please specify your needs during the inquiry.",
    "私人妝髮諮詢": "Private Styling Consultation",
    "如有任何妝髮造型或相關問題，歡迎與我聯絡。": "For any questions regarding styling or services, please feel free to reach out.",
    "微信諮詢": "Consult via WeChat",
    "一般於當日內回覆": "Typically responds within the same day",
    "掃碼聯繫詳情": "Scan for details",
    "微信聯絡": "Connect via WeChat",
    "您的微信號 (WeChat ID)": "Your WeChat ID",
    "發送": "Send",
    "歡迎留下您的微信號，我會與您聯絡。": "Please leave your WeChat ID, and I will get in touch with you.",
    "精選": "Selected",
    "妝髮紀錄": "Styling Records",
    "由": "By",
    "起": "Starts from",
}

def fix_translations(history_file):
    df = pd.read_excel(history_file)
    
    # Use the mapping to fix 'Current Text EN'
    def get_editorial(row):
        cn_text = row['Current Text CN']
        if pd.isna(cn_text): return ""
        
        # Exact match or find the best editorial phrase
        if cn_text in EDITORIAL_TRANSLATIONS:
            return EDITORIAL_TRANSLATIONS[cn_text]
        
        # Partial matches for button text or small fragments
        for cn_key, en_val in EDITORIAL_TRANSLATIONS.items():
            if cn_key in cn_text and len(cn_key) > 5:
                return en_val
        
        return cn_text # fallback if no match found
    
    df['Current Text EN'] = df.apply(get_editorial, axis=1)
    
    df.to_excel(history_file, index=False)
    print(f"Editorial translations applied to {history_file}")

if __name__ == "__main__":
    work_dir = '/Users/gardsale/Projects/Makeup - YELLOW - 2/'
    history_file = os.path.join(work_dir, 'text_history.xlsx')
    if os.path.exists(history_file):
        fix_translations(history_file)
        # Re-run highlighting because saving with pandas strips formatting
        import subprocess
        subprocess.run(['python3', 'highlight_changes.py'], cwd=work_dir)
    else:
        print("History file not found.")
