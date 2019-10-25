import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    console.log(message);
    return `Time: ${timestamp}; Method: ${message.method}; Payload: ${JSON.stringify(message.payload)}.`;
});

export const logger = createLogger({
    format: combine(
      timestamp(),
      myFormat
    ),
    transports: [new transports.File({ filename: 'source/logs/error.log', level: 'error' })]
})
