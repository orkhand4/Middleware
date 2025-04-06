import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  console.log("Pathname:", req.nextUrl.pathname);
  console.log("ID:", id);

  return NextResponse.json({ message: "Product ID", id });
}
