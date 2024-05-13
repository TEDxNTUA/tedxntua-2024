"use client";
import { useState } from "react";

export default function About({ fullname, photo, fun ,link }) {
  const redirectToLink = () => {
    window.open(link, '_blank');   
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]  lg:border-black mx-auto cursor-pointer"
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
    </div>
  );
}
