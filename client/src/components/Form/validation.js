export const validateName = (name) => {
  if (name.length === 0) {
    return "Name is required";
  }
  if (name.length > 50) {
    return "Name must be less than 50 characters";
  }
  return false;
};

export const validateDifficulty = (difficulty) => {
  if (difficulty > 5) {
    return "Difficulty must be less than 5";
  }
  if (difficulty < 1) {
    return "Difficulty must be greater than 1";
  }
  return false;
};

export const validateDuration = (duration) => {
  if (duration === "") {
    return "Duration is required";
  }
  return false;
};

export const validateSeason = (season) => {
  if (season === "Select") {
    return "Season is required";
  }
  return false;
};

export const validateCountries = (countries) => {
  if (!countries.length) {
    return "At least one country is required";
  }
  return false;
};
