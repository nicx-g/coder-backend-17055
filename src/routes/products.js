"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var class_1 = __importDefault(require("../class"));
var products = new class_1.default();
router.get('/productos/listar', function (req, res) {
    // if(arrayOfProducts.error) res.status(404).json({error: arrayOfProducts.error})
    // else res.json(arrayOfProducts)
    var arrayOfProducts = products.getProducts();
    var data = {
        arrayOfProducts: arrayOfProducts,
        showProducts: !arrayOfProducts.error ? true : false
    };
    res.render('index', data);
});
router.get('/productos/listar/:id', function (req, res) {
    var product = products.getProducts(parseInt(req.params.id));
    if (product.error)
        res.status(404).json({ error: product.error });
    else
        res.json(product);
});
router.post('/productos/guardar', function (req, res) {
    var newProduct = products.writeAProduct(req.body);
    res.json(newProduct);
});
router.put('/productos/actualizar/:id', function (req, res) {
    var updatedProduct = products.updateAProduct(parseInt(req.params.id), req.body);
    if (updatedProduct.error)
        res.status(404).json({ error: updatedProduct.error });
    else
        res.json(updatedProduct);
});
router.delete('/productos/borrar/:id', function (req, res) {
    var removedProduct = products.removeAProduct(parseInt(req.params.id));
    if (removedProduct.error)
        res.status(404).json({ error: removedProduct.error });
    else
        res.json(removedProduct);
});
exports.default = router;
