import styleL from "./Landing.module.css";
import world_hero from "../../assets/world_hero.svg";
import arrow from "../../assets/arrow.svg";
import world_bg from "../../assets/world-bg.svg";
import selfie from "../../assets/selfie.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      scrollWatch();
    };
  });

  const scrollWatch = (e) => {
    if (document.documentElement.scrollTop > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styleL.container}>
      <img
        src={arrow}
        alt="scroll-top"
        className={scroll ? styleL.scroll : styleL.noScroll}
        onClick={scrollTop}
      />
      <img srcSet={world_bg} alt="BG" className={styleL.logoBG} />
      <div className={styleL.presentation}>
        <img srcSet={world_hero} alt="Hero" className={styleL.svg} />
        <div className={styleL.text}>
          <h1 className={styleL.title}>¡Bienvenid@s!</h1>
          <p className={styleL.description}>
            Esta es una API en la que puedes ver y saber un poco mas de
            informacion Sobre los paises. Ademas, también podras crear tus
            propias actividades para los paises. ¡Disfrutalo!
          </p>
          <button className={styleL.button}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
            >
              Homepage
            </NavLink>
          </button>
        </div>
      </div>
      <div className={styleL.arrow}>
        <img srcSet={arrow} alt="Arrow" className={styleL.svgArrow} />
      </div>
      <div className={styleL.title_text}>
        <h1>Sobre mi</h1>
      </div>
      <div className={styleL.about_container} id="about">
        <div className={styleL.about_space}>
          <img
            srcSet={selfie}
            alt="Andres Villarreta"
            className={styleL.selfie}
          />
          <div className={styleL.about_text}>
            <h1>Andres Villarreta</h1>
            <p>
              Estudiante Desarrollador Web Full Stack, con una gran pasión por
              el codigo, me centralizo mas en el lado del Front-End.
            </p>
            <br />
            <p>
              Este es mi Proyecto Individual, en el que podras ver y saber mas
              sobre los paises de la API. ¡Disfrutalo!
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className={styleL.contact_footer}>
          <h2>Contacto</h2>
          <p>Email: andresvillarreta1@proton.me</p>
          <p>Phone: +58-412-175-7642</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/andres-villarreta-ab55b1275/"
              target="_blank"
              style={{ color: "white" }}
            >
              AndresVillarreta
            </a>
          </p>
        </div>
        <div>
          <p>Copyright 2023</p>
          <p>Andres Villarreta</p>
        </div>
      </footer>
    </div>
  );
}
