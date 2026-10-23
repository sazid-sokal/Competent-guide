import { useState } from "react";
import Brand from "./Brand.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Brand />
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          type="button"
          aria-label="মেনু"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-nav"
          className={`nav${open ? " open" : ""}`}
          aria-label="মূল মেনু"
          onClick={() => setOpen(false)}
        >
          {/* লিংকগুলো পরে আসল পেজের ঠিকানা দিয়ে বদলে নিন */}
          <a className="link" href="#">ফ্রি মডেল টেস্ট</a>
          <a className="signin" href="#">সাইন ইন</a>
          <a className="signout" href="#">সাইন আউট</a>
        </nav>
      </div>
    </header>
  );
}
