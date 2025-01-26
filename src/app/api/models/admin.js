import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{typeof:String, unique:true, required:true},
    password:{typeof:String, required:true}
});

export const adminModel = mongoose.models("admin") || mongoose.model("admin", adminSchema);