const success = (req, res, message, status, details) => {
	if (details) {
		console.log(details);
	}
	let statusCode = status || 200;
	res.status(statusCode).send({
		error: false,
		status: statusCode,
		body: message,
	});
};

const error = (req, res, message, status, console) => {
	console.error(new Error(console));
	let statusCode = status || 500;
	res.status(statusCode).send({
		error: true,
		status: statusCode,
		body: message,
	});
};

export default {
	success,
	error,
};
