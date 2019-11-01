import { ValidationError } from '../';

export const getPassword = (res, req, next) => {
    const { PASSWORD } = process.env;

    if (PASSWORD !== 'password123') {
        throw new ValidationError('Auth fail', 404);
    }

    return next();
};
