const User = require("../models/Restaurent");

exports.getHotels = (req, res, next) => {
  //   const options = {
  //     location: {
  //       $geoWithin: { $centerSphere: [[83.5816047, 25.6831213], 1000] },
  //     },
  //   };
  User.find()
    .populate("dishes")
    .then((user) => {
      res
        .status(200)
        .json({ message: "Fetched Hotels successfully.", hotels: user });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
