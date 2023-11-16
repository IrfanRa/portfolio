import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import logoo1 from "./assets/pictures/logo.png"

const Footer = () => {
  return (
    <div >
      <footer className="text-gray-600 body-font bg-blue-100">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logoo1}
              alt="irfan"
              width={100}
              height={100}
              className="w-[80px]"
            />
            <span className="ml-3 text-xl">IR Solutions</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 IRFAN RASHEED (Full Stack Development Solutions)
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/IrfanRa"}
              className="text-gray-500 m-2"
            >
              <FaGithub className="text-3xl hover:text-[#0066ffc9]" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/irfan.rasheed.adv"}
              className="text-gray-500 m-2"
            >
              <FaFacebook className="text-3xl hover:text-[#0066ffc9]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

      