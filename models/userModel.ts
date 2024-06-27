import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
