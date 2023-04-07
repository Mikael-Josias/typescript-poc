import { ProductsEntity } from "../protocols/products";
import productsRepository from "../repositories/products-repository";

async function getAll (): Promise<ProductsEntity[]> {
    const {rows: products} = await productsRepository.getAll();
    return products;
}

export default {
    getAll
}