import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMERSLIST } from "../../../data/performers";

function Performes() {
  return (
    <main>
      <div className="pb-10"> 
        <img
          src="./performers/performers_sm__.png"
          alt="performers_small"
          className="pb-5 block md:hidden min-w-[100%] h-auto"
        />

        <img
          src="./performers/performers.png"
          alt="performers_small"
          className="pb-5 hidden md:block mx-auto min-w-[100%] h-auto"
        />
        <PerformersGrid performerslist={PERFORMERSLIST} />
      </div>
    </main>
  );
}

export default Performes;
