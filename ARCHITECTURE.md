# Production Architecture - Phuket Atelier Makeup

This document outlines the infrastructure and technical architecture of the Phuket Atelier Makeup website to ensure future refactors maintain its minimalist, static nature.

## 1. Hosting & Deployment
- **Provider**: GitHub Pages (Static Export)
- **Method**: `npm run build` with `output: "export"` in `next.config.ts`.
- **Domain**: `https://phuketmua.site`
- **Canonical URL**: `https://phuketmua.site` (Any `www` traffic is redirected via Cloudflare 301 rules).

## 2. DNS & Security
- **Provider**: Cloudflare DNS
- **Mode**: Proxied (Orange Cloud enabled)
- **Security**: TLS/SSL provided by Cloudflare.

## 3. Lead Generation (Form Submission)
- **Form API Endpoint**: `https://form.phuketmua.site`
- **Backend**: Cloudflare Worker (Classic Worker model).
- **Target**: Sends submission data to a Telegram Bot.
- **CORS**: Restricted to allow requests *only* from `https://phuketmua.site`.

## 4. Frontend Architecture
- **Framework**: Next.js (Static Export mode).
- **Style**: Custom CSS variables + Tailwind CSS.
- **Components**: Client-side React components for interactivity (Modals, Analytics).
- **Form Data**:
    - **Extraction**: UTM parameters are extracted directly from `window.location.search` at the moment of submission.
    - **Fields**: `wechat`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`.
    - **No Server Dependencies**: No Next.js SSR, no Node.js backend, no third-party form services.

## 5. Maintenance Constraints
- **Do NOT** reintroduce `getServerSideProps` or any dynamic server-side logic; the site must remain hostable as a folder of static files.
- **Do NOT** use `workers.dev` URLs for the form submission endpoint in production code.
- **Do NOT** add standard Node.js dependencies (e.g. `nodemailer`, `mongodb`) that require a runtime environment.

---
*Last Updated: February 28, 2026*
