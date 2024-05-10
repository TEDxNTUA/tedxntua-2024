const ModalContent = ({ name, datalist }) => {
  const entity = datalist.find((entity) => entity.fullname === name);
  // console.log(entity);
  if (!entity) {
    return <div>Not found</div>;
  }

  return (
    <>
      {/* Mobile version */}
      <div className="h-auto lg:hidden flex flex-col items-center justify-center my-7 w-[90%] mx-auto">
        <p className="text-2xl text-our-purple-100-200 font-bold italic underline underline-offset-8 pb-1 text-center">
          {entity.fullname}
        </p>
        {entity.type && (
          <p className="font-semibold italic pb-1 text-sm text-center">
            {entity.type}
          </p>
        )}
        <img
          className="h-[20vh] rounded-full shadow-lg border-4 border-white"
          src={entity.photo}
          alt={entity.fullname}
        />
        {entity.title && (
          <p className="pt-3 font-bold text-base text-center">{entity.title}</p>
        )}
        <p className="text-justify my-5 w-[95%] 4xl:w-[70%] mx-auto lg:text-lg text-sm max-h-[35vh] h-auto overflow-y-auto border border-our-yellow rounded p-2 flex justify-center">
          {entity.bio}
        </p>
        {entity.url.includes("linkedin") && (
          <a href={entity.url} target="_blank" rel="noopener noreferrer">
            <button className="text-[#0072b1] text-lg font-bold lg:mt-5 cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#0072b1] hover:text-white">
              LinkedIn
            </button>
          </a>
        )}
        {entity.url.includes("instagram") && (
          <a href={entity.url} target="_blank" rel="noopener noreferrer">
            <button className="text-[#E1306C] text-lg font-bold lg:mt-5 cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#E1306C] hover:text-white">
              Instagram
            </button>
          </a>
        )}
      </div>

      {/* Laptop version */}
      <div className="hidden lg:flex flex-row items-center justify-center my-7 h-auto w-[90%] mx-auto">
        <img
          className="h-[40vh] w-[40vh] rounded-full object-top object-cover shadow-lg border-4 border-white"
          src={entity.photo}
          alt={entity.fullname}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-our-purple-100-200 font-bold italic underline underline-offset-8 text-center">
            {entity.fullname}
          </p>
          {entity.type && (
            <p className="py-1 font-semibold italic text-center">
              {entity.type}
            </p>
          )}
          {entity.title && (
            <p className="pt-3 font-bold text-xl text-center">{entity.title}</p>
          )}

          <p className="text-justify my-5 w-[80%] 4xl:w-[70%] mx-auto max-h-[65vh] overflow-y-auto lg:text-base text-sm p-2">
            {entity.bio}
          </p>
          {entity.url.includes("linkedin") && (
            <a href={entity.url} target="_blank" rel="noopener noreferrer">
              <button className="text-[#0072b1] text-lg font-bold lg:mt-5 cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#0072b1] hover:text-white">
                LinkedIn
              </button>
            </a>
          )}
          {entity.url.includes("instagram") && (
            <a href={entity.url} target="_blank" rel="noopener noreferrer">
              <button className="text-[#E1306C] text-lg font-bold lg:mt-5 cursor-pointer border-black border rounded-md px-2 py-1 hover:bg-[#E1306C] hover:text-white">
                Instagram
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalContent;
