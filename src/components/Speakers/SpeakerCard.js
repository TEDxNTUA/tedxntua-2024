"use client";
import React, { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import { SPEAKERSLIST } from "../../../data/speakers";
export default function SpeakerCard({ fullname, photo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col bg-neutral-50 rounded-md border-[3px] w-full sm:w-[90%] md:w-[80%] lg:w-full border-our-yellow lg:border-black hover:border-our-yellow mx-auto h-full">
      <div
        className="flex flex-col grow lg:h-[70%] hover:cursor-pointer"
        onClick={toggleContent}
      >
        <div className="relative">
          <div className="flex flex-col rounded-sm justify-center items-center group">
            <img
              className="object-top object-cover group-hover:grayscale group-hover:blur-[5px] w-[30vh] h-[30vh] md:w-[50vh] md:h-[50vh]"
              src={photo}
              alt={fullname}
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className=" text-our-yellow bg-black bg-opacity-75 py-2 px-3 md:px-4 lg:px-6 rounded-lg font-semibold text-center text-base lg:text-2xl lg:h-fit 2xl:text-4xl">
                Learn More
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-2 grow lg:justify-evenly pr-[0.1vw]">
          <div className="px-3 md:px-4 lg:px-6 items-center">
            <h2 className="text-black py-2 md:py-2 font-semibold text-center text-lg lg:text-xl lg:h-fit 2xl:text-x">
              {fullname}
            </h2>
          </div>
        </div>
      </div>
      {isExpanded && (
        <ModalWrapper
          setIsModalOpenFlag={setIsExpanded}
          name={fullname}
          datalist={SPEAKERSLIST}
        />
      )}
    </div>
  );
}
