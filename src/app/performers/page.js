import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMWORKSLIST } from "../../../data/performers";

function Performes() {
  return (
    <main>
      <div
        className="pb-10"
        style={{
          backgroundImage: `url('./background/background-laptop-new.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <PerformersGrid performworkslist={PERFORMWORKSLIST} />
      </div>
    </main>
  );
}

export default Performes;
