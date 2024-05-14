"use client";
import { useState } from "react";

export default function About({ fullname, photo, fun, link }) {
  const redirectToLink = () => {
    window.open(link, "_blank");
  };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col lg:h-[100px] lg:border-black mx-auto cursor-pointer"
      onClick={redirectToLink} // Call redirectToLink function on click
    >
      {/* <div className=""> */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className="object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]"> */}
        <div>
          <img
            className={`${
              isHovered ? "hidden" : "block"
              // } object-top object-cover w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]`}
            } object-top object-cover`}
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
      {/* </div> */}
    </div>
  );
}
