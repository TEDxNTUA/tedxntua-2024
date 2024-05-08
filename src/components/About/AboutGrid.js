"use client";
import About from "./About";

export default function AboutGrid({ aboutlist }) {
  const filterSpeakersByType = (type) => {
    return aboutlist.filter((about) => about.type === type);
  };

  const getAboutTypes = () => {
    const types = new Set(); // Use a Set to store unique types
    aboutlist.forEach((about) => {
      if (about.type) {
        types.add(about.type);
      }
    });
    return Array.from(types); // Convert the Set back into an Array
  };
  const aboutTypes = getAboutTypes();
  return (
    <>
      {aboutlist.length === 0 && (
        <p className="text-our-purple-100 text-3xl font-extrabold pt-[30vh] items-center flex justify-center">
          {/* OUPS... NO SPEAKERS */}
          COMING SOON...
        </p>
      )}
      {aboutlist.length > 0 && (
        <div>
          {aboutTypes.map((type, sessionNum) => (
            <div key={sessionNum}>
              <div className="relative flex py-5 items-center w-10/12 mx-auto">
                <div className="flex-grow border-t border-our-purple-100"></div>
                <p className="overflow-hidden text-3xl mx-4 font-bold leading-6 text-our-purple-100">
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
                <div className="flex-grow border-t border-our-purple-100"></div>
              </div>
              <ul
                className={`flex flex-row flex-wrap gap-[1vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 items-center justify-center `}
              >
                {filterSpeakersByType(type).map((about, index) => (
                  <li key={index}>
                    <About
                      fullname={about.fullname}
                      linkedin={about.linkedin}
                      photo={about.photo}
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
