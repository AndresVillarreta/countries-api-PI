import styleF from "./Form.module.css";
import worldbg from "../../assets/world_hero.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCountries } from "../../redux/actions";
import useForm from "./useForm";
export default function Form() {
  const { countries } = useSelector((state) => state);
  const dispatch = useDispatch();

  //seccion de form
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const [selectedCountries, setSelectedCountries] = useState([]);

  const selectCountry = (e) => {
    if (
      selectedCountries.includes(e.target.value) ||
      e.target.value === "Select"
    ) {
      return;
    }
    setSelectedCountries([...selectedCountries, e.target.value]);
    setForm({
      ...form,
      countries: [...form.countries, e.target.value],
    });
  };

  const submitActivity = (e) => {
    e.preventDefault();
    const val = validation(form);
    if (val) {
      console.log(val);
    }
  };

  const deleteCountry = (event) => {
    setSelectedCountries(
      selectedCountries.filter((e) => e !== event.target.textContent)
    );
    setForm({
      ...form,
      countries: selectedCountries.filter(
        (e) => e !== event.target.textContent
      ),
    });
  };

  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.name,
      };
    });
  };

  useEffect(() => {
    setErrors(validation(form));
  }, [form]);

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
              Name {errors.name ? <span>{errors.name}</span> : ""}
            </label>
            <input type="text" name="name" onChange={handleChange} />
            <label htmlFor="difficulty">
              Difficulty{" "}
              {errors.difficulty ? <span>{errors.difficulty}</span> : ""}
            </label>
            <input type="number" name="difficulty" onChange={handleChange} />
            <label htmlFor="duration">
              Duration {errors.duration ? <span>{errors.duration}</span> : ""}
            </label>
            <input type="time" name="duration" onChange={handleChange} />
            <label htmlFor="season">
              Season {errors.season ? <span>{errors.season}</span> : ""}
            </label>
            <select name="season" onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
            <label htmlFor="countries">
              Countries
              {errors.countries ? <span>{errors.countries}</span> : ""}
            </label>
            <select
              name="countries"
              onChange={selectCountry}
              className={styleF.select}
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
            {selectedCountries.map((e) => (
              <div className={styleF.selected} key={e} onClick={deleteCountry}>
                {e}
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

const validation = ({ name, difficulty, duration, season, countries }) => {
  const errors = {};

  if (name.length === 0) {
    errors.name = "Must to have a name";
  }
  if (!difficulty) {
    errors.difficulty = "Must to have a difficulty";
  }
  if (difficulty > 5) {
    errors.difficulty = "Must to have a difficulty less than 5";
  }
  if (difficulty < 1) {
    errors.difficulty = "Must to have a difficulty greater than 1";
  }
  if (!duration) {
    errors.duration = "Must to have a duration";
  }
  if (!season) {
    errors.season = "Must to have a season";
  }
  console.log(errors.countries);
  if (countries.length === 0) {
    errors.countries = "Must to have at least one country";
  }
  if (errors.name || errors.difficulty || errors.duration || errors.season) {
    return errors;
  } else return true;
};
