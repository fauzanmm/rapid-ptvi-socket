import "dotenv/config";
import { logger } from "./application/logging.js";
import { httpServer } from "./application/socket.js";

const port = process.env.PORT || 3002;
const serverHost = process.env.HOST_SERVER || "localhost";

// socketPolling(io);

// web.listen(port, () => {
//   logger.info(`App start on http://${serverHost}:${port}/api-docs`);
// });
console.log("it started..");

httpServer.on("error", (err) => {
  console.error("SERVER ERROR:", err);
});

httpServer.listen(port, async () => {
  logger.info(`✅ App start on http://${serverHost}:${port}/api-docs`);
  logger.info(`🌐 Socket.IO Server is active.`);
});
