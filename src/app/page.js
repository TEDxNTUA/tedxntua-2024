"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import Preloader from "@/components/Preloader/Preloader";
import Paragraph from "@/components/Paragraph/Paragraph";
import ImageSlider from "@/components/ImageSlider";
import ImageGrid from "@/components/ImageGrid";
import Kakogiannis from "@/components/Kakogiannis/Kakogiannis";
import KakogiannisSmall from "@/components/Kakogiannis/KakogiannisSmall";

const Scene = dynamic(() => import("@/components/Torus/Scene"), {
  // loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  // const [isLoading, setIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // UNCOMMENT FOR PRELOADRE

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  const paragraph1 =
    "Το θέμα που ετοιμάζει η φετινή ομάδα του TEDxNTUA είναι το EPHEMERAL. Το TEDxNTUA 2024, πραγματεύεται το αναπόφευκτο τέλος των πάντων και την κινητήρια δύναμη που πηγάζει από την σκιά αυτού του τέλους. Η παροδικότητα αποτελεί την αιτία, λόγω της οποίας όλα εξυψώνονται σε ένα βάθρο. Η παροδική φύση των πραγμάτων δίνει έναυσμα στην συνεχή διατήρηση και εξέλιξη. Ενώ ξέρουμε ότι όλα αλλάζουν και οτιδήποτε -γύρω μας ή και μέσα μας- είναι παροδικό, μπορεί να δυσκολευόμαστε επειδή δεν θέλουμε να αποδεχθούμε την εφήμερη φύση των πραγμάτων. Γι’ αυτό είναι πολύ σημαντικό να συμφιλιωθεί κανείς με την παροδικότητα. In brief, what is ephemeral may not be the object itself, but the attention we afford it and how much we are involved";

  const paragraph2 =
    "Η εφημερία αποτελεί την αιτία, λόγω της οποίας όλα εξυψώνονται σε ένα βάθρο. Δεν είναι λίγες οι φορές που εφήμερα γεγονοτα αποδεικνύονται καθοριστικά (life changing)… Είναι δύσκολο να αποδεχθούμε την εφήμερη φύση όσων διαδραματίζονται γύρω μας ή και μέσα μας. Ωστόσο, όλα αλλάζουν και είναι εξαιρετικά σημαντικό να συμφιλιωθεί κανείς με την παροδικότητα που τον περιβάλλει. «Some ephemeral moments must be given a memory. The temporality of an instant may radiate a twinkle of eternity»";

  return (
    <main
      className="mx-auto relative z-0 overflow-x-hidden"
      style={{
        backgroundImage: `url('/background/background-laptop-new.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <div className="1st-scroll desktop z-20 relative max-w-[2040px] h-[calc(100vh-65px)] max-h-[900px] hidden lg:grid lg:grid-cols-2 mx-auto w-full ">

        <div
          style={{
            backgroundImage: `url('./design/grid.png')`,
            backgroundSize: "", // Optional: adjust as needed
          }}
          className="hidden lg:flex justify-center items-center xl:w-[600px] mt-10 ml-4"
        >
          <div className="hidden lg:flex relative justify-center items-center xl:w-[600px] mt-10 ml-4">
            <div
              data-scroll
              data-scroll-speed={0.5}
              className="flex flex-col gap-2 text-2xl m-auto text-white tracking-wider w-3/5"
            >
              <p>What is ephemeral may not be the object itself,</p>
              <p>but the attention we afford it and how much we are involved</p>
            </div>
          </div>
        </div>
        <Scene />
      </div>


      <div className="1st-scroll mobile-tablet lg:hidden z-20 relative flex flex-col">
        <div className="h-[calc(100vh-65px)]">
          <Scene />
        </div>
        <div
          style={{
            backgroundImage: `url('/design/grid.png')`,
            backgroundSize: "", // Optional: adjust as needed
          }}
          className="flex justify-center items-center h-[50vh] md:w-[70%] mx-auto"
        >
          <div className="flex relative justify-center items-center xl:w-[600px] mt-10 ml-4">
            <div
              data-scroll
              data-scroll-speed={0.5}
              className="flex flex-col gap-2 text-lg m-auto text-white tracking-wider w-3/5"
            >
              <p>What is ephemeral may not be the object itself,</p>
              <p>but the attention we afford it and how much we are involved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="2nd-scroll desktop hidden lg:grid grid-cols-2 z-20 relative max-w-[2040px] max-h-[900px] mx-auto w-full">
        <div
          style={{
            backgroundImage: `url('./design/grid.png')`,
            backgroundSize: "", // Optional: adjust as needed
          }}
          className="hidden lg:flex justify-center items-center xl:w-[600px] mb-10 ml-4"
        >
          <img
            src="/design/apple.png"
            alt="bitten-apple"
            className="w-1/2 z-30"
          />
        </div>

        <div className="flex flex-row justify-between items-center gap-12  pr-28">
          <div
            style={{
              backgroundImage: `url('./design/purple-rect-small.png')`,
              backgroundSize: "cover", // Optional: adjust as needed
            }}
            className="w-[80%] max-w-[1000px] rounded-sm"
          >
            <div className="mx-auto text-white leading-tight break-words text-sm xl:text-md xl:p-10 py-10 px-4">
              <Paragraph paragraph={paragraph1} />
            </div>
          </div>
          <img
            src="./design/embrace-feeling.png"
            alt="embrace-feeling-text"
            className="h-[50%] my-auto max-h-[600px]"
          />
        </div>
      </div>

      <div className="2nd-scroll mobile-tablet lg:hidden z-20 relative grid grid-cols-1 mx-auto w-full gap-12 mb-10 mt-10">
        <img
          src="./design/embrace-fleeting-horizontal.png"
          alt="embrace-feeling-text"
          className="w-[80%] md:w-[50%] mx-auto"
        />

        <div
          style={{
            backgroundImage: `url('/design/grid.png')`,
            backgroundSize: "", // Optional: adjust as needed
          }}
          className="flex justify-center items-center h-[50vh] md:w-[70%] mx-auto"
        >
          <img
            src="/design/apple.png"
            alt="bitten-apple"
            className="w-1/2 z-30"
          />
        </div>

        <div
          className="text-white leading-tight break-words text-sm md:text-md py-8 px-4 w-[80%] md:w-[70%] mx-auto rounded-md"
          style={{
            backgroundImage: `url('/design/purple-rect-small.png')`,
            backgroundSize: "", // Optional: adjust as needed
          }}
        >
          <Paragraph paragraph={paragraph2} />
        </div>
      </div>

      <div className="3xl:hidden">
        <ImageSlider />
      </div>
      <div className="hidden 3xl:block z-10">
        <ImageGrid />
      </div>
      {/* <Contact /> */}
      <div className="hidden lg:block">
        <Kakogiannis />
      </div>
      <div className="block lg:hidden">
        <KakogiannisSmall />
      </div>
      {/* <Kakogiannis /> */}
      {/* <NewFooter /> */}
    </main>
  );
}
