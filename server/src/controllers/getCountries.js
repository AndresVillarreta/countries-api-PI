const axios = require("axios");
const { Country } = require("../db");

async function getCountries(req, res) {
  const { name } = req.query;
  if (name) {
    try {
      /* const { data } = await axios.get(`http://localhost:5000/countries`); */
      const countries = await Country.findAll();
      const filteredData = countries.filter((country) => {
        return country.name.toLowerCase().includes(name.toLowerCase());
      });
      res.json(filteredData);
      /*       if (filteredData.length === 0) {
        return res
          .status(404)
          .json({ message: "No se encontro el/los pais/es" });
      } */
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    try {
      /* const { data } = await axios.get("http://localhost:5000/countries"); */
      const data = await Country.findAll();
      if (!data) {
        return res.status(404).json({ message: "No data found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = getCountries;
