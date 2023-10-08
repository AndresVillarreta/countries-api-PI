import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  return (
    <div>
      <h1>{detail?.name}</h1>
      <img src={detail?.flag} alt="image" />
      <p>{detail?.region}</p>
      <p>{detail?.subregion}</p>
      <p>{detail?.capital}</p>
      <p>{detail?.population}</p>
      <p>{detail?.area}</p>
      <p>{detail?.id}</p>
      <p>
        {detail?.Activities?.map((activity) => {
          return (
            <div>
              <p>{activity.name}</p>
              <p>{activity.duration}</p>
              <p>{activity.difficulty}</p>
              <p>{activity.season}</p>
              <p>{activity.id}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}
