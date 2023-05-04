const express = require('express');
const app = express();
const productRoutes = require('./router/productRoutes.js')
const orderRoutes = require('./router/orderRoutes.js');
const bodyParser = require('body-parser')
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.listen(PORT, (req, res) => {
})




// MongoDb password Dwacjnl0YZfZSZxB