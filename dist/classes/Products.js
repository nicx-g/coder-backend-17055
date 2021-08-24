"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Products = function () {
  function Products() {
    this.products = [];
  }

  Products.prototype.getProducts = function (id) {
    if (id) {
      if (this.products.length === 0) return {
        error: "producto no encontrado"
      };
      return this.products[id - 1];
    } else {
      if (this.products.length === 0) return {
        error: "no hay productos cargados"
      };
      return this.products;
    }
  };

  Products.prototype.writeAProduct = function (object) {
    var newProduct = {
      id: this.products.length + 1,
      title: object === null || object === void 0 ? void 0 : object.title,
      price: object === null || object === void 0 ? void 0 : object.price,
      thumbnail: object === null || object === void 0 ? void 0 : object.thumbnail
    };
    this.products.push(newProduct);
    return newProduct;
  };

  Products.prototype.updateAProduct = function (id, object) {
    var indexProduct = this.products.findIndex(function (item) {
      return item.id === id;
    });
    if (indexProduct === -1) return {
      error: "Producto no encontrado"
    };
    var updatedProduct = {
      id: id,
      title: object === null || object === void 0 ? void 0 : object.title,
      price: object === null || object === void 0 ? void 0 : object.price,
      thumbnail: object === null || object === void 0 ? void 0 : object.thumbnail
    };
    this.products[indexProduct - 1] = updatedProduct;
    return this.products[indexProduct - 1];
  };

  Products.prototype.removeAProduct = function (id) {
    var indexProduct = this.products.findIndex(function (item) {
      return item.id === id;
    });
    if (indexProduct === -1) return {
      error: "Producto no encontrado"
    };
    this.products.splice(indexProduct, 1);
    return this.products;
  };

  return Products;
}();

exports["default"] = Products;