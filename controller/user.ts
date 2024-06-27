import { Request, Response } from "express";
const User = require("../models/userModel");

const userDetails = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;

    if (!user_id) {
      res.status(400).json({ error: "Please enter a valid ID" });
    }

    // Check if user exists
    let user = await User.findOne({ user_id });
    if (!user) {
      return res.status(400).json({ msg: "Invalid user id" });
    }

    console.log("user", user);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { userDetails };
