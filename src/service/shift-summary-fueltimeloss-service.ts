import "dotenv/config";
import axios from "axios";
import { ResponseError } from "../error/error-response.ts";
import { logger } from "../application/logging.ts";

const get = async () => {
  try {
    const result = await axios.get(
      `${process.env.API_ENDPOINT}/fuelTimeLoss/shift/summary`
    );

    const data = result.data;
    return data;
    // console.log(data);
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
