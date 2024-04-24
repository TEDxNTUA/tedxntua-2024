import styles from "./Kakogiannis.module.scss";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";

export default function Kakogiannis() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="text-white flex flex-col items-center justify-center bg-black relative h-[100vh]"
    >
      <div className="pt-[65px] w-[100%] max-w-[1800px] bg-black">
        <div className="pb-[100px] ml-[200px] mr-[200px] relative">
          <h2 className="text-[5vw] m-0 font-light">Where?</h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100% - 400px)] top-[calc(100% - 75px)]"
          >
            <Rounded
              backgroundColor={"#334BD3"}
              className="w-[180px] h-[180px] bg-[#3851a6] text-white rounded-[50%] absolute flex items-center justify-center cursor-pointer"
            >
              <p className="m-0 text-[16px] font-light z-[2] relative">
                Get your Tickets
              </p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] left-[100%]"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}
