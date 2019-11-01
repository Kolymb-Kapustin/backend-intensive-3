// Core
import express from 'express';
import bodyParser from 'body-parser';
import { getPassword, NotFoundError } from './utils';

//Routers
import * as routers from './routers';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

// Check password
app.use(getPassword);

// Check 404

// Routers
app.use('/auth', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

app.use('*', (req, res, next) => {
    next(new NotFoundError(`Cant find method: ${req.method} and path: ${req.originalUrl}`));
});

export { app };
