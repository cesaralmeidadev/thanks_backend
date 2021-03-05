import express from "express";

const router = express.Router();

router.get("/", getThCard);

export default router;
