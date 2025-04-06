import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];


export function GET(req,res){

  return NextResponse.json({data:products})

}

export function POST(req,res){

  return NextResponse.json({data:'This is a post request'})

}

export function DELETE(req,res){

  return NextResponse.json({data:'This is a delete request'})

}