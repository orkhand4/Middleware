import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

export function GET(req) {
  return NextResponse.json({ data: products });
}

export async function POST(req) {
  const data = await req.json();
  products.push(data);
  return NextResponse.json({ data: products }, { status: 201 });
}

export async function DELETE(req) {

  const data = await req.json();
  console.log(data.pizzaID);

  const newProducts = products.filter( item => item.id !=data.pizzaID)

  return NextResponse.json({ mes: "Product deleted", data:newProducts }, { status: 200 });
}
