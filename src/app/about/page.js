import About from "@/components/About/About";
import AboutGrid from "@/components/About/AboutGrid";
import { ABOUTLIST } from "../../../data/about";
import AboutTednTedx from "@/components/About/AboutTednTedx";
import AboutInfo from "@/components/About/AboutInfo";

function AboutPage() {
  return (
    <main>
      <div className="bg-[#160B23]">
        <AboutGrid aboutlist={ABOUTLIST} />
        <div
          className="1st-scroll bg-fixed w-[100%] h-[calc(100vh-65px)] max-h-[900px] table py-28"
          style={{
            backgroundImage: `url('./background/background.jpg')`,
            backgroundSize: "cover", // Optional: adjust as needed
          }}
        >
          <AboutTednTedx />
        </div>
        <div
          className="1st-scroll bg-fixed w-[100%] h-[calc(100vh-65px)] max-h-[400px] table  mb-28"
          style={{
            backgroundImage: `url('./background/background.jpg')`,
            backgroundSize: "cover", // Optional: adjust as needed
          }}
        >
          <AboutInfo />
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
