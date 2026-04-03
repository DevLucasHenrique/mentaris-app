import "./Testimonials.css";
import googleVerifyIcon from "../assets/icons/google.svg"
import arrowUp from "../assets/icons/arrow-up.svg"

interface Testimonial {
  name: string;
  date: string;
  body: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adriana Galvão",
    date: "04/03/2026",
    body: "Minha experiência na Mentaris foi transformadora. O acolhimento da equipe e a abordagem integrativa me ajudaram a encontrar um equilíbrio que eu não achava ser possível. Recomendo a todos que buscam saúde de verdade."
  },
  {
    name: "Luciano Aris",
    date: "28/02/2026",
    body: "O diferencial da Mentaris é o olhar humano. Não somos apenas sintomas, somos ouvidos de forma integral. O tratamento combinando técnicas modernas e tradicionais fez toda a diferença no meu processo de cura."
  },
  {
    name: "Mariana Costa",
    date: "15/02/2026",
    body: "Um ambiente de paz e profissionais de altíssimo nível. A integração das terapias me permitiu tratar não só o corpo, mas também a mente e o espírito. Sou muito grata por ter encontrado a clínica."
  },
  {
    name: "Ricardo Mendes",
    date: "10/02/2026",
    body: "Excelente estrutura e atendimento impecável. A Mentaris consegue unir ciência e sensibilidade de uma forma única. Sinto-me muito mais disposto e centrado após iniciar o acompanhamento integrativo."
  },
  {
    name: "Beatriz Oliveira",
    date: "02/02/2026",
    body: "O uso do app da clínica facilita muito o acompanhamento diário. É a tecnologia auxiliando no nosso bem-estar de forma prática e segura. Um novo padrão de cuidado terapêutico!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <h2 className="testimonials-title">O que nossos clientes dizem</h2>
      <div className="testimonials-container">
        {TESTIMONIALS.map((testimonial) => (
          <div className="testimonial">
            <div className="head">
              <img src={googleVerifyIcon} className="icon" alt="Testimonial icon" />
              <div className="head-info">
                <h4 className="writer-name">{testimonial.name}</h4>
                <h4 className="testimonial-date">{testimonial.date}</h4>
              </div>
            </div>
            <p className="body-text">
              {testimonial.body}
            </p>
            <button className="details">Conferir mais detalhes <img className="arrow-up" src={arrowUp} alt="Arrow Up" /></button>
          </div>
        ))}
      </div>
    </section>
  );
}
