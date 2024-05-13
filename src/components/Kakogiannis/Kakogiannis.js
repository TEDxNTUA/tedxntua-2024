// import styles from "./Kakogiannis.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Paragraph from "../Paragraph/Paragraph";

export default function Kakogiannis() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const paragraph1 =
    "Το θέμα που ετοιμάζει η φετινή ομάδα του TEDxNTUA είναι το EPHEMERAL. Το TEDxNTUA 2024, πραγματεύεται το αναπόφευκτο τέλος των πάντων και την κινητήρια δύναμη που πηγάζει από την σκιά αυτού του τέλους. Η παροδικότητα αποτελεί την αιτία, λόγω της οποίας όλα εξυψώνονται σε ένα βάθρο. Η παροδική φύση των πραγμάτων δίνει έναυσμα στην συνεχή διατήρηση και εξέλιξη. Ενώ ξέρουμε ότι όλα αλλάζουν και οτιδήποτε -γύρω μας ή και μέσα μας- είναι παροδικό.";

  return (
    <motion.div
      style={{
        y,
      }}
      ref={container}
      className="h-[100vh] max-h-[900px]"
    >
      <div
        style={{
          backgroundImage: `url('/background/background-laptop-new.jpg')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
        className="bg-fixed flex flex-col justify-end items-center w-full h-full relative"
      >
        <img
          src="./design/kakogiannis3.png"
          alt="kakogiannis-institute-with-grid"
          className="w-[600px] z-10 absolute left-4 top-[120px]"
        />
        <motion.img
          style={{ x }}
          src="./design/mcf-logo.png"
          alt="kakogiannis-logo"
          className="absolute w-[150px] z-10 left-[100px] top-[250px]"
        />
        <motion.h2
          style={{ x, y }}
          className="absolute font-light text-white top-[11vh] text-[5vw] w-3/4 mx-auto"
        >
          Where?
        </motion.h2>
        <div
          style={{
            backgroundImage: `url('./design/puprle-rec-bold.png')`,
            backgroundSize: "cover", // Optional: adjust as needed
          }}
          className="relative flex flex-row-reverse items-center h-[70vh] max-h-[600px] w-full bg-blue-500"
        >
          <div className="w-[500px] text-white leading-tight break-words text-md mr-[150px] justify-center flex flex-col items-center gap-8">
            <Paragraph paragraph={paragraph1} />
            <motion.div
              style={{ x }}
              className="left-[calc(100% - 500px)] mx-auto w-[180px] h-[180px] text-white rounded-[50%] flex bg-our-blue hover:bg-blue-500 items-center justify-center cursor-pointer"
            >
              {/* <Rounded className="w-[180px] h-[180px] text-white rounded-[50%] flex bg-our-blue items-center justify-center cursor-pointer"> */}
              <p className="m-0 text-[16px] font-light z-[2] relative">
                Get your Tickets
              </p>
              {/* </Rounded> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* </div> */}

      {/* 
      <div className="w-[100%] max-w-[1800px] relative bg-red-400 flex flex-row justify-between items-center px-[100px]">
        <div className="pb-[100px] ml-[200px] mr-[200px] relative">
        <h2 className="text-[5vw] m-0 font-light">Where?</h2>
        <div className="w-20 h-20 bg-black"></div>
        <motion.div style={{ x }} className="left-[calc(100% - 500px)] ">
          <Rounded className="w-[180px] h-[180px] text-white rounded-[50%] flex bg-our-blue items-center justify-center cursor-pointer">
            <p className="m-0 text-[16px] font-light z-[2] relative">
              Get your Tickets
            </p>
          </Rounded>
        </motion.div>
        </div>
      </div> */}
    </motion.div>
  );
}
