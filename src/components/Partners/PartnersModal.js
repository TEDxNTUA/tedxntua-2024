"use client";
import React from "react";
import { useState } from "react";
import PartnersModalContent from "./PartnersModalContent";
const PartnersModal = ({ onClose, namespeaker }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur z-10">
      <div className="bg-white py-4 md:py-6 h-auto rounded-lg w-[300px] md:w-[50%]  absolute border-black border-[1px]">
        {/* <div className="bg-white py-4 md:py-6 h-auto rounded-lg w-[300px] md:w-[450px] 2xl:w-[520px] 4xl:w-[800px]  absolute border-black border-[1px]"> */}
        <div
          className="closing-x-button absolute right-0 top-0 m-4 4xl:m-8 z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClose}
        >
          <svg
            className={`w-[2rem] h-[2rem] 4xl:w-[3rem] 4xl:h-[3rem] hover:cursor-pointer ${
              isHovered ? "hidden" : "block"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#000000"
              />{" "}
            </g>
          </svg>
          {/* Hover X button  */}
          <svg
            className={`w-[2rem] h-[2rem] 4xl:w-[3rem] 4xl:h-[3rem] hover:cursor-pointer ${
              isHovered ? "block" : "hidden"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#EB0028"
              />{" "}
            </g>
          </svg>
        </div>
        <PartnersModalContent namespeaker={namespeaker} />
      </div>
    </div>
  );
};

export default PartnersModal;
