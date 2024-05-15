"use client";
import { useEffect, useState } from "react";
import About from "@/components/About/About";
import AboutGrid from "@/components/About/AboutGrid";
import { ABOUTLIST } from "../../../data/about";
import AboutTednTedx from "@/components/About/AboutTednTedx";
import AboutInfo from "@/components/About/AboutInfo";

function AboutPage() {
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
      className="mt-[65px]"
      style={{
        // backgroundImage: `url('./background/background-laptop-new.jpg')`,
        backgroundImage: backgroundImage,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#160B23]">
        <AboutGrid aboutlist={ABOUTLIST} />
      </div>
      <div>
        <div className="w-[100%] h-[calc(100vh-65px)] max-h-[900px] table py-28">
          <AboutTednTedx />
        </div>
        <div className="w-[100%] h-[calc(100vh-65px)] max-h-[400px] table">
          <AboutInfo />
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
