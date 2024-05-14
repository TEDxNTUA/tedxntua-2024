"use client";
import About from "./About";

export default function AboutGrid({ aboutlist }) {
  const filterPartnersByType = (teamUrl) => {
    return aboutlist.filter((about) => about.teamUrl === teamUrl);
  };

  const displayOrder = [
    "./meetTheTeam/CURATOR/THE CURAToR.jpg",
    "./meetTheTeam/IT/INFoRMATIoN & TECHNoloGY TEAM.jpg",
    "./meetTheTeam/DESIGN TEAM/DESIGN TEAM.jpg",
    "./meetTheTeam/FR/FUNDRAISING TEAM.jpg",
    "./meetTheTeam/EXP/EXPERIENCE & WoRKSHoPs TEAM.jpg",
    "./meetTheTeam/MEDIA/MEDIA & MARKETING TEAM.jpg",
    "./meetTheTeam/VENUE/VENUE ANd PRoDUCTIoN TEAM.jpg",
    "./meetTheTeam/SPEAKERS/SPEAKERS TEAM.jpg"
  ];

  return (
    <div className="max-w-[2080px] relative mx-auto flex flex-col gap-6 lg:gap-12 pb-12 ">
      {displayOrder.map(
        (
          teamUrl //map se kathe omada
        ) => (
          <div key={teamUrl}>
            <img className="pb-10" src={teamUrl} />
            <ul className="flex flex-row items-center gap-4 lg:gap-12 justify-center mx-auto flex-wrap w-[100%] md:w-[80%]">
              {filterPartnersByType(teamUrl).map(
                (
                  about,
                  index //kathe melos
                ) => (
                  <li
                    className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] 2xl:h-[300px] 2xl:w-[300px]"
                    key={index}
                  >
                    <About
                      photo={about.photo}
                      fun={about.funny}
                      link={about.linkedin}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
