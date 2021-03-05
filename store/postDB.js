import mongoose from "mongoose";

const connect = URI => {
	mongoose
		.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			console.log("[postDB]: connection established successfully");
		})
		.catch(error => console.log(new Error(`[postDB] ${error}`)));
};

export default connect