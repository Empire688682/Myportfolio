import { NextResponse } from "next/server";
import { connectDb } from "../../utils/dbConnection";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { adminModel } from "../../models/admin";
dotenv.config();

const loginUser = async (req) => {
  if (req.method === "POST") {
    const reqBody = await req.json();
    try {
      await connectDb();
      const { emailOrUsername, password } = reqBody;
      console.log("emailOrUsername:", emailOrUsername);
      if (!emailOrUsername || !password) {
        return NextResponse.json(
          { success: false, message: "All field required" },
          { status: 400 },
        );
      }

      const user = await adminModel.findOne({$or:[
        {email:emailOrUsername},
        {username:emailOrUsername}
      ]});
      console.log("User:", user);
      if (!user) {
        return NextResponse.json(
          { success: false, message: "User not found" },
          { status: 400 },
        );
      }

      const isPwdMatch = await bcrypt.compare(password, user.password);
      if (!isPwdMatch) {
        return NextResponse.json(
          {
            success: false,
            message: "Incorect password. Note: Passwords are case-sensitive. ",
          },
          { status: 400 },
        );
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

      const res = NextResponse.json(
        { success: true, message: "Admin login", data: user.username },
        { status: 200 },
      );

      res.cookies.set("AdminToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 2 * 24 * 60 * 60,
        path: "/",
      });
      return res;
    } catch (error) {
      console.error("CreateUserError:", error);
      return NextResponse.json(
        { success: true, message: error },
        { status: 500 },
      );
    }
  }
};

export async function POST(req) {
  return loginUser(req);
}
