"use client";
import About from "./About";

export default function AboutGrid({ aboutlist }) {
  const filterPartnersByType = (team) => {
    return aboutlist.filter((about) => about.team === team);
  };

  const displayOrder = [
    "Curator",
    "Information & Technology",
    "Design",
    "Fundraising",
    "Experience & Workshops",
    "Media & Marketing",
    "Venue & Production",
    "Speakers"
  ];

  return (
    <>
      <div className="relative">
      <span className="text-5xl text-our-pink font-extrabold flex justify-center my-10 tracking-widest">
          Meet the team
        </span>
        {displayOrder.map((team) => (
          <div key={team} className="top-0 z-10">
            <h2 className="text-5xl font-bold text-white text-[#CFF301] text-center py-10">
              {team}
            </h2>
            <ul
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols- py-4 lg:py-8`}
            >
              {filterPartnersByType(team).map((about, index) => (
                <li
                  key={index}
                  className={`mb-24 lg:mb-24 `}
                >
                  <About
                    fullname={about.fullname}
                    photo={about.photo}
                    fun={about.funny}
                    link={about.linkedin}
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
