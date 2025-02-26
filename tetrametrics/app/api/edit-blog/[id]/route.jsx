import { connectDB } from "@dbConfig/dbConfig";
import mongoose from "mongoose";
import Blog from "@models/blogSchema";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@utils/getDataFromToken";
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';

// Connect to the database
connectDB();

export async function PUT(req, { params }) {
  try {
    const { id } = params; // Extract blog ID from request parameters
    const data = await req.formData();

    const title = data.get('title');
    const content = data.get('content');
    const imageFile = data.get('image'); // Change to the name attribute of your file input field

    // Check if image is provided
    let imageUrl;
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Generate a unique filename for the image using blog ID and original filename
      const filename = `${id}-${imageFile.name}`;

      // Save the image in the public/images directory with the unique filename
      const imagePath = join(process.cwd(), 'public/images', filename);
      await writeFile(imagePath, buffer);

      console.log(`Image saved at ${imagePath}`);

      // Set the image URL to the relative path
      imageUrl = join('/images', filename);

      // Delete the previous image associated with the blog
      const prevBlog = await Blog.findById(id);
      if (prevBlog && prevBlog.imageUrl) {
        const prevImagePath = join(process.cwd(), 'public', prevBlog.imageUrl);
        await unlink(prevImagePath);
        console.log(`Previous image deleted at ${prevImagePath}`);
      }
    }

    // Update the blog post
    const updatedBlog = await Blog.findByIdAndUpdate(id, {
      title,
      content,
      ...(imageUrl && { imageUrl }), // Add imageUrl only if it's provided
    }, { new: true }); // Return the updated document

    if (!updatedBlog) {
      return NextResponse.json({ success: false, error: "Blog not found." }, { status: 404 });
    }

    console.log("Blog post updated:", updatedBlog);

    return NextResponse.json(updatedBlog, { message: "Blog updated successfully", status: 200 });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
