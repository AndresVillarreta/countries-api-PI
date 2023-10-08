const { dbUpload } = require("./db");
const countries = require("../api/db.json");
const cFiltered = countries.countries.map((country) => {
  return {
    name: country.name.common,
    id: country.cca3,
    flag: country.flags.png,
    region: country.region,
    subregion: country.subregion ? country.subregion : "None",
    capital: country.capital ? country.capital[0] : "None",
    area: country.area,
    population: country.population,
  };
});

dbUpload(cFiltered)
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.log(error);
  });
