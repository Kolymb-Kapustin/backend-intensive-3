import winston from 'winston';
import { logger } from '../utils/';

export const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') {
        logger.error({
            message: {
               name: err.name,
               text: err.message
            }
        });
    }

    next();
}
