"use client";
import { useEffect, useState } from "react";
import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMWORKSLIST } from "../../../data/performers";

function Performes() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const setBgImage = () => {
      if (window.innerWidth >= 768) {
        setBackgroundImage(`url('./background/background-laptop-new.jpg')`);
      } else {
        setBackgroundImage(`url('./background/background-phone.jpg')`);
      }
    };

    setBgImage();

    window.addEventListener("resize", setBgImage);

    return () => {
      window.removeEventListener("resize", setBgImage);
    };
  }, []);
  return (
    <main
      style={{
        // backgroundImage: `url('./background/background-laptop-new.jpg')`,
        backgroundImage: backgroundImage,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pb-10 max-w-[2040px] mx-auto mt-[65px]">
        <PerformersGrid performworkslist={PERFORMWORKSLIST} />
      </div>
    </main>
  );
}

export default Performes;
