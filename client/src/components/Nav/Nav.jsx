import styleNav from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styleNav.container}>
      <div className={styleNav.logo}>COUNTRIES API</div>
      <div className={styleNav.links}>
        <NavLink className={styleNav.nl}>
          <p>¿Como funciona?</p>
        </NavLink>
        <NavLink className={styleNav.nl}>
          <p>Sobre mi</p>
        </NavLink>
      </div>
    </div>
  );
}
