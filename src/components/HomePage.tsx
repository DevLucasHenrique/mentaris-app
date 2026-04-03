import { Header } from "./header/Header";
import "./HomePage.css";
import background from "../assets/images/background.png";
import { Ecosystem } from "./Ecosystem";
import { History } from "./History";
import { Testimonials } from "./Testimonials";
import { Faqs } from "./Faqs";


export function HomePage() {
  return (
    <>
      <Header />
      <section id="hero">
        <img src={background} className="hero-image" alt="Background Image" />
      </section>

      <Ecosystem />
      <History />
      <Testimonials />
      <Faqs />
    </>
  );
}
