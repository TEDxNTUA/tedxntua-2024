function AboutTednTedx() {
  return (
    <div className="about"
    >
      <div className="text-white flex flex-col lg:flex-row lg:justify-between gap-[4rem] text-justify lg:text-left lg:w-[80%] mx-auto">
        <div className="left-col lg:width-[54%] w-[80%] lg:max-w-[50rem] mx-auto">
          <div className="title-wrapper mb-[2rem] text-[1rem] leading-[1.875rem]">
            <h2 className="text-[2.25rem] leading-[2.25rem] lg:text-[4.25rem] lg:leading-[4.25rem] 4xl:text-[6.25rem] 4xl:leading-[6.25rem] font-bold">
              About <span className="text-our-red">TED</span>
            </h2>
          </div>
          <div className="text-justify">
            <p className="text-[1rem] leading-[1.875rem] 4xl:text-[1.3rem] 4xl:leading-[2rem]">
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world's leading thinkers and
              doers to speak for 18 minutes or less. Many of these talks are
              then made available, free, at TED.com. TED speakers have included
              Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
              Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan
              and Daniel Kahneman.
              <br />
              <br />
              The annual TED Conference takes place each spring in Vancouver,
              British Columbia. TED's media initiatives include TED.com, where
              new TED Talks are posted daily; TED Translators, which provides
              subtitles and interactive transcripts as well as translations from
              volunteers worldwide; the educational initiative TED-Ed. TED has
              established The Audacious Project that takes a collaborative
              approach to funding ideas with the potential to create change at
              thrilling scale; TEDx, which supports individuals or groups in
              hosting local, self- organized TED-style events around the world,
              and the TED Fellows program, helping world-changing innovators
              from around the globe to amplify the impact of their remarkable
              projects and activities.
            </p>
            <div className="mt-6">
              Follow TED on{" "}
              <a
                href="https://twitter.com/TEDTalks"
                target="_blank"
                className="font-bold underline"
              >
                Twitter
              </a>{" "}
              or on{" "}
              <a
                href="https://www.facebook.com/TED"
                target="_blank"
                className="font-bold underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="right-col flex flex-col justify-end w-[80%] lg:w-[39%] lg:max-w-[30rem] mx-auto">
          <div className="title-wrapper mb-[2rem] text-[1rem] leading-[1.875rem]">
            <h2 className="text-[2.25rem] leading-[2.25rem] lg:text-[4.25rem] lg:leading-[4.25rem] font-bold 4xl:text-[6.25rem] 4xl:leading-[6.25rem]">
              About <span className="text-our-red">TEDx</span>
            </h2>
          </div>
          <p className="text-justify 4xl:text-[1.3rem] 4xl:leading-[2rem]">
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
            (Subject to certain rules and regulations.)
          </p>
          <div className="mt-6"></div>
          <a
            target="_blank"
            href="https://www.ted.com/about/programs-initiatives/tedx-program"
            className="text-our-red font-extrabold flex flex-row w-fit text-xl hover:cursor-pointer"
          >
            <p className="pr-3 hover:pr-6">TEDx PROGRAM </p>
            <img
              className="my-auto hover:pl-3"
              src="https://uploads-ssl.webflow.com/63e118320fe0876684cc169c/63e57c17119d6d2dca8a9624_red-arrow.svg"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              alt="Arrow"
            />
          </a>
        </div>
      </div>

      <div className="w-[100%] lg:width-[39%] lg:max-w-[28.75rem] lg:flex lg:flex-col lg:justify-end"></div>
    </div>
  );
}

export default AboutTednTedx;
