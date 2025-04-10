export default function Skills() {
    
  
    const tools = [
      { name: "Figma", icon: "/icons/icon4.png", },
      { name: "Adobe XD", icon: "/icons/adobe-xd.svg" },
      { name: "Sketch", icon: "/icons/sketch.svg" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Illustrator", icon: "/icons/illustrator.svg" },
      { name: "InVision", icon: "/icons/invision.svg" },
      { name: "Framer", icon: "/icons/framer.svg" },
      { name: "Canva", icon: "/icons/canva.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Adobe XD", icon: "/icons/adobe-xd.svg" },
      { name: "Sketch", icon: "/icons/sketch.svg" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Illustrator", icon: "/icons/illustrator.svg" },
      { name: "InVision", icon: "/icons/invision.svg" },
    ];
  
    return (
      <section
        id="resume"
        className="flex flex-col bg-black px-5 py-32 text-white"
      >
        <div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-5 font-bold">Core Design Skills</h1>
          <p className="pb-5 w-1/2">
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
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-5 font-bold">Technical Skills</h1>
          <p className="pb-5 w-1/2">
          Skilled in key design tools, I turn ideas into polished visuals using Figma, Illustrator, and more with precision and creativity.
          </p>
        </div>
        <div className="bg-black py-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-6 max-w-7xl mx-auto">
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
        </div>
  
      </section>
    );
  }
  