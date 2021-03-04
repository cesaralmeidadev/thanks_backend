import express from "express";
import config from "./config.js";

const app = express();
const port = config.port;

app.use("/", (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
