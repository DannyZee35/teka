 "use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@components/Spinner";

const ContactDetail = ({ params }) => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      const fetchContact = async () => {
        try {
          const response = await axios.get(`/api/get-contact/${params.id}`);
          setContact(response.data); // Assuming response.data is structured as per Contact schema
          setLoading(false);
        } catch (error) {
          console.error("Error fetching contact:", error);
          setError("Error fetching contact.");
          setLoading(false);
        }
      };

      fetchContact();
    }
  }, [params.id]);

  if (loading) return <Spinner />; // Replace with your loading indicator
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <Toaster />
      <div className="bg-white shadow-lg rounded-lg border border-black">
        <div className="p-6 space-y-4">
          <h1 className="font-bold text-4xl mb-5">Contact Detail</h1>
          {contact && (
            <div>
              <p className="mb-2"><strong>First Name:</strong> {contact.firstName}</p>
              <p className="mb-2"><strong>Last Name:</strong> {contact.lastName}</p>
              <p className="mb-2"><strong>Email:</strong> {contact.email}</p>
              <p className="mb-2"><strong>Company Name:</strong> {contact.companyName}</p>
              <p className="mb-2"><strong>Phone Number:</strong> {contact.phoneNumber}</p>
              <p className="mb-2"><strong>Inquiry Reason:</strong> {contact.inquiryReason}</p>
              <p className="mb-2"><strong>Business Type:</strong> {contact.businessType}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
