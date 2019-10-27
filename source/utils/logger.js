import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `Time: ${timestamp}; ${message.name}: ${message.text}.`;
});

export const logger = createLogger({
    format: combine(
      timestamp(),
      myFormat
    ),
    transports: [new transports.File({ filename: 'source/logs/error.log', level: 'error' })]
})
