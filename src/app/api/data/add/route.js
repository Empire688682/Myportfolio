import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import { Readable } from "stream";

// Disable Next.js automatic body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Convert Next.js Request to a Node.js Readable Stream
async function requestToStream(req) {
  if (!req.body) throw new Error("Request body is missing");
  const buffers = [];
  for await (const chunk of req.body) {
    buffers.push(chunk);
  }
  return Readable.from(Buffer.concat(buffers));
}


async function parseForm(req) {
  const stream = await requestToStream(req); // Convert Next.js req to stream
  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(stream, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ success: false, message: "Method not allowed" }, { status: 405 });
  }

  try {
    // Parse the form data
    const { fields, files } = await parseForm(req);

    await connectDb();
    const { title, category, link } = fields;
    const image = files.image?.[0];

    if (!image || !title || !category || !link) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // Validate image type
    const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validImageTypes.includes(image.mimetype)) {
      return NextResponse.json(
        { success: false, message: "Invalid image type" },
        { status: 400 }
      );
    }

    // Validate image size
    if (image.size > 1024 * 1024 * 5) {
      return NextResponse.json(
        { success: false, message: "Image size too large" },
        { status: 400 }
      );
    }

    // Save image file
    const safeImage = image.originalFilename.replace(/[^a-zA-Z0-9.-_]/g, "");
    const imageName = `${Date.now()}_${safeImage}`;
    const imagePath = `./public/images/${imageName}`;

    await fs.rename(image.filepath, imagePath);

    // Save data to DB
    const newData = new dataModel({
      image: `/images/${imageName}`,
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
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to add data" },
      { status: 500 }
    );
  }
}
