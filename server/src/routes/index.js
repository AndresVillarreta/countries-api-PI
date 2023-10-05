const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Activity, Country } = require("../db");

const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryByID");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");

router.get("/countries", getCountries);

router.get("/countries/:id", getCountryById);

router.post("/activities", postActivities);

router.get("/activities", getActivities);

module.exports = router;
