import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const appConfig = {
  filename: "logs/app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "50m",
  maxFiles: "14d",
};

const errorConfig = {
  filename: "logs/error-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "50m",
  maxFiles: "14d",
};

const exceptionConfig = {
  filename: "logs/exception-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "100m",
  maxFiles: "14d",
};

const rejectionConfig = {
  filename: "logs/rejection-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "100m",
  maxFiles: "14d",
};

export const logger = winston.createLogger({
  level: "info", // log level info ke atas
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.json()
  ),
  transports: [
    // Console logs
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    // App info logs
    new DailyRotateFile({
      ...appConfig,
      level: "info",
    }),
    // App error logs
    new DailyRotateFile({
      ...errorConfig,
      level: "error",
    }),
    // App exeption logs
    new DailyRotateFile({
      ...exceptionConfig,
      handleExceptions: true,
      level: "error",
    }),
    // App rejection logs
    new DailyRotateFile({
      ...rejectionConfig,
      handleRejections: true,
      level: "error",
    }),
  ],
});
