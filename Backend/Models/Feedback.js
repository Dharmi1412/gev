// models/Feedback.js

import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  subject: String,
  description: String,
});

export default mongoose.model("Feedback", FeedbackSchema);
