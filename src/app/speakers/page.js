import SpeakersGrid from "@/components/Speakers/SpeakersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
function Speakers() {
  return (
    <main>
      <SpeakersGrid speakerslist={SPEAKERSLIST} />
    </main>
  );
}

export default Speakers;
