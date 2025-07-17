
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
➡️ [`echoid-backend`](https://github.com/cjaradhye/echoid-backend)

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

* [ ] Add Emotion Selector UI
* [ ] Connect frontend with API
* [ ] Add loading states and feedback
* [ ] Deploy on Vercel

---

## 👤 Author

Made with ❤️ by [Aradhye Swarup](https://github.com/cj-aradhye)
Built for the project: **Echoid**

---
