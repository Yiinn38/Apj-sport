const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/apj');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    urlImg: String
});

const Product = mongoose.model('productos', ProductSchema);

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ mensaje: 'Products not found error' });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el producto', error });
    }
});

const ProductHomeSchema = new mongoose.Schema({
    name: String,
    price: Number,
    urlImg: String
});

const ProductHome = mongoose.model('bestsellers', ProductHomeSchema);

app.get('/api/bestsellers', async (req, res) => {
    try {
        const productsHome = await ProductHome.find({});
        res.json(productsHome);
    } catch (error) {
        res.status(500).json({ mensaje: "Best Sellers not found error " })
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server ready on port ${port}`);
});
