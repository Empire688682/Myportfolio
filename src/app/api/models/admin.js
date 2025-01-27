import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const adminModel =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);
