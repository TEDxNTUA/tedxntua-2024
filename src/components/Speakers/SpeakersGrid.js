"use client";
import SpeakerCard from "./SpeakerCard";

export default function SpeakersGrid({ speakerslist }) {
  // Filter speakers based on session
  const filterSpeakersBySession = (session) => {
    return speakerslist.filter((speaker) => speaker.session === session);
  };

  const findNumberOfSessions = (speakerslist) => {
    // Initialize maxSession to a minimum value
    let maxSession = -10;
    // Loop through the array to find the maximum session number
    for (const speaker of speakerslist) {
      const sessionNumber = parseInt(speaker.session);
      if (sessionNumber > maxSession) {
        maxSession = sessionNumber;
      }
    }
    return maxSession;
  };

  return (
    <>
      {speakerslist.length === 0 && (
        <p className="text-our-purple text-3xl font-extrabold pt-[30vh] items-center flex justify-center">
          {/* OUPS... NO SPEAKERS */}
          COMING SOON...
        </p>
      )}
      {speakerslist.length > 0 && (
        <div>
          {Array.from(
            { length: findNumberOfSessions(speakerslist) },
            (_, sessionNum) => (
              <div key={sessionNum}>
                <img
                  src={`./speakers/sessions_num/session${
                    sessionNum + 1
                  }_small_new.jpg`}
                  alt={`${sessionNum + 1}`}
                  className="pb-5 block md:hidden"
                />

                <img
                  src={`./speakers/sessions_num/session${sessionNum + 1}.png`}
                  alt={`${sessionNum + 1}`}
                  className="hidden md:flex"
                />

                <ul
                  // className={`grid list-none gap-[1vh] lg:gap-10 grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 `}
                  className={`flex flex-row flex-wrap gap-[5vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 pb-10 lg:bg-zinc-950 items-center justify-center`}
                >
                  {filterSpeakersBySession((sessionNum + 1).toString()).map(
                    (speaker, index) => (
                      <li key={index}>
                        <SpeakerCard
                          fullname={speaker.fullname}
                          linkedin={speaker.linkedin}
                          photo={speaker.photo}
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
