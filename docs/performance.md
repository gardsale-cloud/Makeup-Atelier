# Performance Optimization Guide
## phuketmua.site — Next.js Static Export + Cloudflare

> Stack: Next.js static export → GitHub Pages → Cloudflare (Brotli, Cache Rules)
> Baseline: Performance 55, FCP 14.9s, LCP 19.0s, TBT 80ms, CLS 0

---

## ✅ Already Done

| Change | Effect |
|---|---|
| `display: 'swap'` on all fonts | Text renders immediately without waiting for fonts |
| `preload: false` on Noto HK/SC | CJK fonts don't block FCP |
| `preconnect` for fonts.googleapis.com | DNS resolved early |
| Analytics scripts → `lazyOnload` | Scripts don't block initial render |
| Hero slider removed → single static image | Removed JS overhead |
| `priority` on LCP image only | Correct preload behavior |

---

## 🔴 HIGH — Not Yet Done

### 1. Self-hosted CJK Font Subsetting (+15–25 pts)

**Why:** `next/font/google` for Noto Sans HK/SC generates 500+ KB of `@font-face` CSS for all CJK glyphs. Only ~200–400 characters are actually used on this page.

**Steps:**
```bash
pip install fonttools brotli
npm install -g glyphanger

# Scan the live site and generate subset
glyphanger https://phuketmua.site --spider --subset --formats=woff2 --css

# Or manually with pyftsubset
pyftsubset NotoSansHK-Regular.otf \
  --text-file=./used-chars.txt \
  --flavor=woff2 \
  --output-file=src/fonts/NotoSansHK-Regular-subset.woff2
```

**Replace in `layout.tsx`:**
```tsx
import localFont from 'next/font/local';

const notoHK = localFont({
  src: [
    { path: '../fonts/NotoSansHK-Light-subset.woff2', weight: '300' },
    { path: '../fonts/NotoSansHK-Regular-subset.woff2', weight: '400' },
    { path: '../fonts/NotoSansHK-Medium-subset.woff2', weight: '500' },
    { path: '../fonts/NotoSansHK-Bold-subset.woff2', weight: '700' },
  ],
  variable: '--font-noto-hk',
  display: 'swap',
  preload: true, // safe now — file is small
});
```

**Result:** ~50–80 KB instead of ~2 MB. No external DNS lookup.

---

### 2. `dynamic()` Import for Modals (+8–12 pts)

**Why:** `ContactModalAtelier` and `PrivacyModalAtelier` are in the main bundle — all users pay for JS that very few use.

```tsx
// layout.tsx
import dynamic from 'next/dynamic';

const ContactModalAtelier = dynamic(
  () => import('@/components/ContactModalAtelier'),
  { ssr: false }
);
const PrivacyModalAtelier = dynamic(
  () => import('@/components/PrivacyModalAtelier'),
  { ssr: false }
);
const ClientTracker = dynamic(
  () => import('@/components/ClientTracker'),
  { ssr: false }
);
```

---

### 3. WebP Hero Image + `fetchPriority` (+5–10 pts)

**Why:** `images: { unoptimized: true }` disables WebP auto-conversion. `next/image` with this flag doesn't inject `fetchpriority="high"` either.

```bash
cwebp -q 82 public/images/hero/hero_desktop.jpg -o public/images/hero/hero_desktop.webp
cwebp -q 82 public/images/hero/hero_mobile.jpg -o public/images/hero/hero_mobile.webp
```

**In HeroAtelier.tsx:**
```tsx
<picture>
  <source srcSet="/images/hero/hero_desktop.webp" type="image/webp" media="(min-width: 768px)" />
  <source srcSet="/images/hero/hero_mobile.webp" type="image/webp" media="(max-width: 767px)" />
  <img
    src="/images/hero/hero_desktop.jpg"
    alt="Phuket MUA"
    fetchPriority="high"
    loading="eager"
    decoding="sync"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</picture>
```

**Add to `<head>` in `layout.tsx`:**
```tsx
<link rel="preload" as="image" href="/images/hero/hero_desktop.webp" type="image/webp" media="(min-width: 768px)" />
<link rel="preload" as="image" href="/images/hero/hero_mobile.webp" type="image/webp" media="(max-width: 767px)" />
```

---

## 🟡 MEDIUM

### 4. Remove Redundant Preconnect (+3–5 pts)

`next/font/google` already injects preconnect links itself. Our manually added ones are duplicates and Lighthouse penalizes them.

```tsx
// REMOVE from layout.tsx:
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

> After switching to self-hosted fonts (step 1) — this becomes irrelevant anyway.

---

## 🟢 LOW

### 5. Cloudflare: Do NOT enable Rocket Loader

Rocket Loader breaks inline scripts and `next/script`. Keep it OFF.

### 6. `type: "module"` in package.json

Removes Node.js warning during builds, minor Turbopack speedup.

---

## Expected Score After All Changes

| Change | Mobile +pts |
|---|---|
| CJK font subsetting | +15–25 |
| `dynamic()` modals | +8–12 |
| WebP + `fetchPriority` LCP | +5–10 |
| Remove duplicate preconnect | +3–5 |
| LCP image preload in `<head>` | +3–5 |
| **Total estimate** | **+34–57 pts** |

**Forecast: 55 → 85–95 (mobile)**

---

## Cloudflare Settings (Already Configured)

- ✅ Brotli compression
- ✅ Auto Minify (JS/CSS/HTML)
- ✅ Browser Cache TTL: 1 year
- ✅ Edge Cache Rules for static assets
- ✅ HTTP/3 (QUIC)
- ❌ Rocket Loader — keep OFF
