"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { FiCopy, FiCheck } from "react-icons/fi";
import Papa from "papaparse";
import { saveAs } from "file-saver";

const Page = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [copiedEmailIds, setCopiedEmailIds] = useState(new Set());

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("/api/get-subscribed-users");
        if (response.status === 200) {
          const data = response.data.map((subscriber, index) => ({
            id: index + 1,
            email: subscriber.email,
            source: "Subscriber",
            createdAt: subscriber.createdAt,
          }));
          setSubscribers(data);
        } else {
          console.error("Failed to fetch subscribers.");
        }
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, []);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/get-contacts");
        if (response.status === 200) {
          const data = response.data.map((contact, index) => ({
            id: index + 1,
            email: contact.email,
            source: "Contact",
            createdAt: contact.createdAt,
          }));
          setContacts(data);
        } else {
          console.error("Failed to fetch contacts.");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("/api/get-demo-users");
        if (response.status === 200) {
          const data = response.data.map((customer, index) => ({
            id: index + 1,
            email: customer.email,
            source: "Customer",
            createdAt: customer.createdAt,
          }));
          setCustomers(data);
        } else {
          console.error("Failed to fetch customers.");
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleCopy = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedEmailIds((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setCopiedEmailIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 3000);
  };

  const handleDownload = () => {
    const allData = [
      ...subscribers.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      })),
      ...contacts.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      })),
      ...customers.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      })),
    ];

    const csv = Papa.unparse(allData, {
      header: true,
      skipEmptyLines: true,
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "all_data.csv");
  };

  const renderRow = (item, index) => (
    <tr key={`${item.source}-${item.id}`} className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.source}</td>
      <td className="px-6 py-4 whitespace-nowrap">{new Date(item.createdAt).toLocaleString()}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {copiedEmailIds.has(item.id) ? (
          <FiCheck className="text-green-500" />
        ) : (
          <FiCopy
            className="cursor-pointer"
            onClick={() => handleCopy(item.email, item.id)}
          />
        )}
      </td>
    </tr>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="font-bold text-4xl text-center mt-20 mb-5">Emails List</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download All Data as CSV
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {subscribers.map((subscriber, index) =>
            renderRow(subscriber, index)
          )}
          {contacts.map((contact, index) =>
            renderRow(contact, subscribers.length + index)
          )}
          {customers.map((customer, index) =>
            renderRow(customer, subscribers.length + contacts.length + index)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
