"use client";

import React, { useState, useEffect } from "react";
import PartnersModalContent from "./PartnersModalContent";
import PartnersModal from "./PartnersModal";

const PartnersModalWrapper = ({
  isModalOpenFlag,
  setIsModalOpenFlag,
  namespeaker,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <PartnersModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsModalOpenFlag && setIsModalOpenFlag(false);
          }}
          namespeaker={namespeaker}
        >
          <PartnersModalContent namespeaker={namespeaker} />
        </PartnersModal>
      )}
    </>
  );
};

export default PartnersModalWrapper;
