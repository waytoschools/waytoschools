# WaytoSchools Website

A modern React website for WaytoSchools.org — a 501(c)(3) nonprofit helping under-privileged children in Nepal's villages access education.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option A: Drag & Drop (Easiest)
1. Run `npm install` then `npm run build` in this folder
2. Go to [vercel.com](https://vercel.com) and sign up/log in
3. Click **"Add New Project"** → **"Deploy without Git"**
4. Drag the `dist/` folder into the upload area
5. Your site is live! Then connect your domain in Project Settings → Domains

### Option B: Via GitHub (Best for ongoing updates)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Go to Project Settings → Domains → add `waytoschools.org`
6. Update your domain's DNS to point to Vercel (they'll give you instructions)

## 🛠 Local Development

```bash
npm install
npm run dev
```
Then open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
```
Output goes to the `dist/` folder — this is what you deploy.

## ✏️ Making Updates

All content lives in `src/App.jsx`. Key things to customize:

- **PAYPAL_LINK** — your PayPal donation URL (already set)
- **EMAIL** — contact email (already set)
- **PROGRAMS** array — your 4 program cards
- **Stats band** — update numbers as your impact grows
- **Impact tiers** — donation amounts and descriptions

## 📁 Project Structure

```
waytoschools/
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
├── public/
│   └── favicon.svg     # Site icon
└── src/
    ├── main.jsx        # React entry point
    └── App.jsx         # 🌟 Main website (edit this!)
```
