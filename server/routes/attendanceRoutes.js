import { Router } from "express";
import { protect } from "../middlware/auth.js";
import { clokInOut, getAttendance } from "../controllers/attendnceControllers.js";

const attendanceRouter = Router();

attendanceRouter.post('/', protect, clokInOut)
attendanceRouter.get('/', protect, getAttendance)

export default attendanceRouter;
