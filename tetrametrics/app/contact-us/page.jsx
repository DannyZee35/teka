"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Spinner from "@components/Spinner";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Banner from "@components/Banner";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        inquiryReason: "",
        businessType: ""
    });

    const router = useRouter(); // Initialize useRouter

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for required fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.inquiryReason || !formData.businessType) {
            toast.error("Please fill all the required fields.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success("We have received your request.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    companyName: "",
                    phoneNumber: "",
                    inquiryReason: "",
                    businessType: ""
                });
                // Delay for 3 seconds before redirecting
                setTimeout(() => {
                    router.push("/thank-you"); // Redirect to the thank you page
                }, 1000);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className="max-w-2xl mx-auto mt-10">
            <Toaster />
            <h1 className="font-bold text-center text-3xl">Contact Teikametrics</h1>
            <p className="text-center">Need assistance? Reach out to our team for more information.</p>
            <form 
            onSubmit={handleSubmit} 
            className=" space-y-6 mt-20 
            border-black border p-10 rounded-xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md px-5 py-3 border-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md  px-5 py-3 border-black"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md  px-5 py-3 border-black"
                    />
                </div>
                <div>
                    <label htmlFor="inquiryReason" className="block text-sm font-medium text-gray-700">
                        Inquiry Reason *
                    </label>
                    <textarea
                        id="inquiryReason"
                        name="inquiryReason"
                        value={formData.inquiryReason}
                        onChange={handleChange}
                        rows={8}
                        className="border mt-1 block w-full pl-3 pr-10   text-basefocus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md
                         px-5 py-3 border-black"
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm   rounded-md px-5 py-3 border-black"
                    />
                </div>
                <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm   rounded-md  px-5 py-3 border-black"
                    />
                </div>
                <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type *
                    </label>
                    <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="border mt-1 block w-full pl-3 pr-10  text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md  px-5 py-3 border-black"
                    >
                        <option value="">Select Business Type</option>
                        <option value="1P (Vendor Central)">1P (Vendor Central)</option>
                        <option value="3P (Seller Central)">3P (Seller Central)</option>
                        <option value="Hybrid (1P and 3P)">Hybrid (1P and 3P)</option>
                    </select>
                </div>
                <p className="italic">We're committed to your privacy. Teikametrics uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.

</p>
                <div>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black  focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            disabled={loading}
                        >
                            Get In Touch
                        </button>
                    )}
                </div>
            </form>
           
        </div>
         <div className="sm:p-5">
         <Banner
           heading={"Get started with new Flywheel 2.0"}
           subHeading={"Advertise your business with superhuman intelligence"}
         />
       </div>
       </>
    );
};

export default Contact;
