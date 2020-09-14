import * as winston from 'winston';

const myformat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

export const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      maxsize: 500,
    }),
    new winston.transports.File({ filename: 'combined.log', maxsize: 500 }),
    new winston.transports.Console({
      format: myformat,
    }),
  ],
});
