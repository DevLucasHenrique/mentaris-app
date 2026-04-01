import { Header } from './header/Header'
import './HomePage.css'
import background from "../assets/images/background.png";



export function HomePage() {
  return (
    <>
    <Header />
    <section id='hero'>
      <img src={background} className='hero-image' alt="Background Image" />
    </section>
    </>
  )
}