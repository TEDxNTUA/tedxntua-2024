import SocialMediaItem from "./SocialMediaItem";

const socialMediaLinks = {
  twitter: "https://twitter.com/tedxntua?lang=en",
  facebook: "https://facebook.com/tedxntua",
  instagram: "https://instagram.com/tedxntua/?hl=en",
  linkedin: "https://linkedin.com/company/tedxntua",
  spotify:
    "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
  tiktok: "https://www.tiktok.com/@tedxntua",
};

function SocialMediaList() {
  const socialMediaItems = Object.keys(socialMediaLinks).map((key) => {
    const link = socialMediaLinks[key];
    let iconName = key;
    return (
      <SocialMediaItem
        key={key} // Make sure to include a unique key for each element in the array
        link={link}
        iconName={iconName}
        color={"white"}
        hoverColor={"red"}
      />
    );
  });
  return (
    <section className="text-center bottom-0">
      <div className="grid grid-cols-6 justify-center gap-2">
        {socialMediaItems}
      </div>
    </section>
  );
}

export default SocialMediaList;
