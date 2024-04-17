const { DataTypes, Model }= require('sequelize');
const sequelize = new Sequelize('sequelize_db','sequelize_user','7mudaki',{
	host:'localhost',
	dialect:'postgres'
});

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
async() =>{
	await sequelize.sync();
}

module.exports = Product