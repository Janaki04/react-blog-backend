const express = require("express");
const informationRouter = require("./information");



const router = express.Router();

router.use("/information", informationRouter);


module.exports = router;