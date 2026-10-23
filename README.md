# কম্পিটেন্ট বই বিক্রির ওয়েবসাইট (React + Vite)

## চালানোর নিয়ম
```bash
npm install
npm run dev      # লোকালহোস্টে দেখতে
npm run build    # হোস্টিংয়ের জন্য dist ফোল্ডার তৈরি
```
Node.js ১৮ বা তার উপরের ভার্সন লাগবে।

## গুগল শিট সংযোগ
1. `apps-script.gs` ফাইলের উপরের ধাপগুলো অনুসরণ করে Web app URL নিন।
2. `.env.example` ফাইলের নাম বদলে `.env` করুন এবং `VITE_SCRIPT_URL` এ ওই URL বসান।
3. Netlify/Vercel এ হোস্ট করলে Environment variable হিসেবে `VITE_SCRIPT_URL` যোগ করুন।

## কোথায় কী বদলাবেন
- লোগো: `public/logo.png` নামে রাখুন
- লেখা (বিশেষত্ব, পরিচালনা পর্ষদ, যোগাযোগ): `src/data.jsx`
- পর্ষদ সদস্যের ছবি: `public/members/` এ রেখে `src/data.jsx` এ `photo: "/members/নাম.jpg"` দিন
- রঙ ও ডিজাইন: `src/styles.css` এর উপরের `:root` অংশ
- পেজ: `src/App.jsx` (পেজ সাজানো) এবং `src/components/` এর প্রতিটি কম্পোনেন্ট

## হোস্টিং
Netlify (`public/_redirects`) ও Vercel (`vercel.json`) এর জন্য রাউটিং সেটিং দেওয়া আছে, তাই `/order` সরাসরি খুললেও কাজ করবে।

## কম্পোনেন্ট তালিকা (`src/components/`)
| ফাইল | কাজ |
|---|---|
| `Header.jsx` | লোগো, ফ্রি মডেল টেস্ট, সাইন ইন, সাইন আউট |
| `Hero.jsx` | বইয়ের ব্যানার ও অর্ডার বাটন |
| `Speciality.jsx` | কম্পিটেন্ট (মানবিক) এর বিশেষত্ব |
| `Intro.jsx` | আমাদের সম্পর্কে |
| `Board.jsx` | পরিচালনা পর্ষদ |
| `Order.jsx` | অর্ডার ফরম পেজ |
| `Footer.jsx` | ফুটার |
| `Brand.jsx` | লোগো ও নাম (Header ও Footer এ ব্যবহৃত) |
