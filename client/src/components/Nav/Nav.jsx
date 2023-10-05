import styleNav from "./Nav.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [info, setInfo] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setInfo(true);
    } else {
      setInfo(false);
    }
  }, [location.pathname]);
  const scrollHow = (e) => {
    window.scrollTo({
      top: 780,
      behavior: "smooth",
    });
  };
  const scrollAbout = (e) => {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  };
  return (
    <div className={styleNav.container}>
      <div className={styleNav.logo}>COUNTRIES API</div>
      <div className={info ? styleNav.links : styleNav.noLinks}>
        <NavLink className={styleNav.nl} onClick={scrollHow}>
          <p>¿Como funciona?</p>
        </NavLink>
        <NavLink className={styleNav.nl} onClick={scrollAbout}>
          <p>Sobre mi</p>
        </NavLink>
      </div>
      <div
        className={info ? styleNav.noLinks : styleNav.links2}
        onClick={() => navigate("/")}
      >
        <NavLink to="/" className={styleNav.nl2}>
          <p>Volver</p>
        </NavLink>
      </div>
    </div>
  );
}
