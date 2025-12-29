import { Server } from "socket.io";
import shiftSummaryFuelTimeLoss from "../service/shift-summary-fueltimeloss-service.ts";
// import { logger } from "../application/logging.js";

const POLLING_INTERVAL = 5000;

export class shiftSummaryFuelTimeLossSocket {
  private io: Server;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(io: Server) {
    this.io = io;
  }

  start() {
    if (this.intervalId) return;

    this.intervalId = setInterval(async () => {
      const data = await shiftSummaryFuelTimeLoss.get();
      this.io.emit("shiftSummaryFuelTimeLoss:update", data);
    }, POLLING_INTERVAL);
  }
}
