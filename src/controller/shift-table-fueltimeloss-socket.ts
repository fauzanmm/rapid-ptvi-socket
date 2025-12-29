import { Server, Socket } from "socket.io";
import shiftTableFuelTimeLoss from "../service/shift-table-fueltimeloss-service.ts";

export class ShiftTableFuelTimeLossSocket {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  public registerSocket(socket: Socket) {
    socket.on("shiftTableFuelTimeLossParams", async ({ skip, page, limit }) => {
      const data = await shiftTableFuelTimeLoss.get(skip, limit, page);

      socket.emit("shiftTableFuelTimeLoss:update", data);
    });
  }
}
