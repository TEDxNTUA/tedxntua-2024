"use client";
import { useState } from "react";

export default function About({ fullname, photo, fun ,link }) {
  const redirectToLink = () => {
    // Redirect to the specified link when clicked
    window.location.href = link;
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-md border-[3px] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]  lg:border-black mx-auto h-full cursor-pointer"
      onClick={redirectToLink} // Call redirectToLink function on click
    >
      <div className="relative">
        <div className="flex flex-col rounded-sm justify-center items-center group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]">
          <img
            className={`${isHovered ? "hidden" : "block"} object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]`}
            src={photo}
            alt={fullname}
            />
            <img
              className={`${isHovered ? "block" : "hidden"}`}
              src={fun}
              alt={fullname}
            />
        </div>
        </div>
      </div>
      <div className="flex flex-col mb-2 grow lg:justify-evenly pr-[0.1vw]">
        <div className="px-3 md:px-4 lg:px-6 items-center">
          <h2 className="text-white py-2 md:py-2 font-semibold text-center text-lg lg:text-xl lg:h-fit 2xl:text-x">
            {fullname}
          </h2>
        </div>
      </div>
    </div>
  );
}
