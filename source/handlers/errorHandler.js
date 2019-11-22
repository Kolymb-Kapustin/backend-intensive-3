import { defaultLogger, validationLogger, notFoundLogger } from '../utils/';

export const errorHandler = (error, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') {
        switch (error.type) {
            case 'ValidationError':
                validationLogger.error({
                    message: {
                        name: error.name,
                        text: error.message,
                    },
                });
                break;
            case 'NotFoundError':
                notFoundLogger.error({
                    message: {
                        name: error.name,
                        text: error.message,
                    },
                });
                break;
            default:
                defaultLogger.error({
                    message: {
                        name: error.name,
                        text: error.message,
                    },
                });
                break;
        }
    }

    next();
};
