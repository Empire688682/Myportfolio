import { dataModel } from "../../models/dataModel";
import { connectDb } from "../../utils/dbConnection";
import { NextResponse } from "next/server";
import IncomingForm from "formidable/Formidable";

const addData = async (req) => {
  if (req.method === "POST") {
    const form = new IncomingForm();
    return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject(NextResponse.json({ success: false, message: "Form parsing error" }, { status: 500 }))
        }
        try {
          await connectDb();
          const {title, category, link} = fields;
          const image = files.image[0];

          if (!image || !title || !category || !link) {
            resolve(NextResponse.json(
              { success: false, message: "All field required" },
              { status: 400 },
            ));
          }

          const validImageTypes = ["image/jpeg", "image/png", "image/webp"];
          if (!validImageTypes.includes(image.type)) {
            resolve(NextResponse.json(
              { success: false, message: "Invalid image type" },
              { status: 400 },
            ));
          };

          if (image.size > 1024 * 1024 * 5) {
            resolve(NextResponse.json(
              { success: false, message: "Image size too large" },
              { status: 400 },
            ));
          };

          const safeImage = image.name.replace(/[^a-zA-Z0-9.-_]/g, "");

          const imageName = `${Date.now()}_${safeImage}`;


          const newData = new dataModel({
            image: `${imageName}`,
            title,
            category,
            link,
          });
          await newData.save();
          resolve(NextResponse.json(
            { success: true, data: newData, message: "Data added successfully" },
            { status: 200 },
          ));
        } catch (error) {
          console.log("Error:", error);
          resolve(NextResponse.json(
            { success: false, message: "Unable to add data" },
            { status: 500 },
          ));
        }
      })
    })
  }
};

export async function POST(req) {
  return addData(req);
}
