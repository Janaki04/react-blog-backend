const express = require("express");
const cors=require("cors")

const router = require("./routing");

const app = express();  

const PORT = process.env.PORT || 8000;

app.use(cors())
app.use("/api/v1", router);

app.listen(PORT, ()=>{
    console.log("Application has started successfully");
})