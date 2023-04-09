import { Product, ProductsEntity } from "../protocols/products";
import db from "../config/database-connection";
import { QueryResult } from "pg";

function insertNew (product: Product) : Promise<QueryResult<{id: number}>> {
    return db.query(
        `INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING id;`,
        [product.name, product.price, product.stock]);
}

function getAll () : Promise<QueryResult<ProductsEntity>> {
    return db.query(`SELECT * FROM products;`);
}

function getByName (name: string) {
    return db.query(
        `SELECT * FROM products WHERE name LIKE '%' || $1 || '%'`,
        [name]);
}

export default {
    getAll,
    getByName,
    insertNew
}