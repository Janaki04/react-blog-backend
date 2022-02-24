const express = require("express");
const cors=require("cors")

const router = require("./routing");

const app = express();  

app.use(cors())
app.use("/api/v1", router);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Application has started successfully");
})