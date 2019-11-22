import { ValidationError } from '../';

export const getPassword = (res, req, next) => {
    const { PASSWORD } = process.env;

    if (PASSWORD !== 'password123') {
        throw new ValidationError('Auth fail', 401);
    }

    return next();
};
