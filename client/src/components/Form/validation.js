const validation = ({ name, difficulty, duration, season, countries }) => {
  const errors = {};

  if (name.length === 0) {
    errors.name = "Must to have a name";
  }
  if (name.length > 50) {
    errors.name = "Must to have a name less than 50";
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
  if (!season || season === "Select") {
    errors.season = "Must to have a season";
  }
  if (countries.length === 0) {
    errors.countries = "Must to have at least one country";
  }
  if (errors.name || errors.difficulty || errors.duration || errors.season) {
    return errors;
  } else return true;
};

export default validation;
