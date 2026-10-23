import { useState } from "react";
import { Link } from "react-router-dom";
import bookImg from "../assets/book.jpg";

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL || "";
const PHONE_RE = /^01[3-9]\d{8}$/;

function bnToEn(s) {
  return s.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d));
}

function cleanPhone(s) {
  return bnToEn(s.trim()).replace(/[\s-]/g, "").replace(/^\+?88/, "");
}

function validate({ name, phone, address }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "আপনার নাম লিখুন।";
  if (!PHONE_RE.test(cleanPhone(phone)))
    errors.phone = "সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন (যেমন 01712345678)।";
  if (address.trim().length < 8) errors.address = "সম্পূর্ণ ঠিকানা লিখুন।";
  return errors;
}

export default function Order() {
  const [values, setValues] = useState({ name: "", phone: "", address: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (values.website) { setStatus("done"); return; } // স্প্যাম বট

    setStatus("sending");

    if (!SCRIPT_URL.startsWith("http")) {
      console.warn("VITE_SCRIPT_URL সেট করা হয়নি, তাই তথ্য গুগল শিটে যায়নি। শুধু ডিজাইন দেখানো হচ্ছে।");
      setTimeout(() => setStatus("done"), 500);
      return;
    }

    try {
      const body = new URLSearchParams({
        name: values.name.trim(),
        phone: cleanPhone(values.phone),
        address: values.address.trim(),
      });
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="order-main">
      <div className="wrap order-grid">
        <aside className="order-book">
          <img src={bookImg} alt="কম্পিটেন্ট মানবিক বইয়ের প্রচ্ছদ" width="900" height="1236" />
          <h2>কম্পিটেন্ট</h2>
          <p>অনার্স ভর্তি সহায়িকা (মানবিক)<br />১৯তম সংস্করণ · শিক্ষাবর্ষ ২০২৬-২৭</p>
        </aside>

        <div className="form-card">
          {status === "done" ? (
            <div className="success" role="status">
              <div className="check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
              <h2>অর্ডার সাবমিটেড</h2>
              <p>ধন্যবাদ! আপনার অর্ডার আমরা পেয়েছি।</p>
              <Link className="btn" to="/">হোমে ফিরে যান</Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h1>বই অর্ডার করুন</h1>
              <p className="lead">নিচের তথ্য দিন। আমরা আপনার সাথে যোগাযোগ করব।</p>

              {status === "error" && (
                <div className="form-error-banner" role="alert">
                  অর্ডার পাঠানো যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।
                </div>
              )}

              <div className="field">
                <label htmlFor="name">আপনার নাম</label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="যেমন: মোঃ রাকিব হাসান"
                  value={values.name} onChange={onChange} aria-invalid={!!errors.name} />
                <div className="error" aria-live="polite">{errors.name}</div>
              </div>

              <div className="field">
                <label htmlFor="phone">মোবাইল নাম্বার</label>
                <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="01XXXXXXXXX"
                  value={values.phone} onChange={onChange} aria-invalid={!!errors.phone} />
                <div className="error" aria-live="polite">{errors.phone}</div>
              </div>

              <div className="field">
                <label htmlFor="address">সম্পূর্ণ ঠিকানা</label>
                <textarea id="address" name="address" autoComplete="street-address" placeholder="গ্রাম/মহল্লা, থানা, জেলা"
                  value={values.address} onChange={onChange} aria-invalid={!!errors.address} />
                <div className="error" aria-live="polite">{errors.address}</div>
              </div>

              {/* স্প্যাম আটকানোর লুকানো ঘর */}
              <div className="hp" aria-hidden="true">
                <label>Website <input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} /></label>
              </div>

              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "পাঠানো হচ্ছে..." : "অর্ডার সাবমিট করুন"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
