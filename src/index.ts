const app = express();
import express from 'express';
const port = 8080;
import Products from './class';
const products = new Products();

const server = app.listen(port, () => console.log(`Server running in port:  ${port}`));
server.on('error', (err) => console.error(`There was an error: ${err}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/productos/listar', (req, res) => {
    const arrayOfProducts: any = products.getProducts();
    if(arrayOfProducts.error) res.status(404).json({error: arrayOfProducts.error})
    else res.json(arrayOfProducts)
});
app.get('/api/productos/listar/:id', (req, res) => {
	const product: any = products.getProducts(parseInt(req.params.id));
    if(product.error) res.status(404).json({error: product.error})
    else res.json(product)
});
app.post('/api/productos/guardar', (req, res) => {
    const newProduct = products.writeAProduct(req.body)
    res.json(newProduct)
});
