"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import logoo1 from "./assets/pictures/logo1.png"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-blue-50">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "UI/UX Designer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <div>
          <h1 className="mb-8 leading-relaxed">
          Full Stack Web and TV App Developer</h1>
           <p className="mb-8 leading-relaxed"> Welcome to the digital showcase of my journey as a Full Stack Web and TV App Developer.With a passion for building seamless, dynamic digital experiences, I specialize in crafting innovative solutions that bridge the gap between web and television application development. </p>
          </div>
          
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none
               hover:bg-blue-400 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[21rem]"
            alt="hero"
            width={500}
            height={500}
            src={logoo1}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;