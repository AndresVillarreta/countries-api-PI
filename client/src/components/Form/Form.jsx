import styleF from "./Form.module.css";
import worldbg from "../../assets/world_hero.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries } from "../../redux/actions";
import axios from "axios";
import validation from "./validation";
import useForm from "./hook/useForm";

export default function Form() {
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    name,
    difficulty,
    duration,
    season,
    errorName,
    errorDifficulty,
    errorDuration,
    errorSeason,
    errorCountries,
    changeDifficulty,
    changeDuration,
    changeSeason,
    changeCountries,
    changeName,
    savedCountries,
    deleteSelectedCountries,
    form,
  } = useForm();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const submitActivity = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.difficulty === "" ||
      form.duration === "" ||
      form.season === ""
    ) {
      window.alert("Please complete all the fields");
    } else if (errorName || errorDifficulty || errorDuration || errorSeason) {
      window.alert("Please complete all the fields correctly");
    } else {
      postActivity();
    }
  };

  const postActivity = async () => {
    try {
      const response = await axios.post("http://localhost:3001/activities", {
        ...form,
        difficulty: Number(form.difficulty),
      });
      window.alert(response.data.Success);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <div className={styleF.container}>
      <section className={styleF.img_container}>
        <img
          src={worldbg}
          alt="world-bg"
          className={styleF.img_bg}
          width={"100px"}
        />
      </section>
      <section className={styleF.form_container}>
        <h1>Create Activity</h1>
        <article className={styleF.form_box}>
          <form onSubmit={submitActivity} className={styleF.form}>
            <label htmlFor="name">
              Name {errorName ? <span>{errorName}</span> : ""}
            </label>
            <input
              type="text"
              name="name"
              onChange={changeName}
              value={name}
              style={errorName ? { border: "1px solid red" } : {}}
            />
            <label htmlFor="difficulty">
              Difficulty {errorDifficulty ? <span>{errorDifficulty}</span> : ""}
            </label>
            <input
              type="number"
              name="difficulty"
              onChange={changeDifficulty}
              value={difficulty}
              style={errorDifficulty ? { border: "1px solid red" } : {}}
            />
            <label htmlFor="duration">
              Duration {errorDuration ? <span>{errorDuration}</span> : ""}
            </label>
            <input
              type="time"
              name="duration"
              onChange={changeDuration}
              value={duration}
              style={errorDuration ? { border: "1px solid red" } : {}}
            />
            <label htmlFor="season">
              Season {errorSeason ? <span>{errorSeason}</span> : ""}
            </label>
            <select
              name="season"
              onChange={changeSeason}
              value={season}
              style={errorSeason ? { border: "1px solid red" } : {}}
            >
              <option value="Select">Select</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
            <label htmlFor="countries">
              Countries {errorCountries ? <span>{errorCountries}</span> : ""}
            </label>
            <select
              name="countries"
              onChange={changeCountries}
              className={styleF.select}
              style={errorCountries ? { border: "1px solid red" } : {}}
            >
              <option value="Select">Select</option>
              {countries?.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
            <button type="submit">Create</button>
          </form>
          <div className={styleF.selection}>
            {savedCountries?.map((e) => (
              <div
                className={styleF.selected}
                key={e}
                onClick={deleteSelectedCountries}
              >
                {e}
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
