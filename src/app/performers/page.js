import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMERSLIST } from "../../../data/performers";

function Performes() {
  return (
    <main>
      <div className="pb-10 bg-[url('/background/background-phone.jpg')] lg:bg-[url('/background/background.jpg')] bg-cover">
        <p className="text-4xl md:text-6xl text-center p-10 text-our-yellow font-bold">
          Performers
        </p>
        <PerformersGrid performerslist={PERFORMERSLIST} />
      </div>
    </main>
  );
}

export default Performes;
