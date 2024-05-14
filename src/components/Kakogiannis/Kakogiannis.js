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
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const z = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const paragraph1 =
    "Το θέμα που ετοιμάζει η φετινή ομάδα του TEDxNTUA είναι το EPHEMERAL. Το TEDxNTUA 2024, πραγματεύεται το αναπόφευκτο τέλος των πάντων και την κινητήρια δύναμη που πηγάζει από την σκιά αυτού του τέλους. Η παροδικότητα αποτελεί την αιτία, λόγω της οποίας όλα εξυψώνονται σε ένα βάθρο. Η παροδική φύση των πραγμάτων δίνει έναυσμα στην συνεχή διατήρηση και εξέλιξη. Ενώ ξέρουμε ότι όλα αλλάζουν και οτιδήποτε -γύρω μας ή και μέσα μας- είναι παροδικό.";

  return (
    <motion.div
      style={{
        y,
      }}
      ref={container}
      className="h-[700px] 3xl:h-[900px] max-w-[2040px] mx-auto"
    >
      <div
        style={{

          backgroundImage: `url('./design/puprle-rec-bold.png')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
        className="h-[700px] 3xl:h-[900px] 3xl:mt-[300px] mx-auto flex flex-col md:flex-row relative justify-around items-center px-10"
      >
        <div className="kakogiannis relative w-[600px] 3xl:w-[1000px]">
          <img
            src="./design/kakogiannis3.png"
            alt="kakogiannis-institute-with-grid"
            className="z-10"
          />
          <motion.img
            style={{ x }}
            src="./design/mcf-logo.png"
            alt="kakogiannis-logo"
            className="absolute w-[150px] bottom-0 top-[150px] left-[100px]"
          />
          <motion.h2
            style={{ x, y: z }}
            className="absolute bottom-0 top-0 left-[100px] font-light text-white text-[50px] 3xl:text-[80px]"
          >
            Where?
          </motion.h2>
        </div>

        <div className="paragraph flex flex-row-reverse my-auto">
          <div className="w-[500px] text-white leading-tight break-words text-md justify-center flex flex-col items-center gap-8">
            <div className="3xl:hidden">
              <Paragraph paragraph={paragraph1} />
            </div>
            <p className="hidden 3xl:block text-xl">{paragraph1}</p>

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
    </motion.div>
  );
}
