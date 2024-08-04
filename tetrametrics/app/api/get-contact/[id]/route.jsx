// import { connectDB } from "@dbConfig/dbConfig";
// import Contact from "@models/contactUs";
// import { NextResponse } from "next/server";

// // // Connect to the database
// // connectDB();

// // export async function GET(req, { params }) {
// //   try {
// //     const { id } = params; // Extract contact ID from request parameters

// //     // Find the contact by ID
// //     const contact = await Contact.findById(id);

// //     if (!contact) {
// //       return NextResponse.json({ success: false, error: "Contact not found." }, { status: 404 });
// //     }

// //     return NextResponse.json(contact, { status: 200 });
// //   } catch (error) {
// //     console.error("Error fetching contact:", error);
// //     return NextResponse.error("Internal Server Error", { status: 500 });
// //   }
// // }


import { connectDB } from "@dbConfig/dbConfig";
import Contact from "@models/contactUs";
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

export async function GET(req, { params }) {
  try {
    const { id } = params; // Extract email ID from request parameters

    // Find the email by ID
    const contact = await Contact.findById(id);

    if (!contact) {
      return NextResponse.json({ success: false, error: "contact not found." }, { status: 404 });
    }

    return NextResponse.json(contact, { status: 200 });
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
