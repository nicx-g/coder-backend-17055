export default class Products {
    products: Array<Object>;
    constructor(){
        this.products = []
    }
    getProducts (id?: number) {
        if(id){
            if(this.products.length === 0) return {error: "producto no encontrado"}
            return this.products[id - 1]
        } else {
            if(this.products.length === 0) return {error: 'no hay productos cargados'}
            return this.products
        }
    }
    writeAProduct (object:Record<string, string>){
        const newProduct = {
            id: this.products.length + 1,
            title: object?.title,
            price: object?.price,
            thumbnail: object?.thumbnail
        }
        this.products.push(newProduct);
        return {newProduct}
    }
    updateAProduct (id: number, object:Record<string, string>) {
        const indexProduct = this.products.findIndex((item:any) => item.id === id)
        if(indexProduct === -1) return {error: "Producto no encontrado"}

        const updatedProduct = {
            id: id,
            title: object?.title,
            price: object?.price,
            thumbnail: object?.thumbnail
        }
        this.products[indexProduct - 1] = updatedProduct
        return this.products[indexProduct - 1]
    }
    removeAProduct (id: number){
        const indexProduct = this.products.findIndex((item:any) => item.id === id)
        if(indexProduct === -1) return {error: "Producto no encontrado"}

        this.products.splice(indexProduct - 1, 1)
        return this.products
    }
}