import { NextFunction, Request, Response } from "express";
import productsServices from "../services/products-services";

async function getAll (req: Request, res: Response, next: NextFunction) {
    try {
        const products = await productsServices.getAll();
        res.send(products);
    } catch (error) {
        next(error);
        res.sendStatus(500);
    }
}

async function insertNew (req: Request, res: Response, next: NextFunction) {
    try {
        const product = await productsServices.insertNew(req.body);
        res.status(201).send(product);
    } catch (error) {
        next(error);
        res.sendStatus(500);
    }
}

async function deleteProduct (req: Request, res: Response, next: NextFunction) {
    try {
        await productsServices.deleteById(req.body.id);
        res.sendStatus(202);
    } catch (error) {
        next(error);
        res.sendStatus(500);
    }
}

export default {
    getAll,
    insertNew,
    deleteProduct
}