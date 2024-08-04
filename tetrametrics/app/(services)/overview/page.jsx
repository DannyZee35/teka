"use client";

import Button from "@components/Button";
import OverviewCards from "@components/OverviewCards";
import OverviewImages from "@components/OverviewImages";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import Banner from "@components/Banner";
import { useRouter } from "next/navigation";

const page = () => {
  const [IconHovered, setIconHovered] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="container-lg p-5 bg-second-gradient  pt-10">
        <div className="max-w-[1100px] mt-[50px] m-auto gap-[100px] flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col gap-3 items-start justify-start">
            <h1 className="text-center sm:text-left w-full  font-bold  text-xl font-mont bg-text2-gradient inline-block bg-clip-text text-transparent">
              Ad Management Services
            </h1>
            <h1 className="text-center sm:text-left font-bold mb-7  text-5xl font-mont leading-tight	">
              Achieve Industry-Leading Growth with Expert Amazon Ad Management
            </h1>
            <p className="text-center sm:text-left mb-7 text-xl font-mont">
              Harness the power of our comprehensive ad management services to
              drive exceptional results on Amazon. Our approach integrates daily
              management, deep market insights, and finely-tuned strategies to
              exceed your advertising goals and elevate your business
              performance.
            </p>
            <div className="m-auto sm:m-0">
              <Button
                padding="px-[50px] p-4"
                text={"Get A Free Audit"}
                color="text-white"
                backgroundColor="bg-black"
                onClick={() => router.push("/request-demo")}
              />
            </div>
          </div>

          <div className="w-full sm:w-[1600px]  h-[200px] sm:h-[400px]  relative">
            <Image src={"/Dominate.png"} layout="fill" />
          </div>
        </div>

        <div className="text-center mt-10">
          <h1 className="font-bold mb-20 text-lg font-mont bg-text2-gradient inline-block bg-clip-text text-transparent">
            WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500
          </h1>
          <div className="mb-10">
            <OverviewImages />
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mt-10 m-auto p-5 ">
        <div className="text-center">
          <h1 className="mb-4 font-bold font-mont text-xl bg-text2-gradient bg-clip-text text-transparent inline-block">
            Your Amazon Advertising. Optimized
          </h1>
        </div>

        <h1 className="text-center font-bold font-mont text-5xl  ">
          The Advertising Management You Need to Drive Results on Amazon:
        </h1>

        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={true}
            image={"/ai.png"}
            heading={"Comprehensive Advertising Account Management"}
            text={
              "Focused on achieving your business objectives, we oversee the day-to-day optimization of your advertising campaigns. Utilizing our proven methodologies, we ensure your ads are expertly managed for optimal performance and peace of mind"
            }
          />
          <OverviewCards
            hasImage={true}
            image={"/ads.png"}
            heading={"Strategic Ad Optimization"}
            text={
              "Leveraging a data-driven approach, we continuously refine your ad strategies based on performance analytics and market insights. This ensures your campaigns are optimized for maximum ROI, improved effectiveness, and sustained competitive advantage."
            }
          />
          <OverviewCards
            hasImage={true}
            image={"/expertise.png"}
            heading={"In-Depth Marketplace Expertise"}
            text={
              "Our dedicated account managers possess extensive knowledge in ecommerce and Amazon advertising. With their deep understanding of digital media and display advertising, they apply their expertise to enhance your business performance and drive growth."
            }
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-10 max-w-[1100px] m-auto mt-10 p-20 bg-blue-gradient w-full h-auto rounded-lg">
        <div className="w-full h-[300px] relative">
          <Image className="rounded-lg" src={"/Dominate.png"} layout="fill" />
        </div>
        <div className="gap-4 flex flex-col text-center sm:text-left">
          <h1 className="font-bold font-mont text-white text-xl">
            Customer Case Study
          </h1>
          <h1 className="font-bold font-mont text-white text-4xl">
            NutriBullet grows sales by +24.9% while reducing ad spend and ACOS
          </h1>
          <p className="  font-mont text-white text-normal opacity-80">
            NutriBullet enlists Teikametrics technology & AI-enabled analysts to
            prove incremental lift & increase Amazon sales
          </p>
          <span className="flex items-center gap-3 m-auto sm:m-0">
            <Link
              href={"/overview"}
              className="border-b-2 border-dashed pb-3 text-white font-mont font-bold"
              onMouseEnter={() => setIconHovered(true)}
              onMouseLeave={() => setIconHovered(false)}
            >
              Read the case study
            </Link>
            <div
              className={` pb-3 ${
                IconHovered
                  ? "translate-x-2 transition ease-out delay-75"
                  : "transition ease-in delay-75"
              }`}
            >
              <FaArrowRightLong color="white" />
            </div>
          </span>
        </div>
      </div>

      <div className="max-w-[1100px] mt-20 m-auto p-5 ">
        <div className="text-center">
          <h1 className="mb-4 font-bold font-mont text-xl bg-text2-gradient bg-clip-text text-transparent inline-block">
            Ad Management Services Features
          </h1>
        </div>

        <h1 className="text-center font-bold font-mont text-5xl  ">
          The Services You Need to Surpass Your Goals
        </h1>

        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={false}
            heading={"PPC & Search Expertise"}
            text={
              "Our seasoned ad managers utilize years of experience in marketing and search to optimize your campaigns. Our established methodologies deliver sustainable and measurable performance improvements."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"Product-Centric Campaign Development"}
            text={
              "Design campaigns tailored to the specific goals of each SKU. Whether launching new products or scaling established ones, our strategic approach ensures your objectives are met effectively."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={" Strategic Customer Acquisition"}
            text={
              "Our bespoke campaign structures target brand, competitor, and generic keywords to both retain existing customers and attract new ones, driving comprehensive growth."
            }
          />
        </div>
        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={false}
            heading={"Expert-Driven Keyword Bidding"}
            text={
              "Leveraging our deep understanding of Amazon's bidding algorithms, we optimize your bids based on product lifecycle, conversion rates, sales trends, and price adjustments. This ensures precise and effective bid management around the clock."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"Targeted Keyword Research & Management"}
            text={
              "Through rigorous keyword analysis and harvesting, we continuously identify high-potential keywords while eliminating underperformers, optimizing your market share and reducing inefficiencies."
            }
          />
          <OverviewCards
            hasImage={false}
            heading={"In-Depth Business Performance Insights"}
            text={
              "Receive detailed insights through weekly performance reports and monthly review meetings. Our transparent reporting provides you with a clear understanding of your business performance, enabling informed decisions and strategic adjustments."
            }
          />
        </div>
      </div>

      <div className="max-w-[1100px] m-auto flex flex-col-reverse gap-5 sm:flex-row p-5 items-center justify-between mt-20">
        <div className="w-full sm:w-[700px]  h-[200px] sm:h-[300px]  relative">
          <Image src={"/Dominate.png"} layout="fill" />
        </div>

        <div className="flex flex-col text-center sm:text-left  items-start gap-5">
          <h1 className=" text-xl font-bold font-mont bg-text2-gradient bg-clip-text text-transparent inline-block">
          Leverage Our Strategic Expertise to Achieve Your Amazon Goals
          </h1>
          <h1 className="text-2xl font-mont font-bold">
          Tailored Strategies and Market Insight: Our Secret Sauce
          </h1>
          <p className="font-normal font-mont">
            Our experts leverage the Teikametrics Flywheel AI technology to
            drive sales growth and ad efficiency beyond human capabilities.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-3">
              <Image
                className="mt-1"
                src={"/download.svg"}
                height={15}
                width={15}
              />
              <p className="font-mont  font-semibold">
              Optimized keyword strategies tailored to audience types and campaign goals.

              </p>
            </div>
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-3">
              <Image
                className="mt-1"
                src={"/download.svg"}
                height={15}
                width={15}
              />
              <p className="font-mont  font-semibold">
              Dynamic bidding to secure sales at the best price throughout the day.
              </p>
            </div>
            <div className="flex items-center sm:items-start flex-col sm:flex-row gap-3">
              <Image
                className="mt-1"
                src={"/download.svg"}
                height={15}
                width={15}
              />
              <p className="font-mont  font-semibold">
              Goal-driven campaigns focused on product launches, growth, and profitability.

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px]  mt-20 grid grid-cols-1 sm:grid-cols-5   gap-10 rounded-lg m-5 sm:m-auto bg-blue-gradient  ">
        <div className="relative w-full sm:w-auto h-[400px] sm:h-auto col-span-1 sm:col-span-2   ">
          <Image
            src={"/furniture.png"}
            className="rounded-t-lg sm:rounded-l-lg"
            layout="fill"
          />
        </div>
        <div className="col-span-1  sm:col-span-3 p-5">
          <Image
            src={"/Dominate.png"}
            height={50}
            width={50}
            className="sm:mb-5 sm:m-0 mb-5  m-auto  "
          />
          <h1 className="text-white  sm:text-left text-center font-mont font-bold text-3xl line leading-10 ">
            Extremely happy with the Walmart managed services and will recommend
            to everyone to use Teikametrics if you really want to achieve more
            success in your business.
          </h1>
          <div className="flex items-center gap-5 sm:items-end justify-between flex-col sm:flex-row">
            <div className="mt-10">
              <h1 className="text-white font-mont sm:text-left text-center font-bold">
                Tamia Jin
              </h1>
              <p className="text-white font-mont sm:text-left  text-center">
                Senior Manager, GoPlus
              </p>
            </div>
            <span className="flex items-center gap-3 m-auto sm:m-0">
              <Link
                href={"/overview"}
                className="  text-white font-mont font-bold"
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
              >
                Read the case study
              </Link>
              <div
                className={`  ${
                  IconHovered
                    ? "translate-x-2 transition ease-out delay-75"
                    : "transition ease-in delay-75"
                }`}
              >
                <FaArrowRightLong color="white" />
              </div>
            </span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-20 font-bold text-5xl text-center">Case Studies</h1>
      </div>

      <Banner
        heading={"Connect with our team"}
        subHeading={"Maximize your marketplace potential"}
      />
    </>
  );
};

export default page;
