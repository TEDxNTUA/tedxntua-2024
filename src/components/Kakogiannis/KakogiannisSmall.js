// import styles from "./Kakogiannis.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Paragraph from "../Paragraph/Paragraph";

export default function KakogiannisSmall() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const z = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const paragraph1 =
    "Το θέμα που ετοιμάζει η φετινή ομάδα του TEDxNTUA είναι το EPHEMERAL. Το TEDxNTUA 2024, πραγματεύεται το αναπόφευκτο τέλος των πάντων και την κινητήρια δύναμη που πηγάζει από την σκιά αυτού του τέλους. Η παροδικότητα αποτελεί την αιτία, λόγω της οποίας όλα εξυψώνονται σε ένα βάθρο. Η παροδική φύση των πραγμάτων δίνει έναυσμα στην συνεχή διατήρηση και εξέλιξη. Ενώ ξέρουμε ότι όλα αλλάζουν και οτιδήποτε -γύρω μας ή και μέσα μας- είναι παροδικό.";

  return (
    // <motion.div
    //   style={{
    //     y,
    //   }}
    //   ref={container}
    //   className="h-[500px] md:h-[800px] 3xl:h-[900px] max-w-[2040px] mx-auto"
    // >
    <div className="max-w-[2040px] mx-auto ">
      <div
        ref={container}
        style={{
          backgroundImage: `url('./design/puprle-rec-bold.png')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
        className="h-[550px] md:h-[800px] mx-auto flex flex-col gap-20 md:gap-8 relative justify-start items-center px-10 py-8 md:py-10"
      >
        <div className="kakogiannis relative w-[80%]">
          <img
            src="./design/kakogiannis-small.png"
            alt="kakogiannis-institute-with-grid"
            className="z-10"
          />
          <motion.img
            style={{ x }}
            src="./design/mcf-logo.png"
            alt="kakogiannis-logo"
            className="absolute w-[100px] md:w-[150px] bottom-0 top-[50px] left-[15px] md:top-[100px] md:left-[30px]"
          />
          <motion.h2
            style={{ x: x1, y: z }}
            className="hidden md:absolute bottom-0 top-0 right-0 font-light text-white text-[50px] 3xl:text-[80px]"
          >
            Where?
          </motion.h2>
        </div>

        <div className="paragraph flex flex-row-reverse">
          <div className="w-[500px] text-white leading-tight break-words text-md justify-center flex flex-col items-center">
            {/* <motion.div
              style={{ x: -x }}
              className=" mx-auto w-[150px] h-[150px] text-white rounded-[50%] bg-our-blue hover:bg-blue-500 text-center flex cursor-pointer"
            > */}
            {/* <Rounded className="w-[180px] h-[180px] text-white rounded-[50%] flex bg-our-blue items-center justify-center cursor-pointer"> */}
            <motion.p
              style={{ x }}
              className="m-0 text-[16px] font-light z-[2] text-center p-8 py-4 bg-our-blue hover:bg-blue-500 rounded-lg"
            >
              <a
                className="hover:cursor-pointer"
                // href="https://www.eventora.com/el/Events/ephemeral"
                href="https://www.google.com/maps/dir//michalis+kakogiannis+maps/@37.9675465,23.6553871,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a1bcf3c94720a9:0x93c0a3f603fbb34e!2m2!1d23.6965868!2d37.9675537?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Get your Tickets */}
                Open maps
              </a>
            </motion.p>
            {/* </Rounded> */}
            {/* </motion.div> */}
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
}
