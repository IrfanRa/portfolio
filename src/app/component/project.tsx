import Image from "next/image";
import Link from "next/link";
import React from "react";
import project from "../component/assets/pictures/project.png"
import project1 from "../component/assets/pictures/project1.png"
import project2 from "../component/assets/pictures/project2.png"

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-blue-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Educational Management System
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Management System
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://panaverse-dao-ten-steel.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project1}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Live Streaming App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Streaming App
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I've created for those who owns a
                    catering business. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam exercitationem perferendis,
                    accusamus vitae quia, delectus deserunt debitis quo eaque
                    dolores asperiores non dolore cumque! Culpa adipisci
                    consequuntur error aliquam eum?
                  </p>
                  <Link
                    target="_blank"
                    href={"/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project2}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Fire Stick App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Fire Stick
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is the project which I've created for those who owns a
                    catering business. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam exercitationem perferendis,
                    accusamus vitae quia, delectus deserunt debitis quo eaque
                    dolores asperiores non dolore cumque! Culpa adipisci
                    consequuntur error aliquam eum?
                  </p>
                  <Link
                    target="_blank"
                    href={"/"}
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      