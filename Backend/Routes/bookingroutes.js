import express from "express";
import { addBooking, getBookings } from "../Controllers/bookingcontroller.js";
const router = express.Router();

router.post("/add", addBooking);
router.get("/list", getBookings);

// ...add more routes as needed...

export default router;
