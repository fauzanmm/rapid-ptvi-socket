// socket.ts
import "dotenv/config";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { web } from "./web.ts";
import { dataPolling } from "./polling.js";
import { ShiftTableFuelTimeLossSocket } from "../controller/shift-table-fueltimeloss-socket.ts";
import { logger } from "./logging.js";

export const httpServer = createServer(web);

const io = new SocketIOServer(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] },
});

// Global Polling : without paramater from client
dataPolling(io);

// Private Polling : using parameter from client
const ShiftTableFuelTimeLossPoller = new ShiftTableFuelTimeLossSocket(io);

io.on("connection", (socket) => {
  logger.info(`🔌 User connected: ${socket.id}`);

  ShiftTableFuelTimeLossPoller.registerSocket(socket);

  socket.on("disconnect", () => {
    logger.info(`❌ User disconnected: ${socket.id}`);
  });
});
