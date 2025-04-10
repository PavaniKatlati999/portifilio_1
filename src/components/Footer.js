import {
    AiOutlineTwitter,
    AiOutlineFacebook,
    AiOutlineLinkedin,
  } from "react-icons/ai";
  
  export default function Footer() {
    const config = {
      subtitle:
        "UX/UI Designer specializing in crafting intuitive web and mobile applications, as well as engaging landing page designs. Passionate about working on diverse projects that address real-world challenges.",
      social: {
        twitter: "https://twitter.com/jvlcode",
        facebook: "https://facebook.com/jvlcode",
        linkedin: "https://in.linkedin.com/company/jvl-code",
      },
    };
  
    return (
      <div className="py-6 bg-[#350700] text-white">
        <div className="flex justify-center items-center gap-6">
          <a href={config.social.twitter} target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter className="text-white hover:text-[#FC3314] text-2xl transition" />
          </a>
          <a href={config.social.facebook} target="_blank" rel="noopener noreferrer">
            <AiOutlineFacebook className="text-white hover:text-[#FC3314] text-2xl transition" />
          </a>
          <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin className="text-white hover:text-[#FC3314] text-2xl transition" />
          </a>
        </div>
      </div>
    );
  }
  