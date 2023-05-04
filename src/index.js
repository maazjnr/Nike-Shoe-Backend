const express = require('express');
const app = express();
const productRoutes = require('./router/productRoutes.js')
const orderRoutes = require('./router/orderRoutes.js');
const bodyParser = require('body-parser')
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.get('/', (req, res) => {
    res.send("Home page is available")
})

app.listen(PORT, (req, res) => {
   console.log(`Api listening at ${PORT}`)
})




// MongoDb password Dwacjnl0YZfZSZxB