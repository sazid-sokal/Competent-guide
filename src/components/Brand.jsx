import { useState } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../data.jsx";

/* লোগো: public/logo.png নামে ফাইল রাখলে নিজে থেকে দেখাবে */
export default function Brand({ logoHeight }) {
  const [hasLogo, setHasLogo] = useState(true);
  return (
    <Link className="brand" to="/" aria-label="কম্পিটেন্ট হোম">
      {hasLogo && (
        <img
          src="/logo.png"
          alt=""
          style={logoHeight ? { height: logoHeight } : undefined}
          onError={() => setHasLogo(false)}
        />
      )}
      {/* <span className="brand-name">{BRAND}</span> */}
    </Link>
  );
}
