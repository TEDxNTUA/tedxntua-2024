import SpeakersGrid from "@/components/Speakers/SpeakersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
function Speakers() {
  return (
    // <main className="bg-[url('/background/background-phone.jpg')] lg:bg-[url('/background/background.jpg')] bg-cover">
    <main
      style={{
        backgroundImage: `url('./background/background.jpg')`,
        backgroundSize: "cover", // Optional: adjust as needed
      }}
    >
      <SpeakersGrid speakerslist={SPEAKERSLIST} />
    </main>
  );
}

export default Speakers;
