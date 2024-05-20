"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./magnetic.module.css";
import SocialMediaFooter from "./SocialMediaFooter";
import Magnetic from "../../common/Magnetic";

function NewFooter() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const setBgImage = () => {
      if (window.innerWidth >= 768) {
        setBackgroundImage(`url('./background/background-laptop-new.jpg')`);
      } else {
        setBackgroundImage(`url('./background/background-phone.jpg')`);
      }
    };

    setBgImage();

    window.addEventListener("resize", setBgImage);

    return () => {
      window.removeEventListener("resize", setBgImage);
    };
  }, []);

  return (
    <footer
      style={{
        // backgroundImage: `url('./background/background-laptop-new.jpg')`,
        backgroundImage: backgroundImage,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="c-footer relative overflow-hidden pt-[2rem] sm:pt-[1rem] md:pt-[10rem] z-[0] mx-auto"
    >
      <div className="max-w-[2040px] mx-auto c-footer-animation w-embed h-[100vh] object-cover md:object-none md:height-[50rem] absolute top-0 right-0 left-0 bottom-0">
        <svg
          className="overflow-hidden z-0"
          width="100%"
          viewBox="0 0 1577 4307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#160B23">
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
            ></animate>
          </path>
        </svg>
      </div>

      <div className="c-container px-[1.25rem] md:w-[100%] md:max-w-[79rem] md:mx-auto md:px-[2rem] pt-[1rem]">
        <div className="grid grid-col-1 md:grid-row-2 gap-4 py-4">
          <div className="grid justify-items-center md:row-span-1 md:grid-cols-4 pb-4 md:pb-12 justify-center items-center gap-4 md:gap-8">
            <div className="col-span-3 z-10">
              <p className="text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10">
                Visit <span className="text-tedx-red">TEDx</span>NTUA’s Archive
                to check out our history
              </p>
            </div>
            <div className="col-span-3 md:col-span-1 z-10">
              <a
                className="hover:cursor-pointer flex justify-center text-our-red"
                href="https://www.tedx-ntua.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-our-purple-200 hover:bg-our-purple-200/90 px-5 py-3 rounded-sm mx-auto text-white font-semibold z-10"
                  // onClick={() => setIsModalOpenFlag(true)}
                >
                  Get me there
                </button>
              </a>
            </div>
          </div>

          {/* Second row FOR BIG SCREENS */}
          <div className="md:row-span-1 md:grid-cols-2 border-our-yellow border-t-[0.5px] z-10 pt-2 md:pt-4 hidden md:grid">
            {/* First column*/}

            <div className="col-span-1 grid md:grid-rows-3 gap-4">
              <p className="row-span-1 text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10">
                <span className="text-our-red">TEDx</span>NTUA
              </p>
              <p className="row-span-1 text-slate-200 text-sm lg:text-base font-thin z-10 w-[60%] text-justify">
                This independent TEDx event is operated under license from TED
                and the auspices of ICCS. This website is our latest version :
                2024
              </p>
              <div className="row-span-1 w-[60%]">
                <SocialMediaFooter />
              </div>
            </div>

            {/* Nav links*/}
            <ul className="col-span-1 grid grid-cols-2 grid-rows-2 z-10 mt-4 lg:text-2xl justify-center justify-items-center">
              <li>
                <Link href="/" className="text-white text-md font-bold">
                  <Magnetic>
                    <p className={styles.magnetic}>Home</p>
                  </Magnetic>
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-white text-md font-bold">
                  <Magnetic>
                    <p className={styles.magnetic}>Speakers</p>
                  </Magnetic>
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white text-md font-bold">
                  <Magnetic>
                    <p className={styles.magnetic}>Sponsors</p>
                  </Magnetic>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-md font-bold">
                  <Magnetic>
                    <p className={styles.magnetic}>About</p>
                  </Magnetic>
                </Link>
              </li>
            </ul>
          </div>

          {/* Second row FOR SMALL SCREENS */}
          <div className="row-span-1 grid grid-cols-2 gap-8 border-our-yellow border-t-[0.5px] z-10 md:hidden">
            <div className="col-span-1 grid grid-rows-2">
              <p className="hidden md-block row-span-1 text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10">
                <span className="text-our-red">TEDx</span>NTUA
              </p>
            </div>
            <p className="px-12 row-span-2 col-span-2 md:col-span-1 md:row-span-1 text-slate-200 text-sm font-thin z-10 text-justify">
              This independent TEDx event is operated under license from TED and
              the auspices of ICCS This website is our latest version : 2024
            </p>
            {/* Nav links*/}
            <ul className="hidden md:grid col-span-1 grid-cols-2 grid-rows-2 z-10 mt-4 justify-center justify-items-center">
              <li>
                <Link
                  href="/"
                  className="text-white text-md font-bold hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="text-white text-md font-bold hover:underline"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-white text-md font-bold hover:underline"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-md font-bold hover:underline"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 w-[80%] mx-auto z-10 md:hidden">
            <SocialMediaFooter />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;
