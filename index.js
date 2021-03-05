import express from "express";
import config from "./config.js";
import postDB from "./store/postDB.js";

const app = express();

const port = config.port;
const uri = config.db.postDB;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
	postDB(uri);
});
