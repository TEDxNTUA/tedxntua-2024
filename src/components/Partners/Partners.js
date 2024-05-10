"use client";

export default function Partners({ fullname, photo, link }) {
  const redirectToLink = () => {
    // Redirect to the specified link when clicked
    window.location.href = link;
  };

  return (
    <div
      className="flex flex-col bg-neutral-50 rounded-md border-[3px] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] border-our-yellow lg:border-black hover:border-our-yellow mx-auto h-full cursor-pointer"
      onClick={redirectToLink} // Call redirectToLink function on click
    >
      <div className="relative">
        <div className="flex flex-col rounded-sm justify-center items-center group">
          <img
            className="object-top object-cover group-hover:grayscale group-hover:blur-[5px] w-[28vh] h-[28vh] md:w-[36vh] md:h-[36vh]"
            src={photo}
            alt={fullname}
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className=" text-our-yellow bg-black bg-opacity-75 py-2 px-3 md:px-4 lg:px-6 rounded-lg font-semibold text-center text-base lg:text-2xl lg:h-fit 2xl:text-4xl">
              Learn More
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-2 grow lg:justify-evenly pr-[0.1vw]">
        <div className="px-3 md:px-4 lg:px-6 items-center">
          <h2 className="text-white py-2 md:py-2 font-semibold text-center text-lg lg:text-xl lg:h-fit 2xl:text-x">
            {fullname}
          </h2>
        </div>
      </div>
    </div>
  );
}
