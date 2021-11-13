const User = require("../models/Restaurent");

exports.getHotels = (req, res, next) => {
  User.find().populate("dishes")
    .then((user) => {
      res
        .status(200)
        .json({ message: "Fetched Hotels successfully.", hotels: user});
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};