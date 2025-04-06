import { NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First has minimum 4 symbols" })
    .max(10, { message: "First has maximum 10 symbols" }),
});

export async function POST(req, res) {
  const data = await req.json();

  const result = userSchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ errors: result.error.errors }, { status: 400 });
  }

  return NextResponse.json(
    { message: "User Added Succesfully" },
    { status: 201 }
  );
}
