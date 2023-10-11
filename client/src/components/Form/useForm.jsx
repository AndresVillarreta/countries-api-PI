import { useState } from "react";
export default function useForm() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [countries, setCountries] = useState([]);

  return {
    name,
    setName,
    difficulty,
    setDifficulty,
    duration,
    setDuration,
    season,
    setSeason,
    countries,
    setCountries,
  };
}
