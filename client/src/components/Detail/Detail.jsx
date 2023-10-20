import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import styleD from "./Detail.module.css";
import worldbg from "../../assets/world-bg.svg";
export default function Detail(props) {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch({ type: "GET_DETAIL", payload: [] });
    };
  }, []);
  return (
    <div className={styleD.container}>
      <img src={worldbg} alt="world-bg" className={styleD.bg_img} />
      <div className={styleD.info}>
        <h1>Activities</h1>
        <div className={styleD.activities_box}>
          {detail?.Activities?.map((e) => (
            <div className={styleD.activity} key={e.id}>
              <h3>{e.name}</h3>
              <p>
                <b>Difficulty: </b>
                {[...Array(e.difficulty)].map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </p>
              <p className={styleD.duration}>
                <b>Duration ⌚:</b> {e.duration}
              </p>
              <p>
                <b>Season </b>
                {e.season === "Verano" ? (
                  <b>🌞</b>
                ) : e.season === "Invierno" ? (
                  <b>❄️</b>
                ) : e.season === "Primavera" ? (
                  <b>🌸</b>
                ) : e.season === "Otoño" ? (
                  <b>🍂</b>
                ) : (
                  ""
                )}
                : <b>{e.season}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={styleD.info2}>
        <div className={styleD.info_content}>
          <div className={styleD.img}>
            <h2>{detail?.id}</h2>
            <img srcSet={detail?.flag} alt="image" />
          </div>
          <div className={styleD.content}>
            <h2>{detail?.name}:</h2>
            <p>
              <b>Region:</b> {detail?.region}
            </p>
            <p>
              <b>Capital:</b> {detail?.capital}
            </p>
            <p>
              <b>Subregion: </b>
              {detail?.subregion}
            </p>
            <p>
              <b>Population:</b> {detail?.population}
            </p>
            <p>
              <b>Area:</b> {detail?.area}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
