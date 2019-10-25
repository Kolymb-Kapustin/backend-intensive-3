// Core
import express from 'express';
import bodyParser from 'body-parser';

//Routers
import * as routers from './routers';

//Handlers
import * as handlers from './handlers';

const app = express();

app.use(bodyParser.json({ limit: '10kb' }));

// Routers
app.use('/auth', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

// Error hanler
app.use(handlers.errorHandler);

export { app };
