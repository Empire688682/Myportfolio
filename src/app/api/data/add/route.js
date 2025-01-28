import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

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
                return NextResponse.json({ success: false, message: "All field required" }, { status: 400 })
            }

            const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
            if (!validImageTypes.includes(image.type)) {
                return NextResponse.json({ success: false, message: "Invalid image type" }, { status: 400 })
            };

            if (image.size > 1024 * 1024 * 5) {
                return NextResponse.json({ success: false, message: "Image size too large" }, { status: 400 })
            }

            if (image.size < 1024 * 1024 * 1) {
                return NextResponse.json({ success: false, message: "Image size too small" }, { status: 400 })
            }

            const safeImage = image.name.replace(/[^a-zA-Z0-9.-_]/g, "");

            const imageName = `${Date.now()}_${safeImage}`;

            const imagePath = path.join(process.cwd(), "public", "images");

            const imageDir = path.join(imagePath, imageName);
            await fs.mkdir(imagePath, { recursive: true });

            const buffer = Buffer.from(await image.arrayBuffer());
            await fs.writeFile(imageDir, buffer);

            const newData = new dataModel({
                image: `images/${imageName}`,
                title,
                category,
                link
            });
            await newData.save();
            return NextResponse.json({ success: true, data: newData, message: "" }, { status: 200 });
        } catch (error) {
            console.log("Error:", error);
            return NextResponse.json({ success: false, message: "Unable to add data" }, { status: 500 })
        }
    }
};

export async function POST (req){
    return addData(req);
}