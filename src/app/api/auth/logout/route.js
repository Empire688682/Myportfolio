import { NextResponse } from "next/server";

const LogoutUser = async (req) => {
  if (req.method === "POST") {
    try {
      const res = NextResponse.json(
        { success: true, message: "User logged out" },
        { status: 200 },
      );
      res.cookies.delete("AdminToken");
      return res;
    } catch (error) {
      console.error("ERROR:", error);
      return NextResponse.json(
        { success: false, message: "Unable to log out user" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json(
      { success: false, message: "Method not allowed" },
      { status: 405 },
    );
  }
};

export async function POST(req) {
  return LogoutUser(req);
}
