"use client";
import { useEffect, useState } from "react";
import SpeakersGrid from "@/components/Speakers/SpeakersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";

function Speakers() {
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
      <div className="max-w-[2040px] mx-auto mt-[65px]">
        <SpeakersGrid speakerslist={SPEAKERSLIST} />
      </div>
    </main>
  );
}

export default Speakers;
