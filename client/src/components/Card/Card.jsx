import styleC from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styleC.card_container}>
      <img src={props?.img} alt="image" />
      <p>{props?.name}</p>
      <p>{props?.region}</p>
    </div>
  );
}
