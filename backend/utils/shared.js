require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const validateToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({
      message: "Please provide a Token",
    });
  } else if (token.split(" ").length > 1) {
    token = token.split(" ")[1];
    try {
      const isTokenValid = jwt.verify(token, JWT_PRIVATE_KEY);
      if (isTokenValid) {
        res.locals.verifiedToken = isTokenValid;
        next();
      }
    } catch (err) {
      return res.status(400).json({
        message: "Invalid Token. Try again",
      });
    }
  } else {
    return res.status(400).json({
      message:
        'Please provide a token in the header in the given format "Bearer xxxxxxxxxxxxxxxxx" etc.',
    });
  }
};

module.exports = {
  validateToken,
};
