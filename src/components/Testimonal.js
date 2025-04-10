import AboutImg from "../assets/Image.png";
import AboutImg1 from "../assets/image2.png";

export default function Contact() {
  return (
    <section
      id="testimonials"
      className="flex flex-col bg-black text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-5 font-bold">Testimonials</h1>
        <p className="pb-5 w-2/3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex gap-5 items-start justify-center flex-wrap">
        {/* Left Column with Two Hero Boxes */}
        <div className="flex flex-col gap-5">
          <div className="bg-[#181818] w-full sm:w-[500px]  flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow rounded-lg text-lg text-black font-semibold">
            <img src={AboutImg} alt="About" className="w-56 h-56" />
            <div>
              <p className="font-bold text-white">
                “Good Dreams for lorem ipsum”
              </p>
              <p className="text-sm font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>

          <div className="bg-[#181818] w-full sm:w-[500px]  flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow text-lg text-black font-semibold">
            <div className="flex flex-col bg-[#181818]">
              <p className="font-bold text-white">
                “Good Dreams for lorem ipsum”
              </p>
              <p className="text-sm font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
            <img src={AboutImg1} alt="About" className="w-56 h-56" />
          </div>
        </div>

        {/* Right Tall Hero Box */}
        <div className="bg-[#181818] sm:w-[250px] h-[470px] flex flex-col items-center gap-4 shadow  text-lg text-black font-semibold">
          <img src={AboutImg} alt="About" className="w-64 h-56 " />
          <p className="font-bold text-center text-white">
            “Good Dreams for lorem ipsum”
          </p>
          <p className="text-sm w-48 font-normal text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
    </section>
  );
}
