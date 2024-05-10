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
  ];

  return (
    <>
      <div className="relative">
        {displayOrder.map((type) => (
          <div key={type} className="top-0 bg-black z-10">
            <h2 className="text-5xl font-bold text-[#CFF301] text-center py-10">
              {type}
            </h2>
            <ul
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 lg:py-8`}
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
