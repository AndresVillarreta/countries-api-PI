import { useParams } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}
