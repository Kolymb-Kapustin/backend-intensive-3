export class NotFoundError extends Error {
    constructor(...args) {
        super(...args);
        this.type = 'NotFoundError';
    }
}
