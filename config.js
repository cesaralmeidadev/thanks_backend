import dotenv from "dotenv";

dotenv.config();

export default {
	port: process.env.PORT || 3000,
	db: {
		postDB: process.env.POSTDB_URI,
	},
};
