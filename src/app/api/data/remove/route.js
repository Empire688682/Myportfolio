import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";

export async function POST(req) {
    if (req.method === "POST") {
      try {
        await connectDb();
        const reqBody = await req.json();
        const { id } = reqBody;
        if (!id) {
          return NextResponse.json(
            { success: false, message: "All fields are required" },
            { status: 400 }
          );
        }
        const data = await dataModel.findByIdAndDelete(id);
        if (!data) {
          return NextResponse.json(
            { success: false, message: "Data not found" },
            { status: 404 }
          );
        }
        return NextResponse.json(
          { success: true, message: "Data removed successfully" },
          { status: 200 }
        );
      } catch (error) {
        console.error("Error removing data:", error);
        return NextResponse.json(
          { success: false, message: "Failed to remove data" },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { success: false, message: "Method not allowed" },
        { status: 405 }
      );
    }
  }