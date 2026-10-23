import { SPECIALITIES } from "../data.jsx";

export default function Speciality() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="section-head">
          <h2>কম্পিটেন্ট <em>(মানবিক)</em> এর বিশেষত্ব</h2>
          <p>ভর্তি প্রস্তুতির জন্য যা যা দরকার, এক বইয়ে।</p>
        </div>
        <div className="features-grid">
          {SPECIALITIES.map((f) => (
            <article key={f.title} className={"feature" + (f.highlight ? " highlight" : "")}>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
