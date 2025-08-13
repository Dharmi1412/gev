import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./Routes/UserRoutes.js";
import FeedbackRoutes from "./Routes/feedbackRoutes.js";
import ProductRouter from "./Routes/ProductRoute.js";
import connectToDB from "./Config/DB.js";
import cloudinary from "./Config/cloudinaryConfig.js";
import bookingRoutes from "./Routes/bookingroutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
connectToDB();
cloudinary;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// app.use(cors());
// app.use(
//   cors({
//     origin: [
//       "https://evera-beta.vercel.app",
//       "http://localhost:5174",
//       "http://localhost:5173",
//     ],
//     methods: ["GET", "POST", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
const allowedOrigins = [
  "https://evera-beta.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/feedback", FeedbackRoutes);
app.use("/api/product", ProductRouter);
app.use("/api/booking", bookingRoutes);

app.get("/", (req, res) => {
  res.send("API WORKING!");
});

app.listen(PORT, () => {
  console.log(`app listening on port no. ${PORT}  `);
});
