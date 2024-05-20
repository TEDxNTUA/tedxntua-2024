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
    <div className="max-w-[2080px] relative mx-auto flex flex-col gap-6 lg:gap-12 pb-12 ">
      {displayOrder.map((type) => (
        <div key={type}>
          <h2 className="text-2xl md:text-5xl font-bold text-[#CFF301] text-center py-12 2xl:py-20">
            {type}
          </h2>

          {/* <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 justify-center items-center gap-8 lg:gap-16 mx-auto w-[90%] md:w-[80%]"> */}
          <ul className="flex flex-row flex-wrap justify-center items-center gap-8 lg:gap-16 mx-auto w-[90%] md:w-[80%]">
            {/* className={`flex flex-row flex-wrap lg:gap-20 justify-center py-4 lg:py-8`} */}
            {filterPartnersByType(type).map((partner, index) => (
              <li
                key={index}
                className="w-[128px] md:w-[180px] lg:w-[230px] 2xl:w-[240px] 3xl:w-[270px]"
              >
                <Partners
                  fullname={partner.fullname}
                  photo={partner.photo}
                  link={partner.website}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
