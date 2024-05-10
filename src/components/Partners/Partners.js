"use client";

export default function Partners({ fullname, photo, link }) {
  const redirectToLink = () => {
    // Redirect to the specified link when clicked
    window.location.href = link;
  };

  return (
    <div
      onClick={redirectToLink} // Call redirectToLink function on click
    >
      <div className="relative">
        <div className="flex flex-col rounded-sm justify-center items-center group hover:cursor-pointer">
          <img
            className="object-top object-cover group-hover:grayscale group-hover:blur-[5px] w-[40vh] h-[40vh] border-4 rounded-sm bg-slate-50 border-our-yellow"
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
          <h2 className="text-white py-2 md:py-2 font-semibold text-center text-lg md:text-2xl lg:h-fit 2xl:text-x">
            {fullname}
          </h2>
        </div>
      </div>
    </div>
  );
}
