import SpeakersGrid from "@/components/Speakers/SpeakersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
function Speakers() {
  return (
    <main
      style={{
        backgroundImage: `url('./background/background-laptop-new.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[2040px] mx-auto">
        <SpeakersGrid speakerslist={SPEAKERSLIST} />
      </div>
    </main>
  );
}

export default Speakers;
