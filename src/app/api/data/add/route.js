import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

const addData = async (req) => {
  if (req.method === "POST") {
    try {
      await connectDb();
      const formData = await req.formData();
      const image = formData.get("image");
      const title = formData.get("title");
      const category = formData.get("category");
      const link = formData.get("link");

      if (!image || !title || !category || !link) {
        return NextResponse.json(
          { success: false, message: "All fields are required" },
          { status: 400 }
        );
      }

      const newData = new dataModel({
        image,
        title,
        category,
        link,
      });

      await newData.save();
      return NextResponse.json(
        { success: true, data: newData, message: "Data added successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.log("Error:", error);
      return NextResponse.json(
        { success: false, message: "Unable to add data" },
        { status: 500 }
      );
    }
  }
};

export async function POST(req) {
  return addData(req);
}
