import PerformersGrid from "@/components/Performers/PerformersGrid";
import { PERFORMWORKSLIST } from "../../../data/performers";

function Performes() {
  return (
    <main>
      {/* <div className="pb-10 bg-[url('/background/background-phone.jpg')] lg:bg-[url('/background/background.jpg')] bg-cover"> */}
      <div
        style={{
          backgroundImage: `url('./background/background.jpg')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
      >
        <PerformersGrid performworkslist={PERFORMWORKSLIST} />
      </div>
    </main>
  );
}

export default Performes;
