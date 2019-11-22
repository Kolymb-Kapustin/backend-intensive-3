import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const myFormat = printf(({message, timestamp }) => {
    return `Time: ${timestamp}; ${message.name}: ${message.text}.`;
});

export const defaultLogger = createLogger({
    format: combine(
        timestamp(),
        myFormat,
    ),
    transports: [ new transports.File({ filename: 'source/logs/error.log', level: 'error' }) ],
});
