"use client";

import { PARTNERSLIST } from "../../../data/partners";
import React, { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
export default function Partners({ fullname, photo, link }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const redirectToLink = () => {
    // Redirect to the specified link when clicked
    const entity = PARTNERSLIST.find((entity) => entity.fullname === fullname);

    if (entity.cv_url) {
      setIsExpanded(!isExpanded);
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      onClick={redirectToLink} // Call redirectToLink function on click
      className="flex flex-col items-center mx-auto rounded-sm col-span-3"
    >
      <div className="relative flex flex-col rounded-sm justify-center items-center group hover:cursor-pointer">
        <img
          className="bg-white object-top object-cover group-hover:grayscale group-hover:blur-[5px] rounded-sm border-4 border-our-yellow"
          src={photo}
          alt={fullname}
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="group-hover:opacity-100 transition-opacity text-our-yellow bg-black bg-opacity-75 py-2 px-3 md:px-4 lg:px-6 rounded-lg font-semibold text-center text-lg lg:h-fit">
            Learn More
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center h-full py-4">
        <h2 className="text-white font-semibold text-center text-lg">
          {fullname}
        </h2>
      </div>
      {isExpanded && (
        <ModalWrapper
          setIsModalOpenFlag={setIsExpanded}
          name={fullname}
          datalist={PARTNERSLIST}
        />
      )}
    </div>
  );
}
