import { PERFORMERSLIST } from "../../../data/performers";
const PerformerModal = ({ nameperformer }) => {
  const performer = PERFORMERSLIST.find(
    (performer) => performer.fullname === nameperformer
  );
  console.log(performer);
  console.log({ nameperformer });
  if (!performer) {
    return <div>Performer not found</div>;
  }

  return (
    <>
      {/* Mobile version */}
      <div className="h-auto md:hidden flex flex-col items-center justify-center my-7 w-[90%] mx-auto">
        <p className="text-2xl text-our-red font-bold italic underline underline-offset-8">
          {performer.fullname}
        </p>
        <p className="py-2">Titlos: {performer.fullname}</p>
        <img
          className="h-[20vh] rounded-full shadow-lg border-4 border-white"
          src={performer.performer_photo}
          alt={performer.fullname}
          width={450}
          height={450}
        />
        <p>{performer.speciality}</p>

        <p className="text-justify py-5 w-[80%] 4xl:w-[70%] mx-auto lg:text-lg text-sm">
          {performer.bio}
        </p>
        <a
          href={performer.socialMediaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-[#eb0028] text-lg font-bold lg:mt-5 cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#eb0028] hover:text-white">
            Instagram
          </button>
        </a>
      </div>

      {/* Laptop version */}
      <div className="hidden md:flex flex-row items-center justify-center my-7 h-auto w-[90%] mx-auto">
        <img
          className="h-[40vh] rounded-full shadow-lg border-4 border-white"
          src={performer.performer_photo}
          alt={performer.fullname}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-our-red font-bold italic underline underline-offset-8">
            {performer.fullname}
          </p>
          {/* <p className="py-2">Titlos: {performer.fullname}</p> */}

          <p className="text-justify py-5 w-[80%] 4xl:w-[70%] mx-auto lg:text-base text-sm">
            {performer.bio}
          </p>
          <a
            href={performer.socialMediaUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-[#eb0028] text-lg font-bold lg:mt-5 cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#eb0028] hover:text-white">
              Instagram
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PerformerModal;
