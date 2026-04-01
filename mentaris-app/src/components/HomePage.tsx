import { Header } from "./header/Header";
import "./HomePage.css";
import background from "../assets/images/background.png";

export function HomePage() {
  return (
    <>
      <Header />
      <section id="hero">
        <img src={background} className="hero-image" alt="Background Image" />
      </section>

      <section id="ecosystem">
        <h2 className="ecosystem-title">Tratamento descomplicado</h2>
        <div className="systems-container">
          <div className="system"></div>
          <div className="system"></div>
          <div className="system"></div>
        </div>
      </section>
    </>
  );
}
