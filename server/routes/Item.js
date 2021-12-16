const { Router } = require("express");
const { addItem } = require("../controllers/Item");
const auth = require("../middlewares/Auth");
const router = Router();

router.post("/add-item", auth, addItem);

module.exports = router;
