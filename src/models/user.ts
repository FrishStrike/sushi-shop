import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
