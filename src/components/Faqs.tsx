import { useState } from "react";
import "./Faqs.css";

interface Faq {
  title: string;
  body: string;
}

const FAQs: Faq[] = [
  {
    title: "O que é a Mentaris?",
    body: "A Mentaris é um espaço dedicado à saúde mental e ao bem-estar emocional. Nosso propósito é oferecer um ambiente seguro e humanizado para que você possa explorar suas questões, organizar seus pensamentos e encontrar o equilíbrio necessário para viver com mais leveza e clareza.",
  },
  {
    title: "Como funciona?",
    body: "Nossa metodologia integra diferentes abordagens terapêuticas personalizadas para cada paciente. O processo começa com uma avaliação inicial para entendermos suas necessidades e, a partir daí, traçamos um plano de cuidado que combina sessões presenciais ou online com suporte via nosso aplicativo exclusivo.",
  },
  {
    title: "Quais os benefícios?",
    body: "Os principais benefícios incluem o desenvolvimento do autoconhecimento, a gestão eficaz do estresse e da ansiedade, a melhoria na qualidade dos relacionamentos e uma sensação duradoura de paz interior através de técnicas comprovadas de cuidado integral.",
  },
  {
    title: "Para quem é indicado?",
    body: "A Mentaris é indicada para qualquer pessoa que busque melhorar sua saúde emocional, desde aqueles que enfrentam transtornos específicos como depressão e burnout, até quem deseja apenas um espaço de reflexão e crescimento pessoal em um ambiente acolhedor.",
  },
  {
    title: "As sessões são sigilosas?",
    body: "Sim, o sigilo ético é um dos nossos pilares fundamentais. Todas as informações compartilhadas durante as terapias são protegidas, garantindo um ambiente de total confiança e segurança para que o paciente se sinta à vontade para se expressar.",
  },
  {
    title: "Como faço para agendar?",
    body: "O agendamento pode ser feito diretamente pelo nosso site, WhatsApp ou pelo aplicativo da Mentaris. Você escolhe o melhor horário e o profissional que mais se adequa ao seu perfil, com a flexibilidade de atendimentos em horários estendidos.",
  },
  {
    title: "Qual a duração do tratamento?",
    body: "A duração é variável e depende dos objetivos de cada indivíduo. Acreditamos em processos com autonomia: alguns pacientes buscam suporte para questões pontuais, enquanto outros mantêm um acompanhamento contínuo como parte de seu estilo de vida saudável.",
  },
  {
    title: "Aceitam convênios médicos?",
    body: "Trabalhamos principalmente com atendimentos particulares e sistema de reembolso. Fornecemos toda a documentação necessária para que você possa solicitar o reembolso junto ao seu plano de saúde de forma simples e rápida.",
  },
];

export function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section id="faqs">
      <div className="head">
        <h2 className="faqs-title">Duvidas frequentes</h2>
        <span className="text-background">FAQ</span>
      </div>
      <div className="faqs-container">
        {FAQs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div className={`faq ${isOpen ? "open" : ""}`} key={faq.title}>
              <div className="info">
                <h2 className="faq-title">{faq.title}</h2>
                <p className="faq-text">{faq.body}</p>
              </div>
              <button className={`show-hide ${isOpen? "shown": ""}`} onClick={() => {toggleFaq(index)}}>
                <span className="bar1"></span>
                <span className="bar2"></span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
