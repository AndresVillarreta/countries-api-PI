const axios = require("axios");
const { Activity } = require("../db.js");
const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  if (!name || !difficulty || !duration || !season) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const data = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    if (countries) {
      data.addCountries(countries);
    }
    res.status(201).json({ Success: "Activity created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = postActivities;
