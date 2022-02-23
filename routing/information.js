const express = require("express");

const informationController = require("../controllers/information")

const informationRouter = express.Router();


// informationRouter.route("/details")
//     .get(informationController.getCategory);

    informationRouter.route("/:category")
    .get(informationController.getCategory); 

informationRouter.route("/:category/:id")
    .get(informationController.getId);




module.exports = informationRouter