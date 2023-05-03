const express = require('express');
const app = express();
const productRoutes = require('./router/productRoutes.js')
const PORT = 3000;

app.use('/products', productRoutes)

app.get('/', (req, res) => {
    res.send("Home page is available")
})

app.listen(PORT, (req, res) => {
   console.log(`Api listening at ${PORT}`)
})




// MongoDb password Dwacjnl0YZfZSZxB