import SocialMediaItem from "../SocialMedia/SocialMediaItem";

const socialMediaLinks = {
  twitter: "https://twitter.com/tedxntua?lang=en",
  facebook: "https://facebook.com/tedxntua",
  instagram: "https://instagram.com/tedxntua/?hl=en",
  linkedin: "https://linkedin.com/company/tedxntua",
  spotify:
    "https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",
  tiktok: "https://www.tiktok.com/@tedxntua",
  youtube: "https://www.youtube.com/@TEDxNTUA",
};

function SocialMediaFooter() {
  return (
    <div className="grid grid-cols-6 gap-3 justify-items-center">
      <SocialMediaItem
        link={socialMediaLinks.instagram}
        iconName={"instagram"}
        color={"black"}
        hoverColor={"white"}
      />
      <SocialMediaItem
        link={socialMediaLinks.facebook}
        iconName={"facebook-f"}
        color={"black"}
        hoverColor={"white"}
      />
      <SocialMediaItem
        link={socialMediaLinks.tiktok}
        iconName={"tiktok"}
        color={"black"}
        hoverColor={"white"}
      />
      <SocialMediaItem
        link={socialMediaLinks.linkedin}
        iconName={"linkedin"}
        color={"black"}
        hoverColor={"white"}
      />
      <SocialMediaItem
        link={socialMediaLinks.spotify}
        iconName={"spotify"}
        color={"black"}
        hoverColor={"white"}
      />
      <SocialMediaItem
        link={socialMediaLinks.youtube}
        iconName={"youtube"}
        color={"black"}
        hoverColor={"white"}
      />
    </div>
  );
}

export default SocialMediaFooter;
