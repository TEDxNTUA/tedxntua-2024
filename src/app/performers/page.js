import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMERSLIST } from "../../../data/performers";

function Performes() {
  return (
    <main>
      <div>
        <img
          src="./performers/PERFORMERS_small.png"
          alt="performers_small"
          className="pb-5 block md:hidden min-w-[100%] h-auto"
        />

        <img
          src="./performers/PERFORMERS.png"
          alt="performers_small"
          className="pb-5 hidden md:block mx-auto max-w-[100%] h-auto"
        />
        <PerformersGrid performerslist={PERFORMERSLIST} />
      </div>
    </main>
  );
}

export default Performes;
