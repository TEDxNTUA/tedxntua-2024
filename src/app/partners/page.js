import Partners from "@/components/Partners/Partners";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
import { PARTNERSLIST } from "../../../data/partners";
function PartnersPage() {
  return (
    <main>
      <div className="bg-[url('/background/background-phone.jpg')]  bg-cover">
        <PartnersGrid partnerslist={PARTNERSLIST} />
      </div>
    </main>
  );
}

export default PartnersPage;
