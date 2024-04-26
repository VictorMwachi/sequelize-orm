const express = require("express");
const app = express();
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

	console.log(req.params.id);
	console.log("above here");

	/**
	const item = await Product.update(
		{code:"003"},
		{
			where:{id:id},
		});
	item.save()

	res.json(item)**/
})


app.delete("/delete/:id",async (req,res)=>{

const item = await Product.destroy({
	where:{id:id}
})

res.json(item).send("item deleted")
})

db.sequelize.sync({alter:true})
app.listen(port,(req,res)=>{
	console.log(`server running on port ......${port}`);
})