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
        <p className="text-our-red text-3xl font-extrabold pt-[30vh] items-center flex justify-center">
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
                <div className="relative flex py-5 items-center w-10/12 mx-auto">
                  <div className="flex-grow border-t border-our-red"></div>
                  <p className="overflow-hidden text-3xl mx-4 font-bold leading-6 text-our-red">
                    {`Session ${sessionNum + 1}`
                      .split("")
                      .map((char, index) => (
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
                  // className={`grid list-none gap-[1vh] lg:gap-10 grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 `}
                  className={`flex flex-row flex-wrap gap-[1vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 items-center justify-center `}
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
