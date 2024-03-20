// import SocialMediaItem from "../SocialMedia/SocialMediaItem";

// const socialMediaLinks = {
//   x: "https://twitter.com/tedxntua?lang=en",
//   facebook: "https://facebook.com/tedxntua",
//   instagram: "https://instagram.com/tedxntua/?hl=en",
//   linkedin: "https://linkedin.com/company/tedxntua",
//   spotify:
//     "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
//   tiktok: "https://www.tiktok.com/@tedxntua",
// };

// function SocialMediaNav() {
//   return (
//     <div className="grid grid-cols-3 gap-3 justify-items-center w-[80%]">
//       <SocialMediaItem
//         link={socialMediaLinks.instagram}
//         iconName={"instagram"}
//         color={"white"}
//         hoverColor={"black"}
//       />
//       <SocialMediaItem
//         link={socialMediaLinks.facebook}
//         iconName={"facebook-f"}
//         color={"white"}
//         hoverColor={"black"}
//       />
//       <SocialMediaItem link={socialMediaLinks.tiktok} iconName={"tiktok"}   color={"white"}
//         hoverColor={"black"}/>
//       <SocialMediaItem link={socialMediaLinks.linkedin} iconName={"linkedin"}   color={"white"}
//         hoverColor={"black"}/>
//       <SocialMediaItem link={socialMediaLinks.spotify} iconName={"spotify"}   color={"white"}
//         hoverColor={"black"}/>
//       <SocialMediaItem link={socialMediaLinks.x} iconName={"x"}   color={"white"}
//         hoverColor={"black"}/>
//     </div>
//   );
// }

// export default SocialMediaNav;

import SocialMediaItem from "../SocialMedia/SocialMediaItem";

const socialMediaLinks = {
  x: "https://twitter.com/tedxntua?lang=en",
  facebook: "https://facebook.com/tedxntua",
  instagram: "https://instagram.com/tedxntua/?hl=en",
  linkedin: "https://linkedin.com/company/tedxntua",
  spotify:
    "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
  tiktok: "https://www.tiktok.com/@tedxntua",
  youtube: "https://www.youtube.com/@TEDxNTUA",
};

function SocialMediaNav() {
  const socialMediaItems = Object.keys(socialMediaLinks).map((key) => {
    const link = socialMediaLinks[key];
    let iconName = key;
    if (key === "x") iconName = "twitter"; // Change 'x' to 'twitter' to match the SocialMediaItem component's expected iconName
    return (
      <SocialMediaItem
        key={key} // Make sure to include a unique key for each element in the array
        link={link}
        iconName={iconName}
        color={"white"}
        hoverColor={"black"}
      />
    );
  });

  return (
    <div className="grid grid-cols-3 gap-3 justify-items-center w-[80%]">
      {socialMediaItems}
    </div>
  );
}

export default SocialMediaNav;
