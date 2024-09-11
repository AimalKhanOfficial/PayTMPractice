const express = require("express");
const router = express.Router();

require("dotenv").config();
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const { signUp, signIn } = require("../dbHandler");
const jwt = require("jsonwebtoken");
const { signInSchema, signUpSchema } = require("../utils/zodSchemas");
const { validateToken } = require("../utils/shared");

router.post("/sign-in", async (req, res) => {
  try {
    const parsedSchema = signInSchema.safeParse(req.body);
    if (!parsedSchema.success) {
      return res.status(400).json({
        message: "Validation Error",
      });
    }
    const { email, password } = parsedSchema.data;
    const signInStatus = await signIn({ email, password });
    if (signInStatus) {
      return res.json({
        token: jwt.sign({ email, password }, JWT_PRIVATE_KEY),
        message: "Welcome back",
      });
    } else {
      return res.status(404).json({
        message: "Invalid Username or Password",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
});

router.get("/tokenTest", validateToken, (req, res) => {
  return res.json({
    message: "Good to go",
  });
});

router.post("/sign-up", async (req, res) => {
  try {
    const parsedSchema = signUpSchema.safeParse(req.body);
    if (!parsedSchema.success) {
      return res.status(400).json({
        message: "Validation Error",
      });
    }
    const { email, password, firstName, lastName } = parsedSchema.data;
    const signUpStatus = await signUp({ email, password, firstName, lastName });
    if (signUpStatus) {
      return res.status(200).json({
        token: "",
        message: "Sign up successful.",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
});

module.exports = router;
