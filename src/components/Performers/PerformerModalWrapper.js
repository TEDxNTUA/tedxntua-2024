"use client";

import React, { useState, useEffect } from "react";
import PerformerModal from "./PerformerModal";
import PerformerModalContent from "./PerformerModalContent";

const PerformerModalWrapper = ({ isModalOpenFlag, setIsModalOpenFlag, nameperformer }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <PerformerModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsModalOpenFlag && setIsModalOpenFlag(false);
          }}
          nameperformer={nameperformer}
        >
          <PerformerModalContent nameperformer={nameperformer} />
        </PerformerModal>
      )}
    </>
  );
};

export default PerformerModalWrapper;
