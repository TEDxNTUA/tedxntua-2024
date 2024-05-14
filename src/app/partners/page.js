import Partners from "@/components/Partners/Partners";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import { PARTNERSLIST } from "../../../data/partners";
function PartnersPage() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url('./background/background-phone.jpg')`,
          backgroundSize: "cover", // Optional: adjust as needed
        }}
      >
        <PartnersGrid partnerslist={PARTNERSLIST} />
      </div>
    </main>
  );
}

export default PartnersPage;
