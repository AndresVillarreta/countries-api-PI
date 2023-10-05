const { Country } = require("../db");

async function getCountryById(req, res) {
  const { id } = req.params;
  try {
    /* const { data } = await axios.get(`http://localhost:5000/countries/`); */
    const data = await Country.findAll();
    const filteredData = data.filter((country) => {
      return country.id === id.toUpperCase();
    });
    if (!data) {
      return res.status(404).json({ message: "No data found" });
    } else {
      res.status(200).json(filteredData);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = getCountryById;
