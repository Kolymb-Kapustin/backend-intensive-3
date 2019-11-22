import { defaultLogger } from '../../utils/';

export class ValidationError extends Error {
    constructor(...args) {
        // eslint-disable-next-line
        console.log(defaultLogger);
        super(...args);
    }
}
