import PinataSDK from "@pinata/sdk";
import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { promisify } from "util";

dotenv.config();

const pinata = new PinataSDK({ pinataJWTKey: process.env.PINITA_JWT});
const writeFile = promisify(fs.writeFile);
const unlinkFile = promisify(fs.unlink);

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

      const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!validImageTypes.includes(image.type)) {
        return NextResponse.json(
          { success: false, message: "Invalid image type" },
          { status: 400 }
        );
      }

      if (image.size > 1024 * 1024 * 5) {
        return NextResponse.json(
          { success: false, message: "Image size too large" },
          { status: 400 }
        );
      }

      console.log("image:", image);

      // Convert image to buffer
      const imageBuffer = Buffer.from(await image.arrayBuffer());

      // Create a temporary file path
      const tempFilePath = path.join(process.cwd(), image.name); // Use original filename

      // Write buffer to a temporary file
      await writeFile(tempFilePath, imageBuffer);

      // Create a readable stream from the file
      const readableStream = fs.createReadStream(tempFilePath);

      // Upload to Pinata with metadata
      const imageResult = await pinata.pinFileToIPFS(readableStream, {
        pinataMetadata: {
          name: image.name, // Fix: Provide filename metadata
        },
      });

      // Delete the temporary file after upload
      await unlinkFile(tempFilePath);

      const newData = new dataModel({
        image: `${process.env.PINTA_URL}/${imageResult.IpfsHash}?pinataGatewayToken=${process.env.PINTA_GATEWAY}`,
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
