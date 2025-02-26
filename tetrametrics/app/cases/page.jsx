"use client";

import CasesCard from "@components/CasesCard";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@components/Spinner";
import Banner from "@components/Banner";

const CaseList = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/newsletter", { email });

      if (response.status === 201) {
        toast.success("Email address subscribed successfully.");
        setEmail("");
      } else {
        toast.error(response.data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing email:", error);
      toast.error("Internal Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
            <Toaster />

      <h1 className="font-bold text-4xl text-center mt-20 mb-5">
        Case Studies
      </h1>
      <p className="text-center text-normal mb-5 max-w-[450px] m-auto">
        Read success stories of industry-leading brands and sellers leveraging
        Teikametrics platform and ad management services
      </p>
      <div className="flex items-center justify-center gap-10 mb-20">
      <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="p-3 rounded-xl border border-black"
        />
     {loading ? (
          <Spinner />
        ) : (
          <button
            className={`bg-blue-600 rounded-xl px-8 p-3 text-white ${
              loading ? "opacity-50" : ""
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            Subscribe
          </button>
        )}
      </div>

      <div>
        <CasesCard />
      </div>
      <div className="sm:p-5">
         <Banner
           heading={"Get started with new Flywheel 2.0"}
           subHeading={"Advertise your business with superhuman intelligence"}
         />
       </div>
    </div>
  );
};

export default CaseList;
