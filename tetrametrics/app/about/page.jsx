import BrandSlider from "@components/BrandSlider";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Banner from "@components/Banner";

const about = () => {
  return (
    <>
      <div className="container-lg mb-20">
        <div className="text-center max-w-[1100px] m-auto mt-20">
          <h1 className="bg-gradient bg-clip-text text-transparent font-mont font-bold text-2xl inline-block ">
            About Us
          </h1>
          <h1 className="text-4xl font-mont font-bold mt-5">
            Empowering Global Sellers and Brand Owners to Reach Their Full
            Potential
          </h1>
        </div>
      </div>

      <Marquee pauseOnHover={true} speed={80}>
        <div className="flex items-end justify-between gap-10 mt-10">
          <Image src={"/nutribulllet.png"} height={120} width={150} />
          <Image src={"/rockport.png"} height={150} width={150} />
          <Image src={"/swanson.png"} height={150} width={150} />
        </div>
      </Marquee>

      <div className=" max-w-[1100px] gap-20 m-auto mt-20 grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="font-bold font-mont text-3xl">Our company</h1>
          <p className="text-xl font-mont mt-5">
            At Metrics Arena, we are dedicated to revolutionizing the world of
            e-commerce advertising. Our mission is to empower sellers and brand
            owners globally by unlocking their full potential through
            cutting-edge strategies and data-driven insights. We leverage our
            deep market expertise and innovative approaches to deliver
            exceptional results and drive sustainable growth for our clients.
          </p>
          <p className="text-xl font-mont mt-5">
          Our team is composed of seasoned professionals from across the globe, each bringing a wealth of knowledge and a unique perspective to the table. This diverse expertise enables us to tackle complex challenges and deliver tailored solutions that meet the evolving needs of the digital marketplace.
          </p>
        </div>
        <div className="relative w-full h-auto col-span-1">
          <Image src={"/about.png"} layout="fill" />
        </div>
      </div>

      <div className="bg-gradient  pt-20 mt-20">
        <div className="max-w-[1200px] m-auto flex items-center flex-col justify-between gap-5">
          <h1 className="font-mont font-bold text-white text-4xl text-center">
          A Global Team Tackling Worldwide Challenges          </h1>
          <p className="font-mont max-w-[600px]   text-white text-xl text-center">
          At Metrics Arena, we’ve brought together top talent from around the world to realize our vision of crafting the premier e-commerce advertising solutions. Our diverse team is dedicated to addressing global challenges and driving innovation in digital advertising.

          </p>
          <div className="flex items-start justify-between gap-20 mt-10">
            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">Founded in</p>
              <h1 className="text-5xl font-bold font-mont text-white">2020</h1>
            </div>
            <div className="w-[1px] mt-3 h-[4rem] bg-white opacity-80 "></div>

            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">EMPLOYEES</p>
              <h1 className="text-5xl font-bold font-mont text-white">50+</h1>
            </div>
            <div className="w-[1px] mt-3  h-[4rem] bg-white opacity-80 "></div>

            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">COUNTRIES</p>
              <h1 className="text-5xl font-bold font-mont text-white">3</h1>
            </div>
            <div className="w-[1px] mt-3  h-[4rem] bg-white opacity-80 "></div>

            <div className="flex items-center flex-col">
              <p className="mb-3 opacity-80 font-mont text-white">Ads Optimized  
              </p>
              <h1 className="text-5xl font-bold font-mont text-white">70M+</h1>
            </div>
          </div>
          <Image src={"/map.png"} height={500} width={1800} />
        </div>

        <div className="max-w-[1100px] m-auto z-50 relative translate-y-1/2 rounded-xl p-20 bg-white">
          <div className="flex items-start justify-between gap-20">
            <div className="flex gap-5 items-center justify-center flex-col">
              <Image src={"/flag.png"} height={50} width={50} />
              <h1 className="text-3xl font-mont font-bold">Our Mission</h1>
              <p className="font-mont font-normal text-center text-xl">
              At Metrics Arena, our mission is to empower sellers and brand owners worldwide by unlocking their full potential through data-driven insights and innovative advertising strategies. We are dedicated to enhancing market performance and achieving exceptional growth for our clients.
              </p>
            </div>
            <div className="flex gap-5 items-center justify-center flex-col">
              <Image src={"/vision.png"} height={50} width={50} />
              <h1 className="text-3xl font-mont font-bold">Our Vision</h1>
              <p className="font-mont font-normal text-center text-xl">
               Our vision is to be the global leader in e-commerce advertising solutions, setting the standard for excellence in data analysis and strategic optimization. We aim to transform the way businesses approach digital advertising, driving sustainable success and shaping the future of online commerce.

              </p>
            </div>
          </div>
        </div>
        <div className="  w-full h-[2rem]  bg-white "></div>
        <div className="  bg-black pt-[300px] ">
          <div className="max-w-[1200px] rounded-xl  flex items-center justify-center m-auto ">
            <div className="space-y-6">
              <h1 className="text-2xl bg-gradient bg-clip-text text-transparent inline-block ">
                Our Technology
              </h1>
              <h2 className="text-3xl font-bold text-white w-[500px]">
                Teikametrics’ unrivaled data access, scale, and AI technology
              </h2>
              <p className="text-lg text-white w-[500px]">
                Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one.
              </p>
            </div>
            <div>
              <Image src={"/aboutbg.png"} height={500} width={500} />
            </div>
          </div>
        </div>
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

export default about;
