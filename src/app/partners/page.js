import Partners from "@/components/Partners/Partners";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
import { PARTNERSLIST } from "../../../data/partners";
function PartnersPage() {
  return (
    <main>
      <div>
        <PartnersGrid partnerslist={PARTNERSLIST} />
      </div>
    </main>
  );
}

export default PartnersPage;
