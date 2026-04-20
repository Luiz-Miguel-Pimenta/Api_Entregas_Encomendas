import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionsRouter } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";
import { deliveriesLogsRoutes } from "./deliveries-logs-routes";

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRouter);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveriesLogsRoutes)

export { routes };