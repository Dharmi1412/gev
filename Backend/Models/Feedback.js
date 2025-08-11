// models/Feedback.js

import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  subject: String,
  description: String,
});

const FeedBackModel =
  mongoose.models.FeedBack || mongoose.model("FeedBack", FeedbackSchema);

export default FeedBackModel;
