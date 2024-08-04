"use client";

import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState,useRef} from "react";

const CompaniesLink = ({AboutClick}) => {
    const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const [companyIconHover, setCompanyIconHover] = useState(false);
    const dropdownRef = useRef(null);
    const [AboutIconHovered, setAboutIconHovered] = useState(false);
    const [ContactIconHovered, setContactIconHovered] = useState(false);

    const handleCompanyMouseEnter = () => {
      setCompanyDropdownOpen(true);
    };
  
    const handleCompanyMouseLeave = () => {
      setCompanyDropdownOpen(false);
    };
  return (
    <div className="relative group pb-4" onMouseEnter={handleCompanyMouseEnter} onMouseLeave={handleCompanyMouseLeave}>
    <span className="flex items-center gap-3">
      <Link href={"/companies"} 
        onMouseEnter={() => setCompanyIconHover(true)}
        onMouseLeave={() => setCompanyIconHover(false)}
      >Company</Link>
      <div className={`${companyIconHover ? '-rotate-180 transition delay-75 ease-in-out' : 'transition delay-75 ease-in-out'}`}>
        <IoIosArrowDown />
      </div>
    </span>

    {isCompanyDropdownOpen && (
      <div ref={dropdownRef} className="absolute mt-4 bg-white text-black border p-10 w-[800px] border-gray-300 rounded-md block left-1/4 transform -translate-x-1/4">
        {/* Content for the companies dropdown */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 font-semibold text-2xl ">
              Company Overview
            </h1>
            <p className="font-normal w-[480px]">
            We’re maximizing the potential of sellers and brand owners through the power of data and marketplace expertise            </p>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-3">
              <Link href={"/about"} onMouseEnter={() => setAboutIconHovered(true)} onClick={AboutClick} onMouseLeave={() => setAboutIconHovered(false)}>About Us</Link>
              <div className={`${AboutIconHovered ? 'translate-x-2 transition ease-out delay-75' : 'transition ease-in delay-75'}`}>
                <FaArrowRightLong />
              </div>
            </span>
            <span className="flex items-center gap-3">
              <Link href={"/contact-us"} onMouseEnter={() => setContactIconHovered(true)} onClick={AboutClick} onMouseLeave={() => setContactIconHovered(false)}>Contact Us</Link>
              <div className={`${ContactIconHovered ? 'translate-x-2 transition ease-out delay-75' : 'transition ease-in delay-75'}`}>
                <FaArrowRightLong />
              </div>
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default CompaniesLink