/* এই ফাইল থেকে লেখা বদলালেই সাইটে বদলে যাবে */

export const BRAND = "কম্পিটেন্ট";

export const SPECIALITIES = [
  {
    title: "১৯তম সংস্করণ",
    text: "প্রতি বছর হালনাগাদ হয়ে ১৯তম সংস্করণে পৌঁছেছে, যা শিক্ষার্থীদের আস্থার প্রমাণ।",
    icon: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
        <path d="M4 19V5M9 7h6" />
      </>
    ),
  },
  {
    title: "সম্পূর্ণ নতুন আঙ্গিকে",
    text: "নতুন সাজানো বিন্যাস ও সহজ উপস্থাপনায় পড়তে এবং মনে রাখতে সুবিধা।",
    icon: (
      <path d="M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z" />
    ),
  },
  {
    title: "সর্বাধিক তথ্য সমৃদ্ধ",
    text: "ভর্তি পরীক্ষার জন্য প্রয়োজনীয় তথ্য এক জায়গায় গোছানো।",
    icon: (
      <>
        <path d="M12 3l9 5-9 5-9-5z" />
        <path d="M3 13l9 5 9-5M3 17.5l9 5 9-5" opacity=".7" />
      </>
    ),
  },
  {
    title: "শিক্ষাবর্ষ ২০২৬-২৭",
    text: "নতুন শিক্ষাবর্ষের ভর্তি প্রস্তুতির কথা মাথায় রেখে প্রস্তুত করা।",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    title: "জাতীয় বিশ্ববিদ্যালয়ের জন্য",
    text: "জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত কলেজসমূহে মানবিক বিভাগে ভর্তি লক্ষ্য করে সাজানো।",
    icon: (
      <>
        <path d="M3 10l9-6 9 6-9 6z" />
        <path d="M7 12.5V17c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5" />
      </>
    ),
  },
  {
    title: "ফ্রি মডেল টেস্ট",
    text: "বই কেনার পাশাপাশি ওয়েবসাইটে বিনামূল্যে মডেল টেস্ট দিয়ে নিজেকে যাচাই করুন।",
    highlight: true,
    icon: (
      <>
        <path d="M9 11l3 3 8-8" />
        <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9" />
      </>
    ),
  },
];

export const FACTS = [
  { big: "১৯তম সংস্করণ", small: "সম্পূর্ণ নতুন আঙ্গিকে প্রকাশিত" },
  { big: "২০২৬-২৭", small: "শিক্ষাবর্ষের ভর্তির জন্য" },
  { big: "মানবিক বিভাগ", small: "জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত কলেজসমূহ" },
];

/* ছবি দিতে চাইলে photo: "/members/rakib.jpg" লিখুন এবং ছবিটি public/members ফোল্ডারে রাখুন */
export const BOARD = [
  {
    initial: "ক",
    name: "সাকিব হাসান তামিম",
    role: "সভাপতি, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ",
    photo: "/public/members/sakib.png",
  },
  { initial: "খ", name: "মোঃ আবির হোসেন", role: "সম্পাদক, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ", photo: "/public/members/abir.png" },
  { initial: "গ", name: "জাহিদ হাসান রাঙ্গা", role: "ব্যবস্থাপনা সম্পাদক, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ", photo: "/public/members/ranga.png" },
  { initial: "ঘ", name: "আকিল আহমেদ", role: "পরিচালক, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ", photo: "/public/members/akil.jfif" },
  { initial: "ঙ", name: "মোঃ আবু তালহা", role: "সহকারী পরিচালক, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ", photo: "/public/members/talha.png" },
  { initial: "চ", name: "মেছবাহুল ইসলাম", role: "সহকারী পরিচালক, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ", photo: "/public/members/misbah.png" },
  { initial: "ছ", name: "মোঃ আহসান হাবিব", role: "সম্পাদনা সদস্য, কম্পিটেন্ট গাইড সম্পাদনা পরিষদ", photo: "/public/members/ahsan.png" },
];

export const CONTACT = {
  phone: "01345-697707",
  whatsapp: "01345-697706",
  email: "guidecompetent@gmail.com",
  address: "আপনার ঠিকানা লিখুন",
  facebook: "https://www.facebook.com/profile.php?id=61577742073749&rdid=F6SLKYUgcIod9qED&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ME4HEHeX%2F#",
  fbGroup: "https://www.facebook.com/groups/1620004386227168/?ref=share&rdid=g7MWTb5Sxef1DJfD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F18S1v4w5zu#",
};
