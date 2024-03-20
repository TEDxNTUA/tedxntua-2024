"use client";
import React, { useState } from "react";
import SpeakerModalWrapper from "./SpeakerModalWrapper";
export default function SpeakerCard({
  fullname,
  linkedin,
  speaker_photo,
  speciality,
  slug,
  type,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col bg-neutral-50 rounded-md border-[3px] w-full sm:w-[90%] md:w-[80%] lg:w-full border-our-red lg:border-black hover:border-our-red mx-auto h-full">
      <div
        className="flex flex-col grow lg:h-[70%] hover:cursor-pointer "
        onClick={toggleContent}
      >
        <div className="flex flex-col rounded-sm justify-center items-center hover:grayscale">
          <img
            className="w-full md:h-[20vh] xl:h-[50vh] object-center object-cover"
            src={speaker_photo}
            alt={fullname}
          />
        </div>

        <div className="flex flex-col mb-2 grow lg:justify-evenly pr-[0.1vw]">
          <div className="px-3 md:px-4 lg:px-6 items-center">
            <h2 className="text-black py-2 md:py-2 font-semibold text-center text-lg lg:text-xl lg:h-fit 2xl:text-x">
              {fullname}
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {/* <div
              id="bio"
              className={`px-3 md:px-4 lg:px-6 overflow-y-hidden ${
                isExpanded ? "h-full" : "h-[1vh]"
              }`}
            >
              <p className="tracking-tighter text-justify text-base">{type}</p>
            </div> */}

            {/* <div
              className="flex justify-center align-center"
              id="show_more_btn"
            >
              <button
                className="text-our-red text-xs font-bold cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-our-red hover:text-white"
                onClick={toggleContent}
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {isExpanded && (
        <SpeakerModalWrapper
          setIsModalOpenFlag={setIsExpanded}
          namespeaker={fullname}
        />
      )}
    </div>
  );
}
