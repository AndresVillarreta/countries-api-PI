import styleC from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styleC.card_container}>
      <p style={{ fontSize: "100%" }}>{props?.name}</p>
      <img src={props?.img} alt="image" />
      <p>{props?.region}</p>
    </div>
  );
}
