import mongoose from "mongoose";

const connect = uri => {
	mongoose
		.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("[db]: connection stablished successfully"))
		.catch(err => console.error(new Error("[db]: " + err)));
};

export default connect;
