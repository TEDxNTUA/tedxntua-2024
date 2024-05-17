"use client";
import { useEffect, useState } from "react";
import Partners from "@/components/Partners/Partners";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import { PARTNERSLIST } from "../../../data/partners";

function PartnersPage() {
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
      className="mt-[65px]"
    >
      {/* <div       > */}
      <div className="max-w-[2040px] mx-auto">
        <PartnersGrid partnerslist={PARTNERSLIST} />
      </div>
      {/* </div> */}
    </main>
  );
}

export default PartnersPage;
