import { NextResponse } from "next/server";
import { connectDb } from "../../utils/dbConnection";
import { adminModel } from "../../models/admin";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createAdmin = async (req) => {
  if (req.method === "POST") {
    await connectDb();
    try {
      const reqBody = await req.json();
      const { username, email, password } = reqBody;
      const userExist = await adminModel.findOne({ email });

      if (userExist) {
        return NextResponse.json(
          { success: false, message: "user exist" },
          { status: 400 },
        );
      }
      if (!validator.isEmail(email)) {
        return NextResponse.json(
          { success: false, message: "invalid email" },
          { status: 400 },
        );
      }
      if (!username || !email || !password) {
        return NextResponse.json(
          { success: false, message: "All field required" },
          { status: 400 },
        );
      }
      if (password.length < 8) {
        return NextResponse.json(
          { success: false, message: "password too short" },
          { status: 400 },
        );
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newAdmin = new adminModel({
        username,
        email,
        password: hashPassword,
      });
      await newAdmin.save();

      const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET_KEY);
      const res = NextResponse.json(
        {
          success: true,
          data: newAdmin.username,
          message: "Admin added",
        },
        {
          status: 200,
        },
      );
      res.cookies.set("AdminToken", token, {
        secure: process.env.NODE_ENV === "production",
        maxAge: 2 * 24 * 60 * 60,
        sameSite: "lax",
        path: "/",
      });
      return res;
    } catch (error) {
      console.log("CreateAdmin Error:", error);
      return NextResponse.json(
        { success: false, message: "unable to add admin" },
        { status: 500 },
      );
    }
  }
};

export async function POST(req) {
  return createAdmin(req);
}
