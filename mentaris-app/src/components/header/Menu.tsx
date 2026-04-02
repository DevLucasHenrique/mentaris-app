import "./Header.css";
import { NavLink } from "react-router";

interface MenuProps {
  menuState: string;
}

export function Menu({ menuState }: MenuProps) {
  return (
    <div className={`mobile-menu ${menuState} `}>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "menu-link")}
        to={"/"}
      >
        Página Inicial
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "menu-link")}
        to={"/tratamentos"}
      >
        Tratamentos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "menu-link")}
        to={"/sobre"}
      >
        Sobre nós
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "menu-link")}
        to={"/em-desenvolvimento"}
      >
        Loja Virtual
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "menu-link")}
        to={"/em-desenvovimento"}
      >
        App
      </NavLink>
    </div>
  );
}
