import BusyBee from "../assets/Busy bee.png"
export default function Skills() {
  const config = {
    email: "katlatipavani666@gmail.com",
    phone: "9849087129",
  };

  const tools = [
    { name: "Figma", icon: "/icons/Figma.png" },
    { name: "Framer", icon: "/icons/framer.png" },
    { name: "Spline", icon: "/icons/Spline.png" },
    { name: "Adobe XD", icon: "/icons/adobe.png" },
    { name: "Photoshop", icon: "/icons/photoshoot.png" },
    { name: "Sketch", icon: "/icons/Sketch.png" },
    { name: "FigJam", icon: "/icons/FigJam.png" },
    { name: "Canva", icon: "/icons/canva.png" },
    { name: "SVGator", icon: "/icons/svg.png" },
    { name: "Lottifiles", icon: "/icons/lotti.png" },
    { name: "Illustrator", icon: "/icons/illu.png" },
    { name: "Miro", icon: "/icons/miro.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
  ];

  return (
    <section
      id="Skills"
      className="flex flex-col bg-black px-5 py-32 text-white"
    >
      <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-5 font-bold">Core Design Skills</h1>
        <p className="pb-5 w-full sm:w-1/2">
          Discover my design services, including user interface, user
          experience, prototyping, and testing. Together, we can create
          outstanding digital experiences.
        </p>
      </div>
      <div className="bg-black py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: "/icons/icon1.png", // replace with actual path
              title: "Research & Strategy",
              desc: "I conduct design research, map user journeys and flows, and structure information to create user-centered design solutions.",
            },
            {
              icon: "/icons/icon2.png",
              title: "UI/UX Design",
              desc: "I craft intuitive mobile apps and responsive websites that deliver seamless, engaging user experiences.",
            },
            {
              icon: "/icons/icon3.png",
              title: "Prototyping & Testing",
              desc: "I create wireframes and prototypes to refine ideas early, and run usability tests to validate and improve designs.",
            },
            {
              icon: "/icons/icon4.png",
              title: "Visual & Interactive Design",
              desc: "I enhance products with animations, motion graphics, and high-converting landing pages to boost engagement.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center text-[#E4F6E2]"
            >
              {/* Icon */}
              <div className="w-[48px] h-[54px]  mb-4 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="font-bold text-[18px] leading-[130%] mb-2 font-montserrat">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-[16px] leading-[150%] font-montserrat">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div>
      <img src={BusyBee} alt="Busy Bee" className="w-24 h-20 ml-60 -mb-14" />

      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-5 font-bold">Technical Skills</h1>
        <p className="pb-5 w-full sm:w-1/2">
        Skilled in key design tools, I turn ideas into polished visuals using Figma, Illustrator, and more with precision and creativity.
        </p>
      </div>
      <div className="bg-black p-2">
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-7 max-w-5xl mx-auto">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="w-[100px] h-[100px] bg-[#D9D9D9] flex flex-col items-center justify-center text-center  mx-auto"
          >
            {/* Icon */}
            <div className="w-5 h-5 mb-3">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Label */}
            <p className="text-xs font-normal text-black font-sora capitalize">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
      </div>
      </div>

    </section>
  );
}
