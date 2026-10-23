import { Link } from "react-router-dom";
import bookImg from "../assets/book.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="hero-swoosh" viewBox="0 0 600 700" preserveAspectRatio="none" aria-hidden="true">
        <path d="M600 0 V700 H0 C140 640 230 560 300 440 C380 300 470 150 600 90 Z" fill="#1b86d9" opacity="0.9" />
        <path d="M600 90 C470 150 380 300 300 440 C230 560 140 640 0 700 C150 690 290 640 380 540 C470 440 520 250 600 190 Z" fill="#0e4aa9" opacity="0.55" />
      </svg>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-tags">
            <span className="tag">শিক্ষাবর্ষ: ২০২৬-২৭</span>
            <span className="tag yellow">সর্বাধিক তথ্য সমৃদ্ধ</span>
          </div>
          <div className="hero-kicker">অনার্স ভর্তি সহায়িকা</div>
          <h1>কম্পিটেন্ট</h1>
          <div className="hero-en">COMPETENT</div>
          <p className="hero-text">
            জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত কলেজসমূহে মানবিক বিভাগে অনার্স ভর্তির জন্য সম্পূর্ণ নতুন আঙ্গিকে ১৯তম সংস্করণ।
          </p>
          <div className="hero-cta">
            <Link className="btn" to="/order">
              বইটি অর্ডার করুন
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <span className="hero-note">ফর্ম পূরণ করলেই অর্ডার নিশ্চিত</span>
          </div>
        </div>

        <div className="book-stage">
          <div className="book-frame">
            <img src={bookImg} alt="কম্পিটেন্ট মানবিক, অনার্স ভর্তি সহায়িকা বইয়ের প্রচ্ছদ" width="900" height="1236" />
            <div className="edition-badge" aria-hidden="true">
              <b>১৯তম</b>
              <span>সংস্করণ</span>
            </div>
          </div>
        </div>
      </div>

      <svg className="wave-bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 50 C240 100 420 0 720 40 C1020 80 1200 10 1440 50 V90 H0 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
