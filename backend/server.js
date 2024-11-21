import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Import the CORS package
import "dotenv/config";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";
import { authenticate } from "./middlewares/auth.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect to DB
connectDB();

app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/loans", authenticate, loanRoutes);

// Error handling middleware
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Sever started on PORT : " + port));
