import styleL from "./Landing.module.css";
import world_hero from "../../assets/world_hero.svg";
import arrow from "../../assets/arrow.svg";
import world_bg from "../../assets/world-bg.svg";

export default function Landing() {
  return (
    <div className={styleL.container}>
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
          <button className={styleL.button}>Homepage</button>
        </div>
      </div>
      <div className={styleL.arrow}>
        <img srcSet={arrow} alt="Arrow" className={styleL.svgArrow} />
      </div>
      <div className={styleL.title_text}>
        <h1>¿Como funciona?</h1>
      </div>
      <div className={styleL.how_container}>
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
    </div>
  );
}
