import { Server } from "socket.io";
import currentFuelTimeLoss from "../service/current-fueltimeloss-service.js";

const POLLING_INTERVAL = 5000;

export class currentFuelTimeLossSocket {
  private io: Server;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(io: Server) {
    this.io = io;
  }

  // Polling global → emit ke semua socket
  public start() {
    if (this.intervalId) return;

    this.intervalId = setInterval(async () => {
      const data = await currentFuelTimeLoss.get();
      this.io.emit("currentFuelTimeLoss:update", data);
    }, POLLING_INTERVAL);
  }
}
