import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import OverviewCards from "./OverviewCards";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import FAQs from "./FAQs";
import Banner from "./Banner";

const Demo = () => {
  return (
    <div>
      <Carousel
        className="w-full max-w-[1200px] m-auto mt-20"
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center justify-between gap-3 p-10">
              <Image src={"/swanson.png"} height={200} width={200} />
              <h1 className="text-center text-3xl font-bold">
                "Bringing on Teikametrics has been a tremendous asset to our
                Amazon business. NatureWise’s sales velocity has increased
                substantially, and we’re excited to continue on that path with
                Amazon DSP."
              </h1>
              <div className="flex flex-col items-center">
                <Image src={"/avatar.png"} height={50} width={50} />
                <h1 className="font-bold ">Zach Katzenstein </h1>
                <p>Director of Digital Marketing</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center justify-between gap-3 p-10">
              <Image src={"/swanson.png"} height={200} width={200} />
              <h1 className="text-center text-3xl font-bold">
                "Bringing on Teikametrics has been a tremendous asset to our
                Amazon business. NatureWise’s sales velocity has increased
                substantially, and we’re excited to continue on that path with
                Amazon DSP."
              </h1>
              <div className="flex flex-col items-center">
                <Image src={"/avatar.png"} height={50} width={50} />
                <h1 className="font-bold ">Zach Katzenstein </h1>
                <p>Director of Digital Marketing</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col items-center justify-between gap-3 p-10">
              <Image src={"/swanson.png"} height={200} width={200} />
              <h1 className="text-center text-3xl font-bold">
                "Bringing on Teikametrics has been a tremendous asset to our
                Amazon business. NatureWise’s sales velocity has increased
                substantially, and we’re excited to continue on that path with
                Amazon DSP."
              </h1>
              <div className="flex flex-col items-center">
                <Image src={"/avatar.png"} height={50} width={50} />
                <h1 className="font-bold ">Zach Katzenstein </h1>
                <p>Director of Digital Marketing</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="h-[50px] w-[50px] drop-shadow-md border border-black" />
        <CarouselNext className="h-[50px] w-[50px] drop-shadow-md border border-black" />
      </Carousel>

      <div className="max-w-[1100px] mt-10 m-auto p-5 ">
        <div className="text-center">
          <h1 className="mb-4 font-bold font-mont text-xl bg-text2-gradient bg-clip-text text-transparent inline-block">
            Your Walmart & Amazon Advertising. Optimized.
          </h1>
        </div>

        <h1 className="text-center font-bold font-mont text-5xl  ">
          The advertising management you need to drive results on Amazon and
          Walmart.com
        </h1>

        <div className="flex mt-10 flex-col sm:flex-row items-start gap-10">
          <OverviewCards
            hasImage={true}
            image={"/ai.png"}
            heading={"AI-powered Flywheel Technology"}
            text={
              "Stay ahead of the competition. Compete at the highest (and fastest) level possible with our proprietary, goal-based artificial intelligence algorithms."
            }
          />
          <OverviewCards
            hasImage={true}
            image={"/ads.png"}
            heading={
              "Advertising Account Management                                                "
            }
            text={
              "With your goals in mind, we handle the day-to-day management of your advertising optimization. Following our proven playbook for success, you can rest assured your ads are in good hands. "
            }
          />
          <OverviewCards
            hasImage={true}
            image={"/expertise.png"}
            heading={"Marketplace Expertise"}
            text={
              "Our experienced account managers eat, sleep and breathe ecommerce. With knowledge from Amazon and Walmart, to digital media and display advertising, our team utilizes their expertise to drive your business performance."
            }
          />
        </div>
      </div>

      <div className="bg-footer-gradient p-10 relative h-[700px]">
        <h1 className="text-2xl font-mont text-center  mb-3  text-transparent bg-gradient bg-clip-text font-bold">
          Real customer performance
        </h1>
        <h1 className="text-white my-10 font-mont text-center mb-3  font-bold text-4xl">
          Our results are what make customers for life
        </h1>

        <div className="flex items-center justify-center gap-20 relative mt-20 ">
          <div className="flex flex-col items-center gap-4">
            <Image src={"/avatar.png"} height={50} width={50} />
            <h1 className="font-bold text-5xl text-white">
              <sup className="text-[40px] bg-clip-text bg-gradient text-transparent">
                +
              </sup>
              134%
            </h1>
            <p className="text-white">Increase In Total Sales Yoy</p>
          </div>
          <div className="h-28 w-0.5 bg-white"/>
 
          <div className="flex flex-col items-center gap-4  ">
            <Image src={"/avatar.png"} height={50} width={50} />
            <h1 className="font-bold text-5xl text-white">
              <sup className="text-[40px] bg-clip-text bg-gradient text-transparent">
                +
              </sup>
              134%
            </h1>
            <p className="text-white">Increase In Total Sales Yoy</p>
          </div>
          <div className="h-28 w-0.5 bg-white"/>

          <div className="flex flex-col items-center gap-4">
            <Image src={"/avatar.png"} height={50} width={50} />
            <h1 className="font-bold text-5xl text-white">
              <sup className="text-[40px] bg-clip-text bg-gradient text-transparent">
                +
              </sup>
              134%
            </h1>
            <p className="text-white">Increase In Total Sales Yoy</p>
          </div>
        </div>

        <div className="absolute top-100 mt-20 left-1/2 -translate-x-1/2   flex flex-col sm:flex-row justify-between gap-10 max-w-[1100px] m-auto p-20 bg-gradient w-full h-auto rounded-lg">
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
             
            >
              Read the case study
            </Link>
            <div
              className={` pb-3 `}
            >
              <FaArrowRightLong color="white" />
            </div>
          </span>
        </div>
      </div>
      </div>

      <div className="mt-[400px] max-w-[1100px] m-auto">
        <h1 className="font-bold text-3xl">FAQs
        </h1>

<div className="mt-20">
    <FAQs/>
    </div>

   
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

export default Demo;
