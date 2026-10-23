import { FACTS } from "../data.jsx";

export default function Intro() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div>
          <h2>আমাদের <em>সম্পর্কে</em></h2>
          {/* নিচের লেখা নিজের তথ্য দিয়ে বদলে নিন */}
          <p>
            কম্পিটেন্ট গাইড সম্পাদনা পরিষদ জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত কলেজে ভর্তিচ্ছু শিক্ষার্থীদের জন্য অনার্স ভর্তি সহায়িকা প্রকাশ করে আসছে।
          </p>
          <p>
            আমাদের লক্ষ্য হলো সঠিক তথ্য, সহজ উপস্থাপনা ও নিয়মিত হালনাগাদের মাধ্যমে প্রতিটি শিক্ষার্থীর ভর্তি প্রস্তুতি সহজ করা।
          </p>
        </div>
        <div className="facts">
          {FACTS.map((f) => (
            <div className="fact" key={f.big}>
              <b>{f.big}</b>
              <span>{f.small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
