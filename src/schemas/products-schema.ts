import Joi from "joi";

export const productsSchema = Joi.object({
    name: Joi.string().max(50).required(),
    price: Joi.number().positive().integer().required(),
    stock: Joi.number().positive().integer().required()
});

export const deleteProductSchema = Joi.object({
    id: Joi.number().integer().positive().required()
});