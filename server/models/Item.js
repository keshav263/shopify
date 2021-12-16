const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	seller: {
		required: true,
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	buyer: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	sold: {
		default: false,
	},
	category: {
		enum: ["Men", "Women", "Kids"],
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

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
