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
    console.log(window.document.onscrolltop);
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            officiis cumque dolore consequatur, sed tempora alias unde modi
            pariatur iure consectetur enim illum fugiat nihil quia nesciunt non
            dignissimos porro.
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
        <h1>¿Como funciona?</h1>
      </div>
      <div className={styleL.how_container} id="how">
        <div className={styleL.how_space}>
          <div className={styleL.space}>
            <img
              src="https://flagcdn.com/w320/ve.png"
              alt="vzla flag"
              className={styleL.flag}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              rerum atque optio neque
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, eos
              maiores magni impedit
            </p>
            <img
              src="https://flagcdn.com/w320/ar.png"
              alt="Argentina"
              className={styleL.flag}
            />
          </div>
          <div className={styleL.space}>
            <img
              src="https://flagcdn.com/w320/ve.png"
              alt="vzla flag"
              className={styleL.flag}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              rerum atque optio neque
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, eos
              maiores magni impedit
            </p>
            <img
              src="https://flagcdn.com/w320/ar.png"
              alt="Argentina"
              className={styleL.flag}
            />
          </div>
        </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              rerum atque optio neque
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, eos
              maiores magni impedit
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className={styleL.contact_footer}>
          <h2>Contacto</h2>
          <p>Email: 7Fz7V@example.com</p>
          <p>Phone: 123456789</p>
          <p>LinkedIn: Andres Villarreta</p>
        </div>
        <div>
          <p>Copyright 2023</p>
          <p>Andres Villarreta</p>
        </div>
      </footer>
    </div>
  );
}
