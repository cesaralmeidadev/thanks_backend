import addPost from "./store.js";
import response from "../../network/response.js";

const createPost = (title, text, username, tags) => {
	return new Promise((resolve, reject) => {
		const fullPost = {
			title,
			text,
			username,
			tags,
		};
		resolve(addPost(fullPost));
		reject(err => response.error(req, res, "Internal Error", 500, err));
	});
};

export default createPost;
