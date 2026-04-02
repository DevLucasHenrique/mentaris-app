import { Header } from "./header/Header";
import "./HomePage.css";
import background from "../assets/images/background.png";
import logoLemon from "../assets/icons/logo-lemon.png"
import arrow from "../assets/icons/arrow-up.svg";
import bagsImage from "../assets/images/bags.png";
import beach from "../assets/images/beach.png";
import apple from "../assets/icons/apple.png";
import android from "../assets/icons/android.png";
import illustrationApp from "../assets/images/app-illustration.png";
import womanIllustration from "../assets/images/woman-ilustration.png";

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
          <div className="system store-card">
            <div className="info">
              <h4 className="system-title">Loja Virtual</h4>
              <p className="system-text">
                Expore nossa vritrine de produtos oficiais da Mentaris.
              </p>
              <button className="go-button">
                Acessar Loja <img className="arrow-up" src={arrow} alt="" />
              </button>
            </div>
            <div className="images">
              <img src={bagsImage} alt="Bags" />
              <img src={beach} alt="Woman on Beach" />
            </div>
          </div>

          <div className="app-card system">
            <div className="brands">
              <img src={android} className="android-icon" alt="Android" />
              <img src={apple} className="apple-icon" alt="Apple" />
            </div>
            <div className="info">
              <h4 className="system-title">Aplicativo</h4>
              <p className="system-text">
                Acompanhe todos os seus tratamentos na palma da mão
              </p>
              <button className="go-button">
                Baixar App <img className="arrow-up" src={arrow} alt="" />
              </button>
            </div>
            <img className="mobile-image" src={illustrationApp} />
          </div>

          <div className="system online-call">
            <div className="info">
              <h4 className="system-title">Consulta Online</h4>
              <p className="system-text">
                Agende sua sessão de onde estiver, com toda a comodidade que você mecere.
              </p>
            </div>
            <img src={womanIllustration} alt="Woman" className="woman-illustration" />
          </div>
        </div>
      </section>
      <section id="history-section">
        <p className="history-text">
          Líder em bem-estar e saúde mental no Brasil, a <img src={logoLemon} className="text-logo-image" alt="Logo" /> Mentaris transforma vidas com atendimento personalizado, tecnologia de ponta e profissionais apaixonados pelo que fazem. Você merece o melhor.
        </p>
      </section>
    </>
  );
}
