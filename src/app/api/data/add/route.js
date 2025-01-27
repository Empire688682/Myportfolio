import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const addData = async (req) => {
    if (req.method === "POST") {
        try {
            connectDb();
            const formData = await req.formData();
            const image= formData.get("image");
            const title= formData.get("title");
            const category= formData.get("category");
            const link= formData.get("link");
        } catch (error) {
            console.log("Error:", error);
            return NextResponse.json({ success: false, message: "Unable to add data" }, { status: 500 })
        }
    }
}