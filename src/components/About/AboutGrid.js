"use client";
import About from "./About";

export default function AboutGrid({ aboutlist }) {
  const filterPartnersByType = (teamUrl) => {
    return aboutlist.filter((about) => about.teamUrl === teamUrl);
  };

  const displayOrder = [
    "/meetTheTeam/CURATOR/THE CURAToR.jpg",
    "/meetTheTeam/IT/INFoRMATIoN & TECHNoloGY TEAM.jpg",
    "/meetTheTeam/DESIGN TEAM/DESIGN TEAM.jpg",
    "/meetTheTeam/FR/FUNDRAISING TEAM.jpg",
    "/meetTheTeam/EXP/EXPERIENCE & WoRKSHoPs TEAM.jpg",
    "/meetTheTeam/MEDIA/MEDIA & MARKETING TEAM.jpg",
    "/meetTheTeam/VENUE/VENUE ANd PRoDUCTIoN TEAM.jpg",
    "/meetTheTeam/SPEAKERS/SPEAKERS TEAM.jpg"
  ];

  return (
    <>
      <div className="relative">
      {/* <span className="text-5xl text-our-pink font-extrabold flex justify-center my-10 tracking-widest">
          Meet the team
        </span> */}
        {displayOrder.map((teamUrl) => (
          <div key={teamUrl} className="top-0 z-10">
            <img
              className={'pb-10'}
              src={teamUrl}
            />
            <ul
              // className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols- py-4 lg:py-8`}
              className={'flex flex-wrap items-center justify-center'}
            >
              {filterPartnersByType(teamUrl).map((about, index) => (
                <li
                  key={index}
                  className={`mb-24 lg:mb-24 `}
                >
                  <About
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
