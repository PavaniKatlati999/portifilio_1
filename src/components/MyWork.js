import websiteImg1 from '../assets/Project1.png';
import websiteImg2 from '../assets/Project2.png';
import websiteImg3 from '../assets/Project3.png';
import websiteImg4 from '../assets/Project4.png';
import websiteImg5 from '../assets/Project5.png';
import websiteImg6 from '../assets/Project6.png';
import linkIcon from "../assets/send.png"
import greatWork from "../assets/greatjob.png"
import ididit from "../assets/ididit.png"


export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        title: 'DineNest ',
        description: 'An Ecommerce Website built with the MERN Stack.',
        link: 'https://github.com/jvlcode/jvlcart',
      },
      {
        image: websiteImg2,
        title: 'Staff Sync ',
        description: 'A food e-commerce website like Swiggy, built with Angular & .NET.',
        link: 'https://github.com/jvlcode/food',
      },
      {
        image: websiteImg3,
        title: 'Stylum ',
        description: 'A basic blog website built with Next.js and MongoDB.',
        link: 'https://github.com/jvlcode/blog',
      },
      {
        image: websiteImg4,
        title: 'Pop - Up Design',
        description: 'An Ecommerce Website built with the MERN Stack.',
        link: 'https://github.com/jvlcode/jvlcart',
      },
      {
        image: websiteImg5,
        title: 'Infographic ',
        description: 'A food e-commerce website like Swiggy, built with Angular & .NET.',
        link: 'https://github.com/jvlcode/food',
      },
      {
        image: websiteImg6,
        title: 'Icon Style Collection',
        description: 'A basic blog website built with Next.js and MongoDB.',
        link: 'https://github.com/jvlcode/blog',
      },
      // Add more projects as needed
    ],
  };

  return (
    <section
      id="mywork"
      className="flex flex-col justify-center bg-black text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-5 font-bold">My Work</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-2/3">

          <p className="text-center text-sm">
            Discover my design services, including user interface, user
            experience, prototyping, and testing. Together, we can create
            outstanding digital experiences.
          </p>

          <img src={greatWork} alt="Right Icon" className="w-24 h-24 -mt-10" />
          <img src={ididit} alt="Left Icon" className="w-24 h-24 -mt-10" />

        </div>
      </div>

      <div className="w-full flex justify-center px-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-1 rounded-lg"
            >
              <img
                className="h-[200px] w-[300px] object-cover rounded-md"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
              <div className="text-center flex gap-6 px-5 py-5">
                <div>
                  <p className="text-start font-bold text-lg">
                    {project.title}
                  </p>

                  <p className="text-start text-sm mt-4 ">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-center mt-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src={linkIcon}
                      alt="View Project"
                      className="h-10 w-10 object-contain hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
