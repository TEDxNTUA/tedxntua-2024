"use client";
import PerformerCard from "./PerformerCard";

export default function SpeakersGrid({ performerslist }) {
  // Filter speakers based on session
  const filterPerformersBySession = (session) => {
    return performerslist.filter((performer) => performer.session === session);
  };
  const findNumberOfSessions = (performerslist) => {
    // Initialize maxSession to a minimum value
    let maxSession = -10;
    // Loop through the array to find the maximum session number
    for (const performer of performerslist) {
      const sessionNumber = parseInt(performer.session);
      if (sessionNumber > maxSession) {
        maxSession = sessionNumber;
      }
    }
    return maxSession;
  };

  return (
    <>
      {performerslist.length === 0 && (
        <p className="text-our-purple text-3xl font-extrabold pt-[30vh] items-center flex justify-center">
          {/* OUPS... NO PERFOMERS */}
          COMING SOON...
        </p>
      )}
      {performerslist.length > 0 && (
        <div>
          {Array.from(
            { length: findNumberOfSessions(performerslist) },
            (_, sessionNum) => (
              <div key={sessionNum}>
                <div className="relative flex py-5 items-center w-10/12 mx-auto">
                  <div className="flex-grow border-t border-our-purple"></div>
                  <p className="overflow-hidden text-3xl mx-4 font-bold leading-6 text-our-purple">
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
                  <div className="flex-grow border-t border-our-purple"></div>
                </div>
                <ul
                  // className={`grid list-none gap-[1vh] lg:gap-10 grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 `}
                  className={`flex flex-row flex-wrap gap-[1vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 items-center justify-center `}
                >
                  {filterPerformersBySession((sessionNum + 1).toString()).map(
                    (performer, index) => (
                      <li key={index}>
                        <PerformerCard
                          fullname={performer.fullname}
                          photo={performer.photo}
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
