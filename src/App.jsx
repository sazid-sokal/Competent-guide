import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Speciality from "./components/Speciality.jsx";
import Intro from "./components/Intro.jsx";
import Board from "./components/Board.jsx";
import Order from "./components/Order.jsx";
import Footer from "./components/Footer.jsx";

/* পেজ বদলালে উপরে যায়; /#about এর মতো লিংকে এলে ওই অংশে যায় */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Speciality />
      <Intro />
      <Board />
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
