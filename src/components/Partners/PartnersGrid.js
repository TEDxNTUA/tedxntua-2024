"use client";
import Partners from "./Partners";

export default function PartnersGrid({ partnerslist }) {
  const filterPartnersByType = (type) => {
    return partnerslist.filter((partner) => partner.type === type);
  };

  const displayOrder = [
    "Platinum Sponsors",
    "Grand Sponsors",
    "Partners",
    "Supporters",
    "Αποκλειστικός Χορηγός Αερομεταφορών",
  ];

  return (
    <>
      <div className="relative">
        {displayOrder.map((type) => (
          <div key={type} className="top-0 z-10 w-10/12 mx-auto">
            <h2 className="text-5xl font-bold text-[#CFF301] text-center py-10">
              {type}
            </h2>
            <ul
              className={`flex flex-row flex-wrap lg:gap-20 justify-center py-4 lg:py-8`}
            >
              {filterPartnersByType(type).map((partner, index) => (
                <li
                  key={index}
                  className={`mb-24 lg:mb-24 ${
                    type === "Supporters" ? "lg:col-span-1" : ""
                  }`}
                >
                  <Partners
                    fullname={partner.fullname}
                    photo={partner.photo}
                    link={partner.url}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
