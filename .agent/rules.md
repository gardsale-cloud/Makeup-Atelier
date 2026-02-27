# Atelier Project Architecture & Context

## 1. System Overview
This website uses a **decoupled secure form architecture**.
- **Frontend**: Static HTML hosted on **GitHub Pages**.
- **Backend**: **Cloudflare Workers** handles POST requests at `/api/form`.
- **Notifications**: Submissions flow from the worker to a **Telegram Bot** for instant push notifications.
- **Security**: Multi-layer protection (Honeypot, Time-check, Invisible Turnstile).

## 2. Technical flow
1. **UTM Persistence**: Parameters are captured on page load and saved to `localStorage`.
2. **Submission**:
    - **Honeypot**: Reject if `<input type="text" name="company">` is filled.
    - **Time-check**: Reject if submitted in < 3 seconds.
    - **Turnstile**: Invisible Cloudflare Turnstile token extracted.
3. **Payload**: JSON containing `wechat`, UTMs, and Turnstile token sent to `POST /api/form`.
4. **Worker Action**: Verifies Turnstile token -> Sends to Telegram Bot API.

## 3. Design & UI Constraints (Strict)
- **Visual Rhythm**: Maintain existing spacing, typography, and color tokens.
- **No Captcha UI**: Only use invisible Turnstile.
- **No Alerts**: Use subtle status messages within the existing design hierarchy.
- **Responsive**: Layout must remain intact across all devices.

## 4. Marketing & Analytics
- **Attribution**: Preserve UTMs across sessions via `localStorage`.
- **Goals**: Trigger Yandex Metrika goal `lead_submit` only after a successful server response.

## 5. Security Details
- **Turnstile API**: `https://challenges.cloudflare.com/turnstile/v0/api.js`
- **Verification Endpoint**: `https://challenges.cloudflare.com/turnstile/v0/siteverify`
- **Keys**: Managed via `config.keys.js`.
