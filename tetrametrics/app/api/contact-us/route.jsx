

// // pages/api/customers.js

// import { connectDB } from "@dbConfig/dbConfig";
// import Contact from "@models/contactUs";
// import { NextResponse } from "next/server";

// connectDB();
// export async function POST(req) {
//     try {
//        const reqBody = await req.json();
//       const { firstName,lastName,email,companyName,phoneNumber,inquiryReason,businessType } = reqBody;
  
//        const newContact = new Contact({
//         firstName,
//         lastName,
//         email,
//         companyName,
        
//         phoneNumber,
//         inquiryReason,
//         businessType
//       });
  
//        const savedContact = await newContact.save();
  
//        return NextResponse.json(savedContact, { message: 'We have received your request' }, { status: 201 });
//     } catch (error) {
//        console.error("Error creating contact:", error);
//       return NextResponse.error("Internal Server Error", { status: 500 });
//     }
//   }



// pages/api/customers.js

import { connectDB } from "@dbConfig/dbConfig";
import Contact from "@models/contactUs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

connectDB();

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com', // Brevo SMTP server address
    port: 587, // Port for TLS (587 is commonly used)
    secure: false, // false for TLS - as a boolean not string
    auth: {
        user: '7482ef001@smtp-brevo.com', // Your Brevo username
        pass: process.env.SMTP_API // Your Brevo password
    }
});

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { firstName, lastName, email, companyName, phoneNumber, inquiryReason, businessType } = reqBody;

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            companyName,
            phoneNumber,
            inquiryReason,
            businessType
        });

        const savedContact = await newContact.save();

        const mailOptions = {
            from: "pashacorleonne@gmail.com", // Update with your sender email
            to: email,
            cc: ['nftdesignz12@gmail.com'], // Add the CC emails here
            subject: "Contact Form Submission",
            text: `You have received a new contact form submission:
                  First Name: ${firstName}
                  Last Name: ${lastName}
                  Email: ${email}
                  Company Name: ${companyName}
                  Phone Number: ${phoneNumber}
                  Inquiry Reason: ${inquiryReason}
                  Business Type: ${businessType}`
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);

        return NextResponse.json(savedContact, { message: 'We have received your request and an email has been sent.' }, { status: 201 });
    } catch (error) {
        console.error("Error creating contact:", error);
        return NextResponse.error("Internal Server Error", { status: 500 });
    }
}
