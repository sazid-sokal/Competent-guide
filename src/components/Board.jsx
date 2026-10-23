import { BOARD } from "../data.jsx";

export default function Board() {
  return (
    <section className="section board" id="board">
      <svg className="wave-top" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H1440 V20 C1200 60 1020 0 720 24 C420 48 240 0 0 30 Z" fill="#ffffff" />
      </svg>
      <div className="wrap">
        <div className="section-head">
          <h2>পরিচালনা পর্ষদ</h2>
          <p>কম্পিটেন্ট গাইড সম্পাদনা পরিষদ</p>
        </div>
        <div className="board-grid">
          {BOARD.map((m, i) => (
            <div className="member" key={i}>
              <div className="avatar">
                {m.photo ? <img src={m.photo} alt={m.name} /> : m.initial}
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
