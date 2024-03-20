import Partners from "./Partners";

export default function PartnersGrid({ speakerslist }) {
  return (
    <>
      <div className="relative flex py-5 items-center w-10/12 mx-auto">
        <div className="flex-grow border-t border-our-red"></div>
        <div className="flex-grow border-t border-our-red"></div>
      </div>
      <ul
        // className={`grid list-none gap-[1vh] lg:gap-10 grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 `}
        className={`flex flex-col lg:flex-row gap-[1vh] lg:gap-10 w-10/12 mx-auto z-1 rounded-md lg:p-10 lg:bg-zinc-950 items-center justify-center `}
      >
        {speakerslist.map((speaker) => (
          <Partners fullname={speaker.fullname} photo={speaker.photo} />
        ))}
      </ul>
    </>
  );
}
