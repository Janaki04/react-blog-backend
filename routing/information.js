const express = require("express");

const informationController = require("../controllers/information")

const informationRouter = express.Router();


informationRouter.route("/data")
.get(informationController.getCategory);

informationRouter.route("/blog/:id")
.get(informationController.getId);

informationRouter.route("/data/:category")
    .get(informationController.getCategory); 







module.exports = informationRouter