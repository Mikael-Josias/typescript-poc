import { Product, ProductsEntity } from "../protocols/products";
import productsRepository from "../repositories/products-repository";

async function insertNew (product: Product) : Promise<{id: number}> {
    const {rowCount: productExists} = await productsRepository.getByName(product.name);
    if (productExists !== 0) throw new Error("Product already exists!");

    const {rows: [newProduct]} = await productsRepository.insertNew(product);
    return newProduct;
}

async function getAll (): Promise<ProductsEntity[]> {
    const {rows: products} = await productsRepository.getAll();
    return products;
}

export default {
    getAll,
    insertNew
}