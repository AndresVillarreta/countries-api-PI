import { useEffect } from "react";
import styleC from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      className={styleC.card_container}
      onClick={() => navigate(`/country/${props?.id}`)}
    >
      <p style={{ fontSize: "100%" }}>{props?.name}</p>
      <img src={props?.img} alt="image" />
      <p>{props?.region}</p>
    </div>
  );
}
