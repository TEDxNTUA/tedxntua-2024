import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "./speakers/nasiafilippidi.jpg",
  },
  {
    color: "#21242b",
    src: "./speakers/iasonspyromilios.jpg",
  },
  {
    color: "#e5e0e1",
    src: "./speakers/georgioslyrakos.jpg",
  },
  {
    color: "#d4e3ec",
    src: "./speakers/konstantinoskotios.jpg",
  },
];

const slider2 = [
  {
    color: "#d7d4cf",
    src: "./performers/perf/aggelina.jpg",
  },
  {
    color: "#e3e3e3",
    src: "./speakers/georgepanagiotakopoulos.jpg",
  },
  {
    color: "#d7d4cf",
    src: "./performers/perf/majovoli.jpg",
  },
  {
    color: "#e3e3e3",
    src: "./speakers/fotis-floros.jpg",
  },
];

export default function ImageSlider() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      // className={styles.slidingImages}
      className="flex flex-col gap-[3vw] relative py-[50px] md:pt-[100px] bg-purple-100 z-10 max-width-[100%] overflow-x-hidden"
    >
      <motion.div
        style={{ x: x1 }}
        // className={styles.slider}
        className="flex relative gap-[3vw] w-[120vw] max-w-[2300px] left-[-90px] md:left-[-95px] lg:left-[-50px] xl:left-[0px]"
        // className="flex relative gap-[3vw] w-[120vw] max-w-[2300px] bg-red-500  h-[100px] md:h-[200px] lg:h-[250px] xl:h-[300px] left-[100px]"
      >
        {slider1.map((project, index) => {
          return (
            // <div
            //   key={index}
            //   // className={styles.project}
            //   className="h-[100px] w-[150px] flex items-center justify-center"
            //   // style={{ backgroundColor: project.color }}
            // >
            <div
              key={index}
              className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] xl:w-[300px] xl:h-[300px] 2xl:w-[350px] 2xl:h-[350px]"
            >
              <img
                className="object-cover h-fit w-fit absolute inset-0"
                alt={"image"}
                src={`${project.src}`}
                width={30}
                height={30}
              />
              //{" "}
            </div>
            // </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        //   className="flex relative gap-[3vw] w-[110vw] max-w-[2300px]"
        // >
        className="flex relative gap-[3vw] w-[100vw] max-w-[2300px] bg-red-500"
      >
        {slider2.map((project, index) => {
          return (
            // <div
            //   key={index}
            //   className="w-[25%] h-[150px] md:h-[20vw] flex items-center justify-center"
            //   style={{ backgroundColor: project.color }}
            // >
            //   <div key={index} className="relative w-[80%] h-[80%]">
            //     <img
            //       className="object-cover absolute inset-0 w-full h-full"
            //       alt={"image"}
            //       src={`${project.src}`}
            //       width={30}
            //       height={30}
            //     />
            //   </div>
            // </div>
            <div
              key={index}
              className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]"
            >
              <img
                className="object-cover h-fit w-fit absolute inset-0"
                alt={"image"}
                src={`${project.src}`}
                width={30}
                height={30}
              />
              //{" "}
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="hidden md:relative mt-[100px]">
        <div className="md:h-[1550%] w-[120%] left-[-10%] bg-purple-100 z-[1] absolute rounded-b-[50%] shadow-md"></div>
      </motion.div>
      {/* border-radius: 0 0 50% 50%   
      box-shadow: 0px 60px 50px rgba(0, 0, 0, 0.748); */}
    </div>
  );
}
