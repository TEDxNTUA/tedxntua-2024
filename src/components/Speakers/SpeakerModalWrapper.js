"use client";

import React, { useState, useEffect } from "react";
import SpeakerModalContent from "./SpeakerModalContent";
import SpeakerModal from "./SpeakerModal";

const SpeakerModalWrapper = ({ isModalOpenFlag, setIsModalOpenFlag, namespeaker }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <SpeakerModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsModalOpenFlag && setIsModalOpenFlag(false);
          }}
          namespeaker={namespeaker}
        >
          <SpeakerModalContent namespeaker={namespeaker} />
        </SpeakerModal>
      )}
    </>
  );
};

export default SpeakerModalWrapper;
