import "./History.css";
import logoLemon from "../assets/icons/logo-lemon.png"


export function History() {
  return (
    <section id="history-section">
      <p className="history-text">
        Líder em bem-estar e saúde mental no Brasil, a <img src={logoLemon} className="text-logo-image" alt="Logo" /> Mentaris
        transforma vidas com atendimento personalizado, tecnologia de ponta e
        profissionais apaixonados pelo que fazem. Você merece o melhor.
      </p>
      <button className="talk">Falar com um especialista</button>
    </section>
  );
}
