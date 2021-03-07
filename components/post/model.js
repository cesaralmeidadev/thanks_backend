import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: String,
	text: String,
	username: String,
	tags: [String],
	selectedFile: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Post = mongoose.model("Post", postSchema);

export default Post;
