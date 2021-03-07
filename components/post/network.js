import express from "express";

import controller from "./controller.js";
import response from "../../network/response.js";

const router = express.Router();

router.get("/", (req, res) => {});
router.post("/", (req, res) => {
	const { title, text, username, tags } = req.body;
	controller(title, text, username, tags)
		.then(post => response.success(req, res, post, 201, "[controller]: post created"))
		.catch(err => response.error(req, res, "Internal Error", 500, err));
});
export default router;
