import { useEffect, useState } from "react";
import {
  validateName,
  validateDifficulty,
  validateDuration,
  validateSeason,
  validateCountries,
} from "../Form/validation";
export default function useForm() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [formCountries, setFormCountries] = useState([]);
  const [errorName, setErrorName] = useState("");
  const [errorDifficulty, setErrorDifficulty] = useState("");
  const [errorDuration, setErrorDuration] = useState("");
  const [errorSeason, setErrorSeason] = useState("");
  const [errorCountries, setErrorCountries] = useState("");
  const [savedCountries, setSavedCountries] = useState([]);
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const changeName = (e) => {
    setName(e.target.value);
    setForm({ ...form, name: e.target.value });
    setErrorName(validateName(e.target.value));
  };
  const changeDifficulty = (e) => {
    setDifficulty(e.target.value);
    setForm({ ...form, difficulty: e.target.value });
    setErrorDifficulty(validateDifficulty(e.target.value));
  };
  const changeDuration = (e) => {
    setDuration(e.target.value);
    setForm({ ...form, duration: e.target.value });
    setErrorDuration(validateDuration(e.target.value));
  };
  const changeSeason = (e) => {
    setSeason(e.target.value);
    setForm({ ...form, season: e.target.value });
    setErrorSeason(validateSeason(e.target.value));
  };
  const changeCountries = (e) => {
    if (e.target.value === "Select") {
      return;
    }
    setFormCountries([...formCountries, e.target.value]);
    setSavedCountries((prev) => {
      const newCountries = [...prev, e.target.value];
      setErrorCountries(validateCountries(newCountries));
      setForm({ ...form, countries: newCountries });
      return newCountries;
    });
  };
  const deleteSelectedCountries = (event) => {
    setFormCountries(formCountries.filter((e) => e !== event.target.innerText));
    setSavedCountries((prev) => {
      const newCountries = prev.filter((e) => e !== event.target.innerText);
      setErrorCountries(validateCountries(newCountries));
      setForm({ ...form, countries: newCountries });
      return newCountries;
    });
  };
  const resetForm = () => {
    setName("");
    setDifficulty("");
    setDuration("");
    setSeason("");
    setFormCountries([]);
    setSavedCountries([]);
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  return {
    name,
    difficulty,
    duration,
    season,
    formCountries,
    changeName,
    changeDifficulty,
    changeDuration,
    changeSeason,
    changeCountries,
    errorName,
    errorDifficulty,
    errorDuration,
    errorSeason,
    errorCountries,
    savedCountries,
    deleteSelectedCountries,
    form,
    resetForm,
  };
}
