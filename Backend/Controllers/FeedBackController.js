import FeedBackModel from "../Models/Feedback.js";

const addFeedback = async (req, res) => {
  try {
    const feedback = new FeedBackModel(req.body);
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
};

export { addFeedback };
