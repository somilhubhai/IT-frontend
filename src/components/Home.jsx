import { useGSAP } from "@gsap/react";
import careers from "../assets/careers.jpg"
import { Link } from "react-router-dom";
import ai from "../assets/ai.jpg";
import aisecond from "../assets/aisecond.jpg";
import gsap from "gsap";
import { useRef , useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const para4Ref = useRef(null);
  useEffect(() => {
    const elements = [para1Ref.current, para2Ref.current, para3Ref.current, para4Ref.current];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);
  gsap.fromTo(
    ".careers",
    {
      x: 500,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".careers",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      y: 300,
      scaleY: 3,
      delay: 0.5,
    });
    gsap.from(".btn1", {
      x: 150,
      opacity: 0,
      delay: 1,
    });
    gsap.from(".cards", {
      opacity: 0,
      x: 100,
      y: 100,
      delay: 2,
    });
    gsap.from(".card3", {
      opacity: 0,
      x: -100,
      delay: 2,
    });
  });
  return (
    <>
      {/* Hero banner */}
      <div>
        <img src={aisecond} className="w-full" alt="Hero-img" />
        <h2 className="font-bold md:text-3xl md:-mt-96 -mt-32 text-white md:leading-10 heading md:ml-6">
          All you need is Our Team for your
          <br /> All-In-One solution
        </h2>
        <button className="bg-gradient-to-br from-green-500 via-violet-200 to-blue-400 rounded md:px-4 md:py-2 px-2 md:mt-6 md:ml-10 mt-2 -ml-6 transform delay-200 transition-transform hover:scale-110 font-semibold btn1">
          <Link to="/contact">Contact us</Link>
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:mt-48 mt-24 cards">
        <div className="md:max-w-sm md:ml-20 md:rounded md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center bg-blue-900 text-white">
            <h2 className="font-bold text-center text-2xl mb-5">
              Introduction
            </h2>
            <span className="font-bold text-xl mb-2">
              XYZ Infotech pioneers solves your all IT problems, empowering
              schools, colleges, and enterprises with innovative efficiency
              enhancements.
            </span>
            <br />
            <button className="bg-violet-500 text-white px-5 py-1 mt-6 rounded hover:bg-violet-600">
              <Link to="/contact"> Contact us</Link>
            </button>
          </div>
        </div>
        <div className="md:max-w-sm md:ml-8 md:rounded md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center bg-blue-900 text-white">
            <h2 className="font-bold text-center text-2xl mb-5">Innovations</h2>
            <span className="font-bold text-xl mb-2">
              Innovations in technology are also significant achievements,
              including the development and launch of proprietary software or
              the implementation of cutting-edge.
            </span>
            <br />
            <button className="bg-violet-500 text-white px-5 py-1 mt-6 rounded hover:bg-violet-600">
              <Link to="/contact"> Contact us</Link>
            </button>
          </div>
        </div>
        <div className="md:max-w-sm md:ml-8 md:rounded md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center bg-blue-900 text-white">
            <h2 className="font-bold text-center text-2xl mb-5">Services</h2>
            <span className="font-bold text-xl mb-2">
              IT consulting helps businesses with IT strategy and planning,
              technology assessments, and digital transformation. Data services
              are provided.
            </span>
            <br />
            <button className="bg-violet-500 text-white px-5 py-1 mt-6 rounded hover:bg-violet-600">
              <Link to="/contact"> Contact us</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Cards ends */}
      <div className="flex flex-col justify-center items-center md:px-48">
        <h1 className="text-center mt-8 font-bold text-5xl">Why Choose Us?</h1>
        <p className="font-semibold text-center md:mt-10 md:px-28">
          Choosing our IT company ensures that you partner with a team of
          experts dedicated to providing innovative, reliable, and tailored
          solutions that meet your unique business needs. Our extensive range of
          services, from managed IT and cloud solutions to cybersecurity and
          software development, means we can handle all aspects of your IT
          infrastructure, allowing you to focus on your core business
          activities.
        </p>
      </div>
      <div className="img md:mt-10 md:flex p-5 shadow-2xl md:p-4 bg-gradient-to-r from-blue-800 via-slate-200 to-blue-400">
        <img src={ai} alt="choose-img" className="md:size-3/5 rounded img" />
        <div>
          <h2 className="text-right md:ml-72 mt-4 font-bold text-2xl text-white">
            Services Offered
          </h2>
          <hr className="md:ml-80 md:w-[13.9rem] md:h-1 hidden md:block md:bg-pink-200" />
          <ul className="mt-10 overflow-x-hidden md:ml-24 text-white md:font-bold md:leading-9 leading-6 md:text-xl text-md list-disc">
            <li className="transform transition-transform hover:translate-x-3 delay-200">
              Managed IT Services
            </li>
            <li className="transform transition-transform hover:translate-x-3">
              Cloud Services
            </li>
            <li className="transform transition-transform hover:translate-x-3">
              Cybersecurity Services
            </li>
            <li className="transform transition-transform hover:translate-x-3">
              Software Development
            </li>
            <li className="transform transition-transform hover:translate-x-3">
              Data Services
            </li>
          </ul>
          <button className="bg-blue-500 px-4 md:py-2 md:ml-52 mt-8 font-semibold hover:animate-pulse hover:bg-blue-700 rounded-lg shadow-lg text-white">
            <Link to="/contact"> Contact us</Link>
          </button>
        </div>
      </div>
      {/* careers start */}
      <div className="md:mt-16 shadow-lg shadow-slate-400 p-5 overflow-hidden flex bg-gradient-to-r from-slate-200 to-black">
        <img src={careers} alt="careers" className="rounded" />
        <div className="text-white">
          <h1 className="text-center font-bold text-3xl careers">Careers</h1>
          <ul className="md:ml-12 md:mt-5">
            <li ref={para1Ref}>
              <b>Software Development</b>: This role involves designing, coding,
              and maintaining software applications and systems. Professionals
              in this field need proficiency in programming languages such as
              Java, Python, and C#, as well as strong problem-solving skills and
              knowledge of software development methodologies.
            </li>
            <li ref={para2Ref} className="md:mt-4">
              <b>Network and Systems Administration</b>: Professionals in this
              role manage and support the company’s IT infrastructure, including
              networks, servers, and hardware. Key skills include knowledge of
              networking protocols, system configuration, and cybersecurity
              practices.
            </li>
            <li ref={para3Ref} className="md:mt-4  ">
              <b> Cybersecurity</b>: In this role, professionals protect the
              company’s information and systems from cyber threats and breaches.
              Essential skills include understanding security protocols, ethical
              hacking, threat analysis, and incident response.
            </li>
            <li ref={para4Ref} className="md:mt-4">
              <b> Data Science and Analytics</b>: This career path involves
              analyzing and interpreting complex data to inform business
              decisions. Required skills include expertise in statistical
              analysis, machine learning, data visualization, and tools like
              SQL, R, and Python.{" "}
            </li>
          </ul>
          <button className="bg-blue-700 px-4 md:py-2 md:ml-24 mt-8 rounded hover:bg-blue-500">
            <Link to="/contact"> Contact us</Link>
          </button>
        </div>
      </div>
      {/* careers div end */}
      <h1 className="text-center font-bold md:text-3xl font-serif md:mt-8">
        Meet our valuable Employees
      </h1>
      <div className="flex flex-col md:flex-row md:mt-14 mt-24 cards2">
        <div className="card3 md:max-w-sm md:ml-20 md:rounded md:max-h-fit md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center text-gray-500 tansform transition-transform delay-200 md:hover:scale-110">
            <span className="font-bold text-xl mb-2">
              Customizing enterprise robotics solutions, optimizing efficiency
              and productivity with advance automation.
            </span>
            <img src="" alt="person1" className="rounded-[50%] h-24 md:mt-6" />
            <p>XYZ</p>
            <p className="font-bold">Teams Executive</p>
          </div>
        </div>
        <div className="card3 md:max-w-sm md:ml-8 md:max-h-fit md:rounded md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center text-gray-500 tansform transition-transform delay-200 md:hover:scale-110">
            <span className="font-bold text-xl mb-2">
              Driving educational robotics, kits, fostering STEM learning
              through hands- on experiences.
            </span>
            <img src="" alt="person1" className="rounded-[50%] h-24 md:mt-6" />
            <p>XYZ</p>
            <p className="font-bold">Teams Executive</p>
            <br />
          </div>
        </div>
        <div className="card3 md:max-w-sm md:ml-8 md:rounded md:max-h-fit md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center text-gray-500 tansform transition-transform delay-200 md:hover:scale-110">
            <span className="font-bold text-xl mb-2">
              Lead the charge in innovative robotics solutions, shaping the
              future of technology integration.
            </span>
            <img src="" alt="person1" className="rounded-[50%] h-24 md:mt-6" />
            <p>XYZ</p>
            <p className="font-bold">Robotics Head</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mt-12 mt-24 cards2">
        <div className="card3 md:max-w-sm md:ml-20 md:rounded md:max-h-fit md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center text-gray-500 tansform transition-transform delay-200 md:hover:scale-110">
            <span className="font-bold text-xl mb-2">
              Lead initiative app development projects, delivering
              user-friendly, high performance applications tailored to specific
              client needs.
            </span>
            <img src="" alt="person1" className="rounded-[50%] h-24 md:mt-6" />
            <p>XYZ</p>
            <p className="font-bold">Web Programming head</p>
          </div>
        </div>
        <div className="card3 md:max-w-sm md:ml-8 md:rounded md:max-h-fit md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center text-gray-500 tansform transition-transform delay-200 md:hover:scale-110">
            <span className="font-bold text-xl mb-2">
              Develop and implement AI systems that enhance productivity,
              streamline operations, and provide data-driven insights.
            </span>
            <img src="" alt="person1" className="rounded-[50%] h-24 md:mt-6" />
            <p>XYZ</p>
            <p className="font-bold">AI Executive</p>
          </div>
        </div>
        <div className="card3 md:max-w-sm md:ml-8 md:rounded md:max-h-fit md:overflow-hidden md:shadow-lg md:relative mb-4 md:mb-0">
          <div className="px-6 py-10 justify-center items-center text-gray-500 tansform transition-transform delay-200 md:hover:scale-110">
            <span className="font-bold text-xl mb-2">
              Develop and implement AI systems that enhance productivity,
              streamline operations, and provide data-driven insights.
            </span>
            <img src="" alt="person1" className="rounded-[50%] h-24 md:mt-6" />
            <p>XYZ</p>
            <p className="font-bold">AI Executive</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
