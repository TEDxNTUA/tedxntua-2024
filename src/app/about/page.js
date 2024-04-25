import About from "@/components/About/About";
import AboutGrid from "@/components/About/AboutGrid";
import { ABOUTLIST } from "../../../data/about";
function AboutPage() {
  return (
    <main>
      <div>
        <span className="text-5xl text-our-pink font-extrabold flex justify-center my-10 tracking-widest">
          About
        </span>
        <AboutGrid aboutlist={ABOUTLIST} />
      </div>
    </main>
  );
}

export default AboutPage;
