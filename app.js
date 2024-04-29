const express = require("express");
const path =require("path");
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())

const db =require("./models/index");
const Product = db.product
//console.log(db)

//serve static files
app.use(express.static(path.join(__dirname,'public')))


app.get("/",async (req,res)=>{

		const items = await Product.findAll()
	
	res.sendFile(path.join(__dirname,'views','products.html'))
})
app.get("/product/:id",async (req,res)=>{

	const item = await Product.findOne({where:{"id":req.params.id}})

	if(!item){
		res.send("item does not exist")
	}
	else{
		res.json(item)

	}
	
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
	**/
	const item = await Product.findOne({where:{"id":req.params.id}})
	res.json(item)
})


app.delete("/delete/:id",async (req,res)=>{
	try{
		const item = await Product.destroy({
			where:{id:req.params.id}
		})
		res.status(204).send("item deleted")
	}
	catch(error){
		res.send(error)
	}
})



db.sequelize.sync({alter:true})
app.listen(port,(req,res)=>{
	console.log(`server running on port ......${port}`);
})