import { connectDb } from "../../utils/dbConnection";
import { dataModel } from "../../models/dataModel";
import { NextResponse } from "next/server";

const getData = async () => {
  await connectDb();
  try {
    const allData = await dataModel.find({});
    return NextResponse.json(
      { success: true, data: allData, message: "data fecthed" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Fetching data error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch data" },
      { status: 500 },
    );
  }
};

export async function GET() {
  return getData();
}
