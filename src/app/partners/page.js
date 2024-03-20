import Partners from "@/components/Partners/Partners";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import { SPEAKERSLIST } from "../../../data/speakers";
function PartnersPage() {
  return (
    <main>
      <div>
        <span className="text-5xl text-red-500 font-extrabold flex justify-center my-10 tracking-widest">
          All Partners
        </span>
        <PartnersGrid speakerslist={SPEAKERSLIST} />
      </div>
    </main>
  );
}

export default PartnersPage;
