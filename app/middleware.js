import { NextResponse } from "next/server";

export const middleware = (req) => {
  return NextResponse.redirect(new URL("/", req.url));
  return NextResponse.next();
};
