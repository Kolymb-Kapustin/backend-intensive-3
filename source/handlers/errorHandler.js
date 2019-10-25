import winston from 'winston';
import { logger } from '../utils/';

export const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (process.env.NODE_ENV !== 'test') {
        logger.error({message: err.message});
    }

    next();
}
