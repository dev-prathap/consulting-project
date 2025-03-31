import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper function to read and write to the JSON file
const BLOG_DATA_PATH = path.join(process.cwd(), 'src/app/Data/BlogContent.json');

// GET handler
export async function GET() {
  try {
    // Read the JSON file
    const fileContents = await fs.promises.readFile(BLOG_DATA_PATH, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST handler to create a new blog
export async function POST(request) {
  try {
    const newBlog = await request.json();
    
    // Read existing blogs
    const fileContents = await fs.promises.readFile(BLOG_DATA_PATH, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Generate a new ID (highest ID + 1)
    const newId = Math.max(...blogs.map(blog => blog.id)) + 1;
    newBlog.id = newId;
    
    // Add new blog to array
    blogs.push(newBlog);
    
    // Write back to file
    await fs.promises.writeFile(BLOG_DATA_PATH, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blog: newBlog });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

// PUT handler to update a blog
export async function PUT(request) {
  try {
    const updatedBlog = await request.json();
    
    // Read existing blogs
    const fileContents = await fs.promises.readFile(BLOG_DATA_PATH, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Find the blog to update
    const index = blogs.findIndex(blog => blog.id === updatedBlog.id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    // Update the blog
    blogs[index] = updatedBlog;
    
    // Write back to file
    await fs.promises.writeFile(BLOG_DATA_PATH, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    if (!id) {
      return NextResponse.json(
        { error: 'Blog ID is required' },
        { status: 400 }
      );
    }
    
    // Read existing blogs
    const fileContents = await fs.promises.readFile(BLOG_DATA_PATH, 'utf8');
    const blogs = JSON.parse(fileContents);
    
    // Filter out the blog to delete
    const filteredBlogs = blogs.filter(blog => blog.id !== id);
    
    if (filteredBlogs.length === blogs.length) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    // Write back to file
    await fs.promises.writeFile(BLOG_DATA_PATH, JSON.stringify(filteredBlogs, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
} 