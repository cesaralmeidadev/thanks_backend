import Post from "./model.js";
import response from "../../network/response.js";

const addPost = async post => {
	const newPost = new Post(post);
	try {
		await newPost.save();
	} catch (err) {
		response.error(req, res, "Internal Error", 500, err);
	}
	return newPost;
};

export default addPost;
