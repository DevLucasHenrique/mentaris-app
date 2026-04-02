import "./Header.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
export function Header() {
  const [menuState, setMenuState] = useState("closed");

  return (
    <>
      <header>
        <img src={logo} className="logo-image" alt="Logo" />
        <button
          className={`menu-button ${menuState === "open"? 'menu-active': 'menu-closing'}`}
          onClick={() => {
            setMenuState(menuState === "closed" ? "open" : "closed");
          }}
        >
          <span className="bar1 bar"></span>
          <span className="bar2 bar"></span>
        </button>
      </header>
      <div className={`mobile-menu ${menuState} `}></div>
    </>
  );
}
