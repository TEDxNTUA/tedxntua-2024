import About from "@/components/About/About";
import AboutGrid from "@/components/About/AboutGrid";
import { ABOUTLIST } from "../../../data/about";
import AboutTednTedx from "@/components/About/AboutTednTedx";
import AboutInfo from "@/components/About/AboutInfo";

function AboutPage() {
  return (
    <main
      className="mt-[65px]"
      style={{
        backgroundImage: `url('./background/background-laptop-new.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-[#160B23]">
        <AboutGrid aboutlist={ABOUTLIST} />
      </div>
      <div>
        <div className="w-[100%] h-[calc(100vh-65px)] max-h-[900px] table py-28">
          <AboutTednTedx />
        </div>
        <div className="w-[100%] h-[calc(100vh-65px)] max-h-[400px] table mb-28">
          <AboutInfo />
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
