const express = require("express");
const authController = require("../controllers/CustomerAuth");
const RestaurentController = require("../controllers/Restaurent");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/", isAuth, RestaurentController.getHotels);
router.put("/addtocart", isAuth, RestaurentController.postCart);
router.get("/fetchcart", isAuth, RestaurentController.getCart);

module.exports = router;
