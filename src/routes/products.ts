import express from 'express'
const router = express.Router();
import Products from '../class';
const products = new Products();

router.get('/productos/listar', (req, res) => {
    const arrayOfProducts: any = products.getProducts();
    let data = {
        arrayOfProducts,
        showProducts: !arrayOfProducts.error ? true : false
    }
    res.render('index', data)
});
router.get('/productos/listar/:id', (req, res) => {
	const product: any = products.getProducts(parseInt(req.params.id));
    if(product.error) res.status(404).json({error: product.error})
    else res.json(product)
});
router.post('/productos/guardar', (req, res) => {
    const newProduct = products.writeAProduct(req.body)
    res.json(newProduct)
});
router.put('/productos/actualizar/:id', (req, res) => {
    const updatedProduct: any = products.updateAProduct(parseInt(req.params.id), req.body)
    if(updatedProduct.error) res.status(404).json({error: updatedProduct.error})
    else res.json(updatedProduct)
})
router.delete('/productos/borrar/:id', (req, res) => {
    const removedProduct: any = products.removeAProduct(parseInt(req.params.id))
    if(removedProduct.error) res.status(404).json({error: removedProduct.error})
    else res.json(removedProduct)
})

export default router;