import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validate(schema, 'body');
}

function validate(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], { abortEarly: false });
        
        if (error) {
            return res.status(httpStatus.BAD_REQUEST).send("Body inválido");
        }

        next();
    };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;