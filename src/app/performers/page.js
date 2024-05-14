import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMWORKSLIST } from "../../../data/performers";

function Performes() {
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
      <div className="pb-10 max-w-[2040px] mx-auto">
        <PerformersGrid performworkslist={PERFORMWORKSLIST} />
      </div>
    </main>
  );
}

export default Performes;
