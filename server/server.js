import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

import connectDb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import leaveRouter from "./routes/leaveRoutes.js";
import payslipRouter from "./routes/payslipsRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";

import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(multer().none());

// Route
app.get("/", (req, res) => {
  res.send("Server is running on PORT: " + PORT);
});

app.use("/api/auth", authRouter)
app.use("/api/employess", employeeRoutes)
app.use("/api/profile", profileRouter)
app.use("/api/attendance", attendanceRouter)
app.use("/api/leave", leaveRouter)
app.use("/api/payslips", payslipRouter)
app.use("/api/payslips", payslipRouter)
app.use("/api/dashboard", dashboardRouter)



// Start Server
const startServer = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();