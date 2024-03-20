"use client";

import React, { useState, useEffect } from "react";
import ModalContent from "./ModalContent";
import Modal from "./Modal";

const ModalWrapper = ({ setIsModalOpenFlag, name, datalist }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && (
        <Modal
          datalist={datalist}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsModalOpenFlag && setIsModalOpenFlag(false);
          }}
          name={name}
        >
          <ModalContent name={name} datalist={datalist} />
        </Modal>
      )}
    </>
  );
};

export default ModalWrapper;
