const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		enum: [],
	},
	price: {
		type: Number,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
});

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	itemsOnSale: [itemSchema],
	itemsPurchased: [itemSchema],
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.jwtKey);
	return token;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
