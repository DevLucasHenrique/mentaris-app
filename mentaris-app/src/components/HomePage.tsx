import { Header } from "./header/Header";
import "./HomePage.css";
import background from "../assets/images/background.png";
import arrow from "../assets/icons/arrow-up.svg"
import bagsImage from "../assets/images/bags.png"
import beach from "../assets/images/beach.png"

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
          <div className="system">
            <div className="info">
              <h4 className="system-title">Loja Virtual</h4>
              <p className="system-text">Expore nossa vritrine de produtos oficiais da Mentaris.</p>
              <button className="store-button">Acessar Loja <img className="arrow-up" src={arrow} alt="" /></button>
            </div>
            <div className="images">
              <img src={bagsImage} alt="Bags" />
              <img src={beach} alt="Woman on Beach" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}


