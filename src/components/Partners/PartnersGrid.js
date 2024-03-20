"use client";
import Partners from "./Partners";

export default function PartnersGrid({ partnerslist }) {
  const filterSpeakersByType = (type) => {
    return partnerslist.filter((partner) => partner.type === type);
  };

  const getPartnerTypes = () => {
    const types = new Set(); // Use a Set to store unique types
    partnerslist.forEach((partner) => {
      if (partner.type) {
        types.add(partner.type);
      }
    });
    return Array.from(types); // Convert the Set back into an Array
  };
  const partnerTypes = getPartnerTypes();
  return (
    <>
      {partnerslist.length === 0 && (
        <p className="text-our-red text-3xl font-extrabold pt-[30vh] items-center flex justify-center">
          {/* OUPS... NO SPEAKERS */}
          COMING SOON...
        </p>
      )}
      {partnerslist.length > 0 && (
        <div>
          {partnerTypes.map((type, sessionNum) => (
            <div key={sessionNum}>
              <div className="relative flex py-5 items-center w-10/12 mx-auto">
                <div className="flex-grow border-t border-our-red"></div>
                <p className="overflow-hidden text-3xl mx-4 font-bold leading-6 text-our-red">
                  {`${type}`.split("").map((char, index) => (
                    <span
                      className="animate-text-reveal inline-block"
                      key={`${char}-${index}`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </p>
                <div className="flex-grow border-t border-our-red"></div>
              </div>
              <ul
                className={`flex flex-row flex-wrap gap-[1vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 items-center justify-center `}
              >
                {filterSpeakersByType(type).map((partner, index) => (
                  <li key={index}>
                    <Partners
                      fullname={partner.fullname}
                      linkedin={partner.linkedin}
                      photo={partner.photo}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
