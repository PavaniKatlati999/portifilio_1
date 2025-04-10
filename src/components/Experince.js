import beeginhere from "../assets/bee-gin here.png"

export default function Contact() {
  return (
    <section id="experience" className="flex flex-col bg-black items-center text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl mb-5 font-bold">Experience</h1>
          <p className="pb-5 text-center text-base sm:text-lg max-w-2xl">
            I bring your digital products to life through user research, design,
            and testing, creating seamless, impactful experiences.
          </p>
        </div>

        <div className="relative w-full flex flex-col gap-6 bg-black py-10">
          {/* Experience Card 1 */}
          <div className="w-full border border-[#FC3314] rounded-2xl px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
              <h2 className="text-white text-xl sm:text-2xl font-bold font-montserrat sm:max-w-[60%] leading-snug">
                Equinox Tech Solutions - UI / UX Designer
              </h2>
              <p className="text-white text-base sm:text-lg font-bold font-montserrat mt-2 sm:mt-0">
                Mar 2024 - Present
              </p>
            </div>
            <p className="text-white font-montserrat text-sm sm:text-base leading-relaxed">
              Led the design of the "AnySkill" educational app, delivering intuitive UX/UI with light and dark themes, enhancing user retention and engagement. Contributed to Infosys projects like "AI in Utilities" and "Browser-Based App SAP PPT," crafting interactive designs and animations to simplify complex technologies. Created impactful branding solutions, including banners, business cards, and social media content, showcasing creativity and strategic design expertise. Reduced design iteration time by 15% through effective collaboration with cross-functional teams.
            </p>
          </div>

          <img src={beeginhere} alt="Right Icon" className="items-end w-24 h-20 z-20 -mb-10 -mt-10" />


          {/* Experience Card 2 */}
          <div className="w-full border border-[#FC3314] rounded-2xl px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-4">
              <h2 className="text-white text-xl sm:text-2xl font-bold font-montserrat sm:max-w-[60%] leading-snug">
                Saraswat Co-Operative Bank Ltd. - Junior Officer
              </h2>
              <p className="text-white text-base sm:text-lg font-bold font-montserrat mt-2 sm:mt-0">
                Jan 2023 - Jan 2024
              </p>
            </div>
            <p className="text-white font-montserrat text-sm sm:text-base leading-relaxed">
              Streamlined banking processes as Junior Officer responsible for managing the counter section, handling customer interactions, and processing transactions. Skilled in opening various account types, including Current, Savings, and Fixed Deposit accounts. Ensured efficient service delivery and maintained customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
