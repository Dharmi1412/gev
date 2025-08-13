// import FeedBackModel from "../Models/Feedback.js";
import BookingModel from "../Models/bookingmodel.js";

const addFeedback = async (req, res) => {
  try {
    const feedback = new FeedBackModel(req.body);
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
};

const addBooking = async (req, res) => {
  try {
    console.log("Booking request body:", req.body); // Debug log
    const { name, mobileNumber, modelName, modelColour } = req.body;
    if (!name || !mobileNumber || !modelName || !modelColour) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const booking = new BookingModel({
      name,
      mobileNumber,
      modelName,
      modelColour,
    });
    await booking.save();
    res.status(201).json({ message: "Booking submitted successfully" });
  } catch (err) {
    console.error("Booking error:", err); // Debug log
    res.status(500).json({ error: "Failed to submit booking" });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

export { addFeedback, addBooking, getBookings };
