const{ MongoClient } = require("mongodb");
const uri = 'mongodb+srv://Maaz:Dwacjnl0YZfZSZxB@cluster0.ddr1wvj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
    products,
    orders
}