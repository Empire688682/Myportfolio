import { NextResponse } from "next/server";

export async function POST(req) {
    if (req.method !== "POST") {
      return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
    }
  
    const { accessCode } = await req.json();
  
    if (Number(accessCode) === Number(process.env.ADMIN_PASS_KEY)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
  
    return NextResponse.json({ success: false, message: "Invalid Access Code" }, { status: 500 });
  }
  