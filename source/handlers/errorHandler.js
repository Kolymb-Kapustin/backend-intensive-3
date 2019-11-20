import { logger } from '../utils/';

export const errorHandler = (error, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') {
        logger.error({
            message: {
                name: error.name,
                text: error.message,
            },
        });
    }

    next();
};
