import "dotenv/config";
import axios from "axios";
import { ResponseError } from "../error/error-response.js";
import { logger } from "../application/logging.js";

const get = async () => {
  try {
    const result = await axios.get(
      `${process.env.API_ENDPOINT}/fuelTimeLoss/shift`
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
