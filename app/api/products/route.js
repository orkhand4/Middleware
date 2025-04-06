import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

export function GET(req, res) {
  return NextResponse.json({ data: products });
}

export async function POST(req, res) {
  const data = await req.json();
  products.push(data);
  return NextResponse.json({ data: products }, { status: 201 });
}
