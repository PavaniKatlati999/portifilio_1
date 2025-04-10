import AboutImg from "../assets/aboutme.png";

export default function About() {
  const config = {
    line1: `I’m a passionate UI/UX Designer who lives and breathes pixels, coffee, and user empathy (not necessarily in that order). With expertise in Figma, Adobe XD, Illustrator, and Photoshop, I transform chaos into clean, intuitive interfaces. From sketching wireframes that make sense to prototyping journeys smoother than butter, I love making tech feel human—and delightful.`,
    line2: `Whether it's web or mobile, responsive or dark mode (yes, I love dark mode), I focus on creating designs that not only look good but also work beautifully. I sprinkle in accessibility (hello, WCAG), clear UX writing, and user research to make sure no button is left behind. Working with devs, PMs, and stakeholders is my jam—I’m basically fluent in “tech speak” and “client panic.”`,
    line3: `I’m always learning, testing, and iterating—because why settle for ‘meh’ when you can wow? My mission? To build experiences that make users smile and businesses grow. So, if you're looking for someone who can design with purpose, keep up with trends, and maybe crack a pun during meetings... I’m your designer!`,
  };

  const steps = [
    {
      // step: "Step 1",
      title: "How I work",
      desc: "/icons/step1.png",
      img: "/icons/Cool.png",
    },
    {
      step: "Step 1",
      title: "Project Discovery",
      desc: "I understand project needs, goals, and audience through discussions.",
    },
    {
      step: "Step 2",
      title: "Research & Analysis",
      desc: "I conduct in-depth research on markets, competitors, and users to shape the design strategy.",
    },
    {
      step: "Step 3",
      title: "Design Exploration",
      desc: "I create wireframes, mood boards, and UI concepts for a solid design foundation.",
    },
    {
      step: "Step 4",
      title: "UI/UX Design Creation",
      desc: "I create high-fidelity designs, user flows, and interactive prototypes, ensuring a seamless user experience.",
    },
    {
      step: "Step 5",
      title: "Design Handoff & Documentation",
      desc: "I prepare detailed design documentation and collaborate with developers to ensure smooth implementation.",
    },
    {
      step: "Step 6",
      title: "Development Support",
      desc: "I work closely with developers during implementation to maintain design consistency and quality.",
    },
    {
      step: "Step 7",
      title: "Post-Launch Optimization",
      desc: "I analyze user feedback and data to refine and improve the design for better user engagement.",
    },
  ];

  return (
    <section id="about" className="bg-black px-5 py-10">
      {/* Top About Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <img
            src={AboutImg}
            alt="About"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-white">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <h2 className="text-2xl font-bold mb-4">What I Do</h2>
          <p className="mb-5">{config.line1}</p>
          <p className="mb-5">{config.line2}</p>
          <p className="mb-5">{config.line3}</p>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((item, index) => (
          <div key={index} className="relative w-full h-[200px]">
            {/* Step Tag */}
            {index !== 0 && (
              <div className="absolute top-3 left-0 w-[96.88px] h-[31.74px] bg-[#FC3314] border border-black rounded-[7.5px] flex items-center justify-center z-10">
                <span className="text-white text-[13.36px] font-bold uppercase tracking-widest">
                  {item.step}
                </span>
              </div>
            )}

            {/* Main Card */}
            <div className="mt-4 w-full h-full bg-[#D9D9D9] border-[3px] border-[#FF8673] shadow-[3.34px_3.34px_0px_#FF8673] rounded-[13.36px] p-4 pt-10 flex flex-col items-start justify-between">
              <div>
                {index === 0 ? (
                  <h3 className="text-black text-center ml-6 text-[25px] font-bold mb-2">
                    {item.title}
                  </h3>
                ) : (
                  <h3 className="text-black text-[15px] font-bold mb-2">
                    {item.title}
                  </h3>
                )}
                {index !== 0 && (
                  <p className="text-[#141414] text-[10px] text-justify leading-[24px]">
                    {item.desc}
                  </p>
                )}
              </div>
              {/* Image only for Step 1 */}
              <div className="items-center justify-center">
                {index === 0 && item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="ml-9 w-28 h-24 object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
