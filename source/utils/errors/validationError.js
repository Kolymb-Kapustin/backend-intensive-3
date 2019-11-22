// import { validationLogger } from '../../utils/';

export class ValidationError extends Error {
    constructor(...args) {
        super(...args);
        this.type = 'ValidationError';
    }
}
