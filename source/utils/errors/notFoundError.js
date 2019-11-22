import { logger } from '../../utils/';

export class NotFoundError extends Error {
    constructor(...args) {
        console.log(logger);

        // logger.error({
        //     message: {
        //         name: error.name,
        //         text: error.message,
        //     },
        // });
        super(...args);
    }
}
