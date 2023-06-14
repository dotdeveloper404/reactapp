import { NextResponse } from "next/server";
import Post from "../../../models/Post";
import connect from "@/utils/db";

export const GET = async (request) => {
  //fetch

  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();

    const posts = await Post.find(username && { username });
    // const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database err0r" + error, { status: 500 });
  }
};


export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new Post(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {}
  };
  