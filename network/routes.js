import post from '../components/post/network.js'
const routes = app => {
	app.use("/post", post);
	app.use('/message', (req, res) => {
		res.send('/message')
		console.log('[routes]: app.use/message')
	})
};

export default routes;
