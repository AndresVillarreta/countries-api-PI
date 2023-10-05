const app = require("../src/server");
const session = require("supertest");
const agent = session(app);
const { conn } = require("../src/db");
const { Country } = require("../src/db");
const countrydb = require("../api/db.json");

const cFiltered = countrydb.countries.map((country) => {
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

beforeAll(async () => {
  await conn.sync({ force: true });
  await Country.bulkCreate(cFiltered);
});

describe("Chequear Countries", () => {
  it("GET /countries", async () => {
    const res = await agent.get("/countries");
    expect(200);
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty("capital");
    expect(res.body[0]).toHaveProperty("region");
    expect(res.body[0]).toHaveProperty("subregion");
    expect(res.body[0]).toHaveProperty("area");
    expect(res.body[0]).toHaveProperty("population");
    expect(res.body[0]).toHaveProperty("flag");
  });
});
describe("Controlador GET ID Country", () => {
  it("GET /countries/:id en minusculas", async () => {
    const res = await agent.get("/countries/arg");
    expect(200);
    expect(res.body).toEqual([
      {
        name: "Argentina",
        capital: "Buenos Aires",
        region: "Americas",
        subregion: "South America",
        area: 2780400,
        population: 45376763,
        flag: "https://flagcdn.com/w320/ar.png",
        id: "ARG",
      },
    ]);
  });
  it("GET /countries/:id en MAYUSCULAS", async () => {
    const res = await agent.get("/countries/ARG");
    expect(200);
    expect(res.body).toEqual([
      {
        name: "Argentina",
        capital: "Buenos Aires",
        region: "Americas",
        subregion: "South America",
        area: 2780400,
        population: 45376763,
        flag: "https://flagcdn.com/w320/ar.png",
        id: "ARG",
      },
    ]);
  });
  it("GET /countries Querys", async () => {
    const res = await agent.get("/countries?name=venezuela");
    expect(200);
    expect(res.body).toEqual([
      {
        name: "Venezuela",
        capital: "Caracas",
        region: "Americas",
        subregion: "South America",
        area: 916445.0,
        population: 28435943,
        flag: "https://flagcdn.com/w320/ve.png",
        id: "VEN",
      },
    ]);
  });
});
