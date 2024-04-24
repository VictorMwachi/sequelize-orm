<<<<<<< HEAD
const { Model } = require('sequelize');

module.exports = (sequelize,DataTypes)=>{

	class Product extends Model {}

	Product.init({
		code:{
			type:DataTypes.STRING,
			allowNull:false,
			unique:true
		},

		name:{
			type:DataTypes.STRING,
			allowNull:false,
			unique:true
		},
		costPrice:{
			type:DataTypes.INTEGER,
			allowNull:false
		},
		unitOfMeasure:{
			type:DataTypes.STRING,
			allowNull:false
		}
		/**description:DataTypes.STRING,
		category:DataTypes.STRING,
		brand:DataTypes.STRING,
		unitOfMeasure:DataTypes.STRING,
		barcode:DataTypes.STRING,
		costPrice:DataTypes.INTEGER,
		sellingPrice:DataTypes.INTEGER,
		packaging:DataTypes.STRING,
		quantityAtHand:DataTypes.INTEGER,
		reorderLevel:DataTypes.INTEGER,
		images:DataTypes.STRING*/
	},
	{ sequelize, modelName:'product'});

	return Product

}

/**
 *    - Product ID/Code: A unique identifier for each product.
   - Name: The name of the product.
   - Description: A brief description of the product.
   - Category: The category or type of the product (e.g., electronics, clothing, groceries).
   - Brand: The brand associated with the product.
   - Supplier Information: Information about the supplier or vendor.
   - Cost Price: The price at which the product is purchased from the supplier.
   - Selling Price: The price at which the product is sold to customers.
   - Quantity on Hand: The current quantity of the product in stock.
   - Reorder Level: The minimum quantity at which the product should be reordered.
   - Images: Images of the product for visual reference.
   */

=======
//const { Sequelize, DataTypes, Model }= require('sequelize');
/**const sequelize = new Sequelize('sequelize_db','sequelize_user','7mudaki',{
	host:'localhost',
	dialect:'postgres'
});**/

class Product extends Model {}


Product.init({
	name:DataTypes.STRING,
	code:DataTypes.STRING,
	unitOfMeasure:DataTypes.STRING,
	brand:DataTypes.STRING,
	barcode:DataTypes.STRING,
	quantityAtHand:DataTypes.INTEGER
},
{sequelize,
modelName:'Product'});

// Synchronize the model with the database
(async() =>{
	await sequelize.sync();
})();

module.exports = Product
>>>>>>> 4e61f76c480b1e899aae7b69b0f18c4e7eae2f0a
