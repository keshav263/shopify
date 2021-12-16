const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const chalk = require("chalk");
const User = require("../models/User");

exports.getAllItems = async (req, res) => {
	try {
		const item = await Item.find({ sold: false });
		return res
			.status(200)
			.send({ success: true, message: "Items fetched successfully", item });
	} catch (error) {
		return res
			.status(500)
			.send({ success: false, message: "Something went wrong" });
	}
};

exports.addItem = async (req, res) => {
	const { _id } = req.user._id;
	const { name, price, category, picture } = req.body;
	try {
		if (!name || !price || !category || !picture) {
			return res
				.status(200)
				.send({ success: false, message: "Please enter all the fields" });
		}
		const item = new Item({ name, price, category, picture });
		item.seller = _id;
		await item.save();
		return res
			.status(200)
			.send({ success: true, message: "Item added successfully" });
	} catch (error) {
		return res
			.status(500)
			.send({ success: false, message: "Something went wrong" });
	}
};

exports.sellItem = async (req, res) => {
	const { _id } = req.user._id;
	const { itemId } = req.body;
	try {
		if (!itemId)
			return res
				.status(200)
				.send({ success: false, message: "Please enter all the fields" });
		const item = await Item.findById(itemId);
		if (!item) {
			return res
				.status(200)
				.send({ success: false, message: "Item does not exist" });
		}
		item.buyer = _id;
		item.sold = true;
		await item.save();
	} catch (error) {
		return res
			.status(500)
			.send({ success: false, message: "Something went wrong" });
	}
};
