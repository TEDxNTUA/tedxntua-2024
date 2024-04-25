import SpeakersGrid from "@/components/Speakers/SpeakersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
function Speakers() {
  return (
    <main>
      <div>
        <span className="text-5xl text-our-pink font-extrabold flex justify-center my-10 tracking-widest">
          All speakers
        </span>
        <SpeakersGrid speakerslist={SPEAKERSLIST} />
      </div>
    </main>
  );
}

export default Speakers;
