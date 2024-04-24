const express = require("express");
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 3000
app.use(express.json())

const db =require("./models/index");
const Product = db.product
//console.log(db)


app.get("/",async (req,res)=>{

		const items = await Product.findAll()
	
	res.json(items)
})
app.get("/products",async (req,res)=>{

	const items = await Product.findAll()
	
	res.json(items)
})

app.post("/add-product",async (req,res)=>{
	try {
		// statements
		const item = await Product.create({
			code:req.body.code,
			name:req.body.name,
			costPrice:req.body.costPrice,
			unitOfMeasure:req.body.unitOfMeasure
		});
		item.save();

		res.status(201).json("product added succesfully")
	} catch(e) {
		// statements
		console.log(e);

		res.json("Error,product was not added")
	}

	
	
})
app.put("/update/:id", async (req,res)=>{

	console.log(req.body.id);
	console.log("above here");

	/**
	const item = await Product.update(
		{code:"003"},
		{
			where:{id:3},
		});
	item.save()

	res.json(item)**/
})


app.post("/delete",async (req,res)=>{

const item = await Product.destroy({
	where:{id:18}
})

res.json(item)
})

db.sequelize.sync({alter:true})
app.listen(port,(req,res)=>{
	console.log(`server running on port ......${port}`);
=======
const port = 3000

const db =require("./models/index");
db.sequelize.sync()
app.listen(port,(req,res)=>{
	console.log(`server running on port ${port}......`)
>>>>>>> 4e61f76c480b1e899aae7b69b0f18c4e7eae2f0a
})