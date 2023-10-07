const { Country, Activity } = require("../db");

async function getCountryById(req, res) {
  const { id } = req.params;
  const upperId = id.toUpperCase();
  try {
    /* const { data } = await axios.get(`http://localhost:5000/countries/`); */
    const data = await Country.findOne({
      where: {
        id: upperId,
      },
      include: {
        model: Activity,
      },
    });

    if (!data) {
      return res.status(404).json({ message: "No data found" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

module.exports = getCountryById;
