import { Link } from "react-router-dom";
import Brand from "./Brand.jsx";
import { CONTACT } from "../data.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Brand logoHeight={40} />
            <p>অনার্স ভর্তি সহায়িকা (মানবিক), ১৯তম সংস্করণ। শিক্ষাবর্ষ ২০২৬-২৭।</p>
          </div>
          <div>
            <h4>দ্রুত লিংক</h4>
            <ul>
              <li><Link to="/">হোম</Link></li>
              <li><Link to="/order">বই অর্ডার করুন</Link></li>
              <li><a href="#">ফ্রি মডেল টেস্ট</a></li>
              <li><a href="/#about">আমাদের সম্পর্কে</a></li>
            </ul>
          </div>
          <div>
            <h4>যোগাযোগ</h4>
            <ul>
              <li>মোবাইল: {CONTACT.phone}</li>
              <li>Whatsapp: {CONTACT.whatsapp}</li>
              <li>ইমেইল: {CONTACT.email}</li>
              <li>
                ফেসবুক পেজ:{" "}
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">
                  Competent Guide
                </a>
              </li>
              <li>
                ফেসবুক গ্রপ:{" "}
                <a href={CONTACT.fbGroup} target="_blank" rel="noopener noreferrer">
                  Competent Guide FB Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © Developed by fibonix
        </div>
      </div>
    </footer>
  );
}
