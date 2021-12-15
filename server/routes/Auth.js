const { Router } = require("express");
const { emailSignUp, emailSignIn } = require("../controllers/Auth");
const router = Router();

router.post("/sign-up", emailSignUp);
router.post("/sign-in", emailSignIn);
module.exports = router;
