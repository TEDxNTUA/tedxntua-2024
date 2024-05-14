export default function AboutInfo() {
  return (
    <>
      <div className="text-white flex flex-col lg:flex-row lg:justify-between gap-[4rem] text-justify lg:text-left lg:w-[80%] mx-auto pb-12">
        <div className="right-col flex flex-col justify-end w-[80%] lg:w-[39%] lg:max-w-[30rem] mx-auto">
          <div className="title-wrapper mb-[2rem] text-[1rem] leading-[1.875rem]">
            <h2 className="text-[2.25rem] leading-[2.25rem] lg:text-[4.25rem] lg:leading-[4.25rem] 4xl:text-[6.25rem] 4xl:leading-[6.25rem] font-bold">
              About <span className="text-our-red">TEDxNTUA</span>
            </h2>
          </div>
          <p className="text-justify 4xl:text-[1.3rem] 4xl:leading-[2rem]">
            TEDxNTUA is a conference that features talks on the topics of
            popular science, art, and social issues, stories that can inspire,
            as well as intriguing workshops and performances. It runs under the
            auspices of the National Technical University of Athens, Greece
            (NTUA) and is primarily aimed at the university community, but also
            at the wider student and local communities of Athens.
          </p>
        </div>{" "}
      </div>
    </>
  );
}
