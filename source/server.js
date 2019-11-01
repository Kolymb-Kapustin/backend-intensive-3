// Core
import express from 'express';
import bodyParser from 'body-parser';
import { getPassword, NotFoundError } from './utils';

//Routers
import * as routers from './routers';

//Handlers
import * as handlers from './handlers';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

// Check password
app.use(getPassword);

// Routers
app.use('/auth', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

// Check 404
app.use('*', (req, res, next) => {
    next(new NotFoundError(`Cant find method: ${req.method} and path: ${req.originalUrl}`));
});

// Error hanler
app.use(handlers.errorHandler);

export { app };
