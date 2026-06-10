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
import { inngest, functions } from "./inngest/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(multer().none());

app.get("/", (req, res) => {
  res.send("EMS API Running");
});

app.use("/api/auth", authRouter);
app.use("/api/employess", employeeRoutes);
app.use("/api/profile", profileRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/payslips", payslipRouter);
app.use("/api/dashboard", dashboardRouter);

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  })
);

await connectDb();

export default app;