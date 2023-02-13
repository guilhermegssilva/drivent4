import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getBookingRoom, listBooking, changeBooking } from "@/controllers";

const bookingRouter = Router();

bookingRouter
  .all("/*", authenticateToken)
  .get("", listBooking)
  .post("", getBookingRoom)
  .put("/:bookingId", changeBooking);

export { bookingRouter };
