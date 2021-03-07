import express from "express";
import config from "./config.js";
import postDB from "./store/db.js";
import routes from "./network/routes.js";

const app = express();

const port = config.port;
const uri = config.db.postDB;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	postDB(uri);
});
