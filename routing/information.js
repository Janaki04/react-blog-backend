const express = require("express");

const informationController = require("../controllers/information")

const informationRouter = express.Router();


informationRouter.route("/details")
    .get(informationController.informationGet);

    informationRouter.route("/details/:category")
    .get(informationController.informationGet);

informationRouter.route("/details/:category/:id")
    .get(informationController.informationGet);




module.exports = informationRouter