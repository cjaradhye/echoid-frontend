
# 🎙️ Echoid Frontend

**Echoid** is a voice generation platform that lets users create personalized audio from text — complete with emotion and voice cloning. This is the frontend repo, built with **Next.js**, **Tailwind CSS**, and powered by a FastAPI backend.

---

## 🚀 Features

- 🎤 Text-to-speech conversion with custom voices  
- 😭 Emotion-based tone modulation via AI  
- 👤 User profiles to manage saved voice styles  
- 🌐 Fully responsive frontend with beautiful UI  
- ⚡ Fast and lightweight with Vite + Next.js

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) + [Vite](https://vitejs.dev)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com)  
- **Linting**: ESLint & Prettier  
- **Build Tool**: [Bun](https://bun.sh) / npm  
- **Backend**: Connects to [Echoid Backend](https://github.com/YOUR_USERNAME/echoid-backend)

---

## 📦 Installation

1. Clone this repo:

   ```bash
   git clone https://github.com/YOUR_USERNAME/echoid-frontend.git
   cd echoid-frontend


2. Install dependencies:

   ```bash
   bun install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Visit [http://localhost:3000](http://localhost:3000)

---

## 🌐 Backend Setup

Make sure the FastAPI backend is running. Clone and run it from:
➡️ [`echoid-backend`](https://github.com/YOUR_USERNAME/echoid-backend)

## 🔑 Environment Setup

Create a `.env` file in the root directory with the following variables:

```bash
# Backend URL (optional, defaults to http://localhost:8000)
VITE_BACKEND_URL=http://localhost:8000

# Gemini API Key (required for emotion text modification)
# Get your API key from: https://makersuite.google.com/app/apikey
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key and paste it in your `.env` file

---

## 🧠 Folder Structure

```
echoid-frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Tailwind/global styles
│   └── utils/          # Helper functions
├── public/             # Static files
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## ✅ TODO

* [x] Add Emotion Selector UI
* [x] Connect frontend with API
* [x] Add loading states and feedback
* [x] Integrate Gemini API for emotion text modification
* [x] Connect to FastAPI backend at /docs/generate endpoint
* [ ] Deploy on Vercel

---

## 👤 Author

Made with ❤️ by [Aradhye Swarup](https://github.com/cj-aradhye)
Built for the project: **Echoid**

---
