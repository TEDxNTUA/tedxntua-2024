"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import Preloader from "../components/Preloader/Preloader";
import Paragraph from "@/components/Paragraph/Paragraph";
import ImageSlider from "@/components/ImageSlider";
import Kakogiannis from "@/components/Kakogiannis/Kakogiannis";

import NewFooter from "@/components/Footer/NewFooter";

// const Scene = dynamic(() => import("@/components/Torus/Scene"), {
//   // loading: () => <p>Loading...</p>,
//   ssr: false,
// });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
    <main className="bg-black">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="bg-black">
        <div className="first-page-content flex flex-col lg:flex-row h-[calc(100vh-65px)] mt-[65px] mx-auto w-[90%] xl:w-[80%] max-w-[100rem]">
          {/* <div className="lg:w-1/2"> */}
          {/* <Scene /> Donut */}
          {/* </div> */}
          <div className="hidden lg:flex justify-center items-center">
            <div
              data-scroll
              data-scroll-speed={0.5}
              className="flex flex-col gap-2 text-2xl m-auto text-white tracking-wider"
            >
              <p>What is ephemeral may not be the object itself,</p>
              <p>but the attention we afford it and how much we are involved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[20vh] text-xl text-white leading-6 text-justify">
        <div className="w-[70%] lg:[50%] mx-auto">
          <Paragraph paragraph={paragraph1} />
        </div>
      </div>

      {/* <Description /> */}
      {/* <Projects /> */}
      <ImageSlider />
      {/* <Contact /> */}
      <Kakogiannis />
      <NewFooter />
    </main>
  );
}
