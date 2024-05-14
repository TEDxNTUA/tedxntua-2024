import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
  {
    color: "our-purple-100",
    src: "talk1.jpeg",
  },
  {
    color: "#d6d7dc",
    src: "talk2.jpeg",
  },
  {
    color: "#e3e3e3",
    src: "talk3.jpeg",
  },
  {
    color: "#21242b",
    src: "talk1.jpeg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "talk3.jpeg",
  },
  {
    color: "#e5e0e1",
    src: "talk1.jpeg",
  },
  {
    color: "#d7d4cf",
    src: "talk2.jpeg",
  },
  {
    color: "#e1dad6",
    src: "talk1.jpeg",
  },
];

export default function ImageGrid() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });

  // const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      // ref={container}
      className="flex flex-col content-center max-w-[2040px] mx-auto justify-center items-center gap-[100px] py-[200px] bg-purple-100"
    >
      <div
        // className={styles.slider}
        className="flex flex-row gap-[100px] mx-auto"
      >
        {slider1.map((project, index) => {
          return (
            <img
              key={index}
              className="inset-0 w-[400px]"
              alt={"image"}
              src={`./talks/${project.src}`}
              width={30}
              height={30}
            />
          );
        })}
      </div>
      <div
        // className={styles.slider}
        className="flex flex-row gap-[100px] mx-auto"
      >
        {slider2.map((project, index) => {
          return (
            <img
              key={index}
              className="inset-0 w-[400px]"
              alt={"image"}
              src={`./talks/${project.src}`}
              width={30}
              height={30}
            />
          );
        })}
      </div>
      {/* <div className="flex relative gap-[3vw] w-[120vw] max-w-[2300px] left-[-10vw]">
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[25%] h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative w-[80%] h-[80%]">
                <img
                  className="object-cover absolute inset-0 w-full h-full"
                  alt={"image"}
                  src={`/talks/${project.src}`}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          );
        })}
      </div> */}
      {/* <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="h-[1550%] w-[120%] left-[-10%] bg-white z-[1] absolute rounded-b-[50%] shadow-md"></div>
      </motion.div> */}
      {/* border-radius: 0 0 50% 50%   
      box-shadow: 0px 60px 50px rgba(0, 0, 0, 0.748); */}
    </div>
  );
}
