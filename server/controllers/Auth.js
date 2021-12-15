const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const chalk = require("chalk");
const User = require("../models/User");

exports.emailSignIn = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res
				.status(200)
				.json({ success: false, message: "Please enter all the fields" });
		}
		const user = await User.findOne({ email: email });
		if (!user) {
			return res
				.status(200)
				.send({ success: false, message: "User does not exist" });
		}
		if (await bcrypt.compare(password, user.password)) {
			const token = user.generateAuthToken();
			return res
				.status(200)
				.send({
					success: true,
					message: "User logged in successfully",
					token,
					name: user.name,
					email: user.email,
				});
		}
		return res
			.status(200)
			.send({ success: false, message: "Incorrect password" });
	} catch (err) {
		return res
			.status(500)
			.json({ success: false, message: "Server error", err });
	}
};

exports.emailSignUp = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res
				.status(200)
				.json({ success: false, message: "Please enter all the fields" });
		}
		const saltPassword = await bcrypt.genSalt(10);
		const securePassword = await bcrypt.hash(password, saltPassword);

		let user = await User.findOne({ email: email });
		if (user) {
			return res
				.status(200)
				.json({ success: false, message: "User already exists" });
		}

		user = new User({ name, email, password: securePassword });
		await user.save();
		const token = user.generateAuthToken();
		return res.status(200).send({
			success: false,
			message: "User created successfully",
			token,
			name,
			email,
		});
	} catch (err) {
		return res
			.status(500)
			.json({ success: false, message: "Server error", err });
	}
};
