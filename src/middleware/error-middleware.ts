import type { ErrorRequestHandler } from "express";
import { ResponseError } from "../error/error-response.js";
import { logger } from "../application/logging.js";

const errorMiddleware: ErrorRequestHandler = async (error, req, res, next) => {
  if (!error) {
    return next();
  }

  // Cek apakah error adalah Custom Error (yang mencakup 400, 404, 401, dll.)
  if (error instanceof ResponseError) {
    res
      .status(error.status)
      .json({
        status: error.status,
        message: error.name,
        errors: error.message,
        timestamp: new Date().toISOString(),
      })
      .end();
  }
  // Jika error BUKAN ResponseError (yaitu error sistem, database, dll.)
  else {
    logger.error("Unhandled Error:", error);

    res
      .status(500)
      .json({
        status: 500,
        message: "Internal Server Error",
        errors: "Terjadi kesalahan yang tidak terduga pada server.",
        timestamp: new Date().toISOString(),
      })
      .end();
  }
};

export { errorMiddleware };
