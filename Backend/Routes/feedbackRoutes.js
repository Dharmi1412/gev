// routes/feedbackRoutes.js

import express from "express";
import Feedback from "../Models/Feedback.js";

const FeedBackRouter = express.Router();

FeedBackRouter.post("/submit", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

export default FeedBackRouter;
