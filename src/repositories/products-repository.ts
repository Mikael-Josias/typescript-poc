import { ProductsEntity } from "../protocols/products";
import db from "../config/database-connection";
import { QueryResult } from "pg";

function getAll () : Promise<QueryResult<ProductsEntity>> {
    return db.query(`SELECT * FROM products;`);
}

export default {
    getAll
}