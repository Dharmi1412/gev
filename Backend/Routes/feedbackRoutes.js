// routes/feedbackRoutes.js

import express from "express";
import { addFeedback } from "../Controllers/FeedBackController.js";

const FeedBackRouter = express.Router();

FeedBackRouter.post("/submit", addFeedback);

export default FeedBackRouter;
