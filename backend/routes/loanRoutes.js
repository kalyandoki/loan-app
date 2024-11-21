import express from "express";
import {
  createLoan,
  approveLoan,
  addRepayment,
  getLoans,
  getAllLoans,
} from "../controllers/loanController.js";
import { checkAdmin, authenticate } from "../middlewares/auth.js";

const router = express.Router();

// User routes
router.post("/add", authenticate, createLoan);
router.get("/get", authenticate, getLoans);
// Admin routes
router.get("/all", checkAdmin, getAllLoans);
router.patch("/:id/approve", checkAdmin, approveLoan);
// Repayment routes
router.post("/:id/repay", authenticate, addRepayment);
export default router;
