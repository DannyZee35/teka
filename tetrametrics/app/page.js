"use client";
import BrandSlider from "@components/BrandSlider";
import Button from "@components/Button";
import CardComponent from "@components/CardComponent";
import TextSection from "@components/TextSection";
import Image from "next/image";
import { IoIosArrowForward, IoMdCheckmark } from "react-icons/io";
import Marquee from "react-fast-marquee";
import Steps from "@components/Steps";
import Banner from "@components/Banner";
import Percentages from "@components/Percentages";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="container-lg h-auto customAnimation  pt-[100px] -z-10 p-[0px] sm:p-[50px] px-[30px] sm:px-[400px] ">
        <div className="mt-[100px] flex flex-col gap-0 sm:gap-5 p-5 max-w-[1100px] m-auto  ">
          <Image
            src={"/amazon.png"}
            height={100}
            width={100}
            className="mb-4"
          />
          <h1 className="text-4xl text-white font-bold   mb-4 font-mont ">
            Elevate Your Business with High-Impact Ad Strategies
          </h1>
          <div className="h-[2px] w-full bg-line-gradient mb-3 font-mont ">
            {" "}
          </div>
          <p className="text-white text-2xl mb-5 font-mont ">
            Unlock growth with a performance-driven marketing funnel. Start with
            amplifying brand awareness, capture a larger market share, and drive
            repeat purchases through strategic repurchase marketing efforts.
          </p>
          <div className="flex items-center justify-start gap-5">
            <Button
              padding="p-4 sm:p-4"
              text={"Get Free Audit"}
              icon={<IoIosArrowForward />}
              onClick={() => router.push("/request-demo")}
            />
            <Button
              padding="p-4 sm:p-4"
              color="text-white"
              text={"Contact Us"}
              onClick={() => router.push("/contact-us")}
              backgroundColor="bg-black"
            />
          </div>
          <div className="flex items-start gap-5 mt-5">
            <IoMdCheckmark size={"1.5em"} color="white" />
            <span className="text-white font-mont">
              Quick and Easy Onboarding
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <BrandSlider />
      </div>

      <div className="mt-10 flex flex-col gap-10 items-center justify-between">
        <TextSection
          mainHeading={"Dominate"}
          heading={"Your Niche with Sustainable Market Share Expansion"}
          para={
            "Enhance your market position by boosting organic rankings, achieving cost-efficient ACOS and TACOS, and outpacing competitors."
          }
          LargeImage={"/Dominate.png"}
        />
        <Percentages
          icon={"/nutribulllet.png"}
          text={"Sales"}
          text2={"Organic Rank"}
          text3={"ACOS"}
          text4={"TACOS"}
          number={"+269%"}
          number2={"+73%"}
          number3={"-50%"}
          number4={"-63%"}
          iconImage={"/amazon_black.png"}
        />
      </div>
      <div className="mt-20 flex flex-col gap-10 items-center justify-between">
        <TextSection
          reverse={true}
          mainHeading={"Restructure"}
          heading={"Your Campaigns with Your Strategic Objectives"}
          para={
            "Revamp your campaigns to reflect the strategic nature of keywords, target types, placements, and performance metrics. This restructuring aligns your advertising efforts with your broader business goals."
          }
          LargeImage={"/restructure.png"}
        />
        <Percentages
          icon={"/nutribulllet.png"}
          text={"Sales"}
          text2={"Organic Rank"}
          text3={"ACOS"}
          text4={"TACOS"}
          number={"+269%"}
          number2={"+73%"}
          number3={"-50%"}
          number4={"-63%"}
          iconImage={"/amazon_black.png"}
        />
      </div>

      <div className="mt-20 flex flex-col gap-10 items-center justify-between">
        <TextSection
          mainHeading={"Optimize"}
          heading={"Every Ad Dollar with Precision Optimization"}
          para={
            "Every dollar invested in advertising should drive brand growth. A meticulously optimized ad account is essential for sustainable success."
          }
          LargeImage={"/optimize.png"}
        />
        <Percentages
          icon={"/nutribulllet.png"}
          text={"Sales"}
          text2={"Organic Rank"}
          text3={"ACOS"}
          text4={"TACOS"}
          number={"+269%"}
          number2={"+73%"}
          number3={"-50%"}
          number4={"-63%"}
          iconImage={"/amazon_black.png"}
        />
      </div>

      <div className="mt-20 flex flex-col gap-10 items-center justify-between">
        <TextSection
          reverse={true}
          mainHeading={"Scale"}
          heading={"Your Brand with Data-Driven Ad Strategies"}
          para={
            "Enhance your market presence and achieve your niche potential with bespoke, data-driven advertising strategies tailored to your business needs."
          }
          LargeImage={"/scale.png"}
        />
        <Percentages
          icon={"/nutribulllet.png"}
          text={"Sales"}
          text2={"Organic Rank"}
          text3={"ACOS"}
          text4={"TACOS"}
          number={"+269%"}
          number2={"+73%"}
          number3={"-50%"}
          number4={"-63%"}
          iconImage={"/amazon_black.png"}
        />
      </div>

      <div className="mt-20 flex flex-col gap-10 items-center justify-between">
        <TextSection
          mainHeading={"Maximize"}
          heading={"Profits through Strategic ROI Optimization"}
          para={
            "Optimize your return on investment by maximizing organic sales and maintaining an ideal balance between sponsored and organic sales for peak profitability."
          }
          LargeImage={"/profit.png"}
        />
        <Percentages
          icon={"/nutribulllet.png"}
          text={"Sales"}
          text2={"Organic Rank"}
          text3={"ACOS"}
          text4={"TACOS"}
          number={"+269%"}
          number2={"+73%"}
          number3={"-50%"}
          number4={"-63%"}
          iconImage={"/amazon_black.png"}
        />
      </div>

      <h1 className="bg-gradient p-3 mt-20 bg-clip-text text-transparent font-bold text-4xl font-mont text-center">
        Getting started is easy
      </h1>
      <div className=" mt-10 m-auto  p-5 max-w-[1100px] flex flex-col sm:flex-row items-start justify-around">
        <Steps
          image={"/step1.png"}
          text={
            "Our professional team will conduct a comprehensive audit of your current account status, including performance metrics, market positioning, and potential growth areas."
          }
          heading={" Get Your Free Audit"}
        />
        <Steps
          image={"/step2.png"}
          text={
            "Join us for a strategic planning session where we’ll delve into your goals and targets. We’ll collaborate to align our strategies with your vision, ensuring a tailored approach to achieving your brand’s objectives."
          }
          heading={"Strategic Planning Session"}
        />
        <Steps
          image={"/step3.png"}
          text={
            "Embark on your growth journey with us as we implement the strategies and solutions crafted during our planning sessions. Watch your brand thrive on Amazon with our targeted execution and ongoing support."
          }
          heading={"Start Growing on Amazon"}
        />
      </div>
      <div className="flex items-center justify-center mt-10 gap-5">
        <Button
          padding="p-5"
          text={"Get Free Audit"}
          icon={<IoIosArrowForward />}
          onClick={() => router.push("/request-demo")}
        />
        <Button
          padding="p-5"
          color="text-white"
          text={"Contact Us"}
          backgroundColor="bg-black"
          onClick={() => router.push("/contact-us")}
        />
      </div>

      <div className="mt-10 bg-gradient p-2 sm:p-5">
        <h1 className="text-white font-mont font-bold text-4xl text-center mt-10 mb-[50px]">
          Why Metrics Arena, straight from our customers
        </h1>
        <Marquee className="gap-10">
          <div className="flex items-start gap-10 flex-space-x-5 ">
            <div className="flex flex-col items-start gap-10  ">
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially,Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon D and we’re excited to continue on that path with Amazon DSP."
                }
              />
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
            </div>
            <div className="flex flex-col items-start gap-10 flex-space-x-5 ">
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
            </div>
            <div className="flex flex-col items-start gap-10 flex-space-x-5 ">
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been aBringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased s tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />

              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DS and we’re excited to continue on that path with Amazon DSP."
                }
              />
            </div>

            <div className="flex flex-col items-start gap-10  ">
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
            </div>
            <div className="flex flex-col items-start gap-10 flex-space-x-5 ">
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />
            </div>
            <div className="flex flex-col items-start gap-10 flex-space-x-5 ">
              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DSP."
                }
              />

              <CardComponent
                avatar={"/avatar.png"}
                icon={"/amazon.png"}
                text={"President @ TK Distribution"}
                heading={"Zach Katzenstein"}
                para={
                  "Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, Bringing on Teikametrics has been a tremendous asset to our Amazon business. NatureWise’s sales velocity has increased substantially, and we’re excited to continue on that path with Amazon DS and we’re excited to continue on that path with Amazon DSP."
                }
              />
            </div>
          </div>
        </Marquee>

        <div className="flex items-center justify-center mt-10 gap-5">
          <Button
            padding="p-5"
            text={"Get Free Audit"}
            icon={<IoIosArrowForward />}
            onClick={() => router.push("/request-demo")}
          />
          <Button
            padding="p-5"
            color="text-white"
            text={"Contact Us"}
            backgroundColor="bg-black"
            onClick={() => router.push("/contact-us")}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-5 max-w-[1100px] m-auto  items-start justify-around mt-20">
        <div className="w-full h-[400px] relative  ">
          <Image
            src={"/Dominate.jpg"}
            layout="fill"
            className="rounded-lg"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row  h-auto sm:h-[400px] relative bottom-5 sm:bottom-0 sm:right-5 items-center justify-around p-10 rounded-lg  gap-[100px] bg-card-gradient">
          <div className="flex gap-5 flex-col items-start">
            <h1 className="font-bold text-3xl font-mont "> IGLOO</h1>
            <p className="text-normal font-mont ">
              “We worked with Metrics Arena’ analyst team to quickly diagnose
              what was holding us back, and adapt our larger Amazon advertising
              practices to match this goal. The results, in terms of
              dramatically improved ROAS and total sales growth, speak for
              themselves.”
            </p>
            <p className="text-normal font-mont ">
              Logan Grimet — Ecommerce Specialist, Igloo
            </p>
          </div>
          <div className=" bg-black w-full sm:w-0.5	h-[2px] sm:h-[250px] " />
          <div>
            <div className="flex mb-10 flex-col font-mont  items-center gap-5">
              <p className="text-normal font-mont ">Increase in sales</p>
              <h1 className="bg-gradient font-mont font-bold bg-clip-text text-6xl text-transparent">
                +49%
              </h1>
            </div>
            <div className="flex flex-col font-mont  items-center gap-5">
              <p className="text-normal font-mont ">Increase in sales</p>
              <h1 className="bg-gradient font-mont font-bold bg-clip-text text-6xl text-transparent">
                +49%
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`max-w-[1100px] mt-20 gap-10 flex p-5 flex-col sm:flex-row items-center   m-auto  '}`}
      >
        <div className="flex items-start flex-col ">
          <h1 className="text-2xl font-mont    mb-4  text-transparent bg-gradient bg-clip-text font-bold">
            Ad Management Services
          </h1>
          <h1 className="text-black font-mont  mb-4  font-bold text-4xl">
            Strategic and Cost-Efficient Performance
          </h1>
          <p className="text-black font-mont  mb-4 text-xl">
            Leverage our expert ad management services to achieve superior
            results without compromising your budget. We offer strategic,
            performance-focused solutions that drive measurable success and
            deliver exceptional value, ensuring optimal return on your
            advertising investment.
          </p>
       
          <div className="flex items-center"></div>
        </div>
        <div className="w-full sm:w-[1600px] mt-[5px] sm:mt-[50px] h-[300px] relative">
          <Image src={"/Dominate.jpg"} layout="fill" />
        </div>
      </div>

      <div className="sm:p-5">
        <Banner
          heading={"Get Started with Metrics Arena"}
          subHeading={"Enhance Your Advertising with Advanced, Data-Driven Insights"}
        />
      </div>
    </>
  );
}
