const app = require("../src/server");
const session = require("supertest");
const agent = session(app);
const { conn } = require("../src/db");

const activity = {
  name: "prueba",
  difficulty: 4,
  season: "Verano",
  duration: "01:03:05",
};

beforeAll(async () => {
  await conn.sync({ force: true });
});

describe("Chequear actividades", () => {
  it("POST /activities", async () => {
    await agent.post("/activities").send(activity);
    expect(201);
  });
  it("/POST Deberia de fallar", async () => {
    const res = await agent.post("/activities", { name: "nose" });
    expect(400);
    expect(res.body).toEqual({
      message: "All fields are required",
    });
  });
  it("GET /activities", async () => {
    const res = await agent.get("/activities");
    expect(200);
    expect(res.body).toEqual([
      {
        Countries: [],
        difficulty: 4,
        duration: "01:03:05",
        id: 1,
        name: "prueba",
        season: "Verano",
      },
    ]);
  });
});
