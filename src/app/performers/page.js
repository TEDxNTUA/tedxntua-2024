import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMERSLIST } from "../../../data/performers"; 

function Performes() {
  return (
    <main>
      <div>
        <span className="text-5xl text-our-pink font-extrabold flex justify-center my-10 tracking-widest">
          All Performers
        </span>
        <PerformersGrid performerslist={PERFORMERSLIST} />
      </div>
    </main>
  );
}

export default Performes;
