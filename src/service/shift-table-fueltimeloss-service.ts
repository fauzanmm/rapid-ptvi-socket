import "dotenv/config";
import axios from "axios";
import { ResponseError } from "../error/error-response.ts";
import { logger } from "../application/logging.ts";

const get = async (skip: number, limit: number, page: number) => {
  try {
    const result = await axios.get(
      `${process.env.API_ENDPOINT}/fuelTimeLoss/shift/table`,
      {
        params: {
          skip: skip,
          limit: limit,
          page: page,
        },
      }
    );

    const data = result.data;
    return data;
  } catch (error: any) {
    logger.error("Database or Unhandled Error in Service:", error);

    throw new ResponseError(
      500,
      `Database connection failed : ${error.message}`
    );
  }
};

export default {
  get,
};
