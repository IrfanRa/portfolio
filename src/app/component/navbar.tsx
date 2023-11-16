import Image from "next/image";
import Link from "next/link";
import logo from "./assets/pictures/logo.png";
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-md text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="IR-Solutions"
            className="w-[60px]"
          />
          <span className="ml-3 text-xl text-gray-700 font-light">
            Full Stack Development Solutions
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-blue-600">
            Home
          </Link>
          <Link href={"#skills"} className="mr-5 hover:text-blue-600">
            Skills
          </Link>
          <Link href={"#project"} className="mr-5 hover:text-blue-600">
            Projects
          </Link>
          <Link href={"#about"} className="mr-5 hover:text-blue-600">
            About
          </Link>
          <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <a href="">
          <button className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 
            focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
            Download CV 
            <FaFileDownload className="ml-2"/>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
