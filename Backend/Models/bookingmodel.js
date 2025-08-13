import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  modelColour: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BookingModel = mongoose.model("Booking", BookingSchema);

export default BookingModel;
