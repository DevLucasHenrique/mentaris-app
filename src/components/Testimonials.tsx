import "./Testimonials.css";
import googleVerifyIcon from "../assets/icons/google.svg";
import arrowUp from "../assets/icons/arrow-up.svg";
import { useEffect, useState } from "react";

const URL = "http://localhost:8000/api";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  body: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const getTestimonials = async () => {
    try {
      const resp = await fetch(`${URL}/testimonials`);
      if (!resp.ok) {
        console.log("Request ERROR");
        return;
      }

      const TESTIMONIALS: Testimonial[] = await resp.json();

      if (!TESTIMONIALS || TESTIMONIALS.length <= 0) {
        console.log("Can't find any testimonial");
        return;
      }

      setTestimonials(TESTIMONIALS);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

// TODO create a testimonial detail page that load the backend info from that testimonial passing the id in the URL //


  return (
    <section id="testimonials">
      <h2 className="testimonials-title">O que nossos clientes dizem</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.name}>
            <div className="head">
              <img
                src={googleVerifyIcon}
                className="icon"
                alt="Testimonial icon"
              />
              <div className="head-info">
                <h4 className="writer-name">{testimonial.name}</h4>
                <h4 className="testimonial-date">{testimonial.date}</h4>
              </div>
            </div>
            <p className="body-text">{testimonial.body}</p>
            <button className="details" data-id={testimonial.id}> 
              Conferir mais detalhes
              <img className="arrow-up" src={arrowUp} alt="Arrow Up" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
