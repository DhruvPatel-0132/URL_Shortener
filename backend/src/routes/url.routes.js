import express from "express";
import { createShortUrl, getHistory } from "../controllers/url.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/shorten", auth, createShortUrl);
router.get("/history", auth, getHistory);

export default router;
w