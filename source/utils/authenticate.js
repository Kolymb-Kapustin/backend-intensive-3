export const authenticate = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).json({
            message: 'You need to login',
        });
    }

    const { email } = req.session.user;

    if (email) {
        next();
    } else {
        res.status(401).json({
            message: 'authentication fail',
        });
    }
};
