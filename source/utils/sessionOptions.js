export const sessionOptions = {
    key:               'user',
    secret:            'password123',
    resave:            false,
    rolling:           true,
    saveUninitialized: false,
    cookie:            {
        httpOnly: true,
        maxAge:   600000,
    },
};
