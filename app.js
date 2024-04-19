const express = require("express");
const app = express();
const port = 3000

const db =require("./models/index");
db.sequelize.sync()
app.listen(port,(req,res)=>{
	console.log(`server running on port ${port}......`)
})