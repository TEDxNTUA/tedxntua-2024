import Partners from "@/components/Partners/Partners";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import { PARTNERSLIST } from "../../../data/partners";
function PartnersPage() {
  return (
    <main className="max-w-[2040px] mx-auto">
      <div
        style={{
          backgroundImage: `url('./background/background-laptop-new.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <PartnersGrid partnerslist={PARTNERSLIST} />
      </div>
    </main>
  );
}

export default PartnersPage;
