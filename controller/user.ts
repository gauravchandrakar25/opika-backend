import { Request, Response } from "express";
const User = require("../models/userModel");
import { getCache, setCache } from "./cache";

const userDetails = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const cacheKey = `user:${userId}`;

  try {
    // Check if user data is in Redis
    const cachedUser = await getCache(cacheKey);
    if (cachedUser) {
      console.log("cachedUser", cachedUser);
      return res.json(cachedUser);
    }

    // Fetch user data from MongoDB
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Cache the user data in Redis
    await setCache(cacheKey, user, 3600); // Cache for 1 hour

    return res.json(user);
  } catch (error) {
    console.error("Error fetching user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { userDetails };
