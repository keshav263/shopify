require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const chalk = require("chalk");
const app = express();
const http = require("http").Server(app);
const db = require("./config/db");
const Auth = require("./routes/Auth");
db();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ extended: false, limit: "10mb" }));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/auth", Auth);

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
	res.json({ Msg: "Hello there! Welcome to Shopify" });
});

http.listen(PORT, () => {
	console.log(chalk.blueBright(`Listening on port ${PORT}`));
});
