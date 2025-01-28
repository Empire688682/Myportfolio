import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  link: { type: String, required: true },
});

export const dataModel =
  mongoose.models.Data || mongoose.model("Data", dataSchema);
