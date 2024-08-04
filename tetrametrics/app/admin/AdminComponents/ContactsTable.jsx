"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/get-contacts");
        if (response.status === 200) {
          const data = response.data.map((contact, index) => ({
            ...contact,
            id: index + 1, // Generate sequential IDs starting from 1
          }));
          setContacts(data);
        } else {
          toast.error("Failed to fetch contacts.");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        toast.error("An error occurred while fetching contacts.");
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="w-full">
      <h1 className="font-bold my-5 text-3xl">Users From Contact Us Page</h1>
      <table className="w-full divide-y divide-gray-200 border">
        {/* Table headers */}
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{contact.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/get-contacts/${contact._id}`}>
                 View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
