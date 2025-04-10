import HeroImg from "../assets/profile.png";
import Bee from "../assets/This way.png";
// import { Link } from "react-router-dom";

import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
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
    <section className="flex flex-col md:flex-row items-center justify-between bg-black px-6 py-10 md:py-10  gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col gap-6 ml-20">
        <div>
          <h2 className="text-white text-sm tracking-wide uppercase">
            UI / UX Designer & Product Designer
          </h2>
          <h1 className="text-white text-5xl md:text-6xl font-hero-font leading-tight mt-2">
            Hi There, I’m <br />
            <span className="text-[#FC3314]">Rajeshwari C</span>
          </h1>
        </div>

        <p className="text-white text-sm md:text-base leading-relaxed w-11/12">
          {config.subtitle}
        </p>

        {/* Buttons & Bee */}
        <div className="flex items-start gap-4 flex-wrap">
          <a href="#contact">
            <button className="bg-[#D9D9D9] border border-[#FC3314] shadow-[3px_3px_0px_#FC3314] rounded-xl px-6 py-3 text-xs font-bold hover:bg-[#f8f8f8] transition-all duration-300">
              Hire me
            </button>
          </a>
          <a
            href="/Rajeshwari-CV.pdf"
            download
            className="bg-[#D9D9D9] border border-[#FC3314] shadow-[3.34px_3.34px_0px_#FC3314] rounded-xl px-6 py-3 text-xs font-bold hover:bg-[#f8f8f8] transition-all duration-300"
          >
            Download CV
          </a>

          <img src={Bee} alt="Direction Icon" className="w-32 h-20 -mt-4" />
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImg}
          alt="Profile"
          className="w-full max-w-5xl object-contain rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
