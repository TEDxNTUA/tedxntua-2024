import React, { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import { PERFORMWORKSLIST } from "../../../data/performers";
export default function PerformerCard({ fullname, photo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const comingsoon = photo.includes("empty_speaker") ? false : true;

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col bg-neutral-50 rounded-md border-[3px] w-auto max-w-[600px] h-auto border-our-yellow lg:border-black hover:border-our-yellow mx-auto">
      <div
        className="flex flex-col grow lg:h-[70%] hover:cursor-pointer"
        onClick={toggleContent}
      >
        <div className="relative">
          <div className="flex flex-col rounded-sm justify-center items-center group">
            <img
              className="max-w-[600px] max-h-[600px] w-[40vh] object-center object-contain group-hover:grayscale group-hover:blur-[5px]"
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
        {comingsoon && (
          <div className="flex flex-col mb-2 grow lg:justify-evenly pr-[0.1vw]">
            <div className="px-3 md:px-4 lg:px-6 items-center">
              <div className="text-black py-2 md:py-2 font-semibold text-center text-lg lg:text-xl lg:h-fit 2xl:text-xl">
                {fullname}
              </div>
            </div>
          </div>
        )}
      </div>
      {isExpanded && comingsoon && (
        <ModalWrapper
          setIsModalOpenFlag={setIsExpanded}
          name={fullname}
          datalist={PERFORMWORKSLIST}
        />
      )}
    </div>
  );
}
