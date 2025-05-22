const router1 = express.Router();
const router2 = express.Router();
 
router1.get(
	"/users/:id",
	(req, res, next) => {
		console.log("middleware1");
		if (req.params.id === "0") {
			return next("route"); 
			// If route then it will skip all middleware in same router
			// If router then it will skip all routes in same router and will go to other router
			// If we pass Error object then it will go to first error handler middleware
		}
		next();
	},
	(req, res, next) => {
		console.log("middleware2");
		next();
	},
	(req, res) => {
		res.send("Main route in router 1");
	}
);
// router1.get("/users/:id", (req, res) => {
// 	res.send("Other route in router1");
// });
 
router2.get("/users/:id", (req, res) => {
	res.send("Main route in router2");
});
 
app.use(router1);
app.use(router2);
 