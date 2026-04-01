import "./Header.css";
import logo from "../../assets/images/logo.png";
export function Header() {
  return (
    <header>
      <img src={logo} className="logo-image" alt="Logo" />
      <button className="menu-button">
        <span className="bar1 bar"></span>
        <span className="bar2 bar"></span>
      </button>
    </header>
  );
}
