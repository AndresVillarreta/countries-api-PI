import styleNav from "./Nav.module.css";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();

  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setInfo(true);
    } else {
      setInfo(false);
    }
  }, [location.pathname]);
  const scrollAbout = (e) => {
    window.scrollTo({
      top: 840,
      behavior: "smooth",
    });
  };
  const comeBack = () => {
    if (location.pathname === "/home") return true;
    if (location.pathname.includes("/country")) return false;
  };
  return (
    <div className={styleNav.container}>
      <div className={styleNav.logo}>COUNTRIES API</div>
      <div className={info ? styleNav.links : styleNav.noLinks}>
        <NavLink className={styleNav.nlAboutMe} onClick={scrollAbout}>
          <p>Sobre mi</p>
        </NavLink>
      </div>
      <NavLink
        className={
          location.pathname === "/home" ? styleNav.nl : styleNav.desactivate
        }
        to={"/create"}
      >
        <button className={styleNav.option_button}>Crear Actividad</button>
      </NavLink>
      <div className={info ? styleNav.noLinks : styleNav.links2}>
        <NavLink className={styleNav.nl2} to={comeBack() ? "/" : "/home"}>
          <p>Volver</p>
        </NavLink>
      </div>
    </div>
  );
}
