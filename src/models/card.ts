import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  bought: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const Card =
  mongoose.models.Card || mongoose.model("Card", cardSchema, "cards");
