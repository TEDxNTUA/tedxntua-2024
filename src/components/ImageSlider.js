import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
  {
    color: "#e3e5e7",
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

export default function ImageSlider() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      // className={styles.slidingImages}
      className="flex flex-col gap-[3vw] relative pt-[100px] bg-purple-100 z-10 max-width-[100%] overflow-x-hidden"
    >
      <motion.div
        style={{ x: x1 }}
        // className={styles.slider}
        // className="flex relative gap-[3vw] w-[120vw] max-w-[2300px] left-[-10vw]"
        className="flex relative gap-[3vw] w-[120vw] max-w-[2300px] left-[-30vw] md:left-[-10vw]"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              // className={styles.project}
              className="w-[25%] h-[150px] md:h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              {/* <div className={styles.imageContainer} */}
              <div className="relative w-[80%] h-[80%]">
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
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[3vw] w-[120vw] max-w-[2300px] left-[10vw] md:left-[-10vw]"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[25%] h-[150px] md:h-[20vw] flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className="relative w-[80%] h-[80%]">
                <img
                  className="object-cover absolute inset-0 w-full h-full"
                  alt={"image"}
                  src={`./talks/${project.src}`}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="relative mt-[100px]">
        <div className="h-[1550%] w-[120%] left-[-10%] bg-purple-100 z-[1] absolute rounded-b-[50%] shadow-md"></div>
      </motion.div>
      {/* border-radius: 0 0 50% 50%   
      box-shadow: 0px 60px 50px rgba(0, 0, 0, 0.748); */}
    </div>
  );
}
