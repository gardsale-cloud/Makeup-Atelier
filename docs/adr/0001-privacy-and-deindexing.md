# De-index Site from Search Engines and Remove Public Channels

## Context
The site owner requested complete privacy from public search engine indexes and the removal of all exposed personal communication channels (WeChat QR code, WeChat ID `Bbll6789`, and Xiaohongshu social links). The site serves as a direct, private portfolio where styling inquiries can still be submitted by prospective clients without public organic indexing or social discovery.

## Decision
1. Implement site-wide de-indexing via both `robots.txt` (`Disallow: /`) and HTTP/HTML meta tags (`noindex, nofollow, noarchive`).
2. Eliminate the QR code and stylist account ID from the modal dialogs, refactoring the inquiry modal to a compact, single-column consultation form.
3. Remove Xiaohongshu external links and the footer "Social" block across all language variants.

## Layout Choices
- **Portfolio**: The Xiaohongshu outbound link is completely removed, keeping the focus entirely on the curated gallery without replacement buttons.
- **Footer**: The "Social" section is removed, leaving a 2-column balanced layout (Navigation and Contact). The Contact block features an interactive inquiry trigger ("諮詢：預約私人妝髮" / "Inquiry: Private Consultation") alongside "Region: Phuket, Thailand", removing the hardcoded account handle.
