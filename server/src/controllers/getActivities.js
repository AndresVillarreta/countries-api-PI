const { Activity, Country } = require("../db.js");

const getActivities = async (req, res) => {
  try {
    const response = await Activity.findAll({
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = getActivities;
