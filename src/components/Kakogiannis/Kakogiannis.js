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
  const z = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const paragraph1 =
    "Στις 25 Μαΐου 2024, η ομάδα του TEDxNTUA επιστρέφει στο Ίδρυμα Μιχάλης Κακογιάννης με σκοπό να εξερευνήσει τη σημασία του εφήμερου και του παροδικού. Αυτού που αρχίζει, τελειώνει κι εξελίσσεται. Εάν θέλεις να ζήσεις από κοντά αυτή την εμπειρία, μπορείς να εξασφαλίσεις το εισιτήριό σου εδώ: ";

  return (
    <div
      // style={{
      //   y,
      // }}
      ref={container}
      className="h-[800px] 3xl:h-[900px] max-w-[2040px] mx-auto"
    >
      <div
        style={{
          backgroundImage: `url('./design/puprle-rec-bold.png')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
        className="h-[700px] 3xl:h-[900px] 3xl:mt-[300px] w-full mx-auto flex flex-col md:flex-row relative justify-between items-center"
      >
        <div className="kakogiannis relative left-6 w-[600px] 3xl:w-[1000px]">
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

        <div className="paragraph flex flex-row-reverse my-auto mx-auto">
          <div className="w-[500px] text-white leading-tight break-words text-md justify-center flex flex-col items-center gap-8">
            <div className="3xl:hidden">
              <Paragraph paragraph={paragraph1} />
            </div>
            <p className="hidden 3xl:block text-xl">{paragraph1}</p>

            <a
              className="hover:cursor-pointer z-[50]"
              // href="https://www.eventora.com/el/Events/ephemeral"
              href="https://www.google.com/maps/dir//michalis+kakogiannis+maps/@37.9675465,23.6553871,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a1bcf3c94720a9:0x93c0a3f603fbb34e!2m2!1d23.6965868!2d37.9675537?entry=ttu" //maps 
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                style={{ x }}
                className="left-[calc(100% - 500px)] mx-auto w-[180px] h-[180px] text-white rounded-[50%] flex bg-our-blue hover:bg-blue-500 items-center justify-center cursor-pointer"
              >
                {/* <Rounded className="w-[180px] h-[180px] text-white rounded-[50%] flex bg-our-blue items-center justify-center cursor-pointer"> */}
                {/* <p className="m-0 text-[16px] font-light z-[2] relative">
                  Get your Tickets
                </p> */}

                  <p className="m-0 text-[16px] font-light z-[2] relative">
                  Open maps
                </p>
                {/* </Rounded> */}
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
