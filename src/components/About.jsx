import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom"
import bg_2 from "../assets/bg_2.jpg";
import team2 from "../assets/team2.jpg";
import teamImg from "../assets/teamImg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  gsap.fromTo(
    ".team",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".team",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);

  useEffect(() => {
    const elements = [
      para1Ref.current,
      para2Ref.current,
      para3Ref.current,
    ];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          x: 500,
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

  useGSAP(() => {
    gsap.from(".heading", {
      x: 200,
      delay: 0.5,
      opacity: 0,
    });
  });
  return (
    <div className="overflow-hidden">
      <div>
        <img src={bg_2} alt="bg-img" className="h-screen w-screen" />
        <h2 className="heading top-48 left-2 text-sm font-bold text-white absolute md:top-72 md:left-10 md:text-2xl">
          We are the Leading Company in IT sector dealing <br /> with 1 million
          customers
        </h2>
        <button className="top-64 left-10 bg-blue-400 hover:bg-blue-500 text-white px-4 md:py-2 rounded-md absolute md:top-96 md:left-48">
          <Link to="/contact">Get started</Link>
        </button>
      </div>
      <h1 className="text-center md:mt`-8 text-5xl overflow-hidden">
        About us
      </h1>
      <div className="md:flex md:mt-10 p-5 shadow-xl">
        <ul className="md:m-auto md:text-md list-disc md:pl-2 md:from-neutral-600">
          <li>
            Delivering our best from XXXX years in the industry and having a
            very strong customer base, we pride ourselves on our unparalleled
            customer satisfaction and retention rates.
          </li>
          <li className="md:mt-8">
            Our commitment to excellence has been recognized through numerous
            industry awards and accolades over the years.
          </li>
          <li className="md:mt-8">
            We consistently invest in the latest technologies and training for
            our team to ensure we remain at the forefront of innovation.
          </li>
          <li className="md:mt-8">
            Our dedicated support team is available around the clock, ensuring
            that your business operations run smoothly without any
            interruptions.
          </li>
          <li className="md:mt-8">
            With a robust portfolio of successful projects across various
            sectors, we have proven our capability to handle complex and diverse
            IT challenges.
          </li>
        </ul>
        <img src={teamImg} alt="team" className="md:size-3/5 rounded mt-4" />
      </div>
      <div className="md:mt-10">
        <h2 className="text-center text-3xl mt-5 font-bold md:text-5xl overflow-hidden">
          Our History
        </h2>
        <div className="md:mt-6 md:px-24 font-medium font-serif">
          <p ref={para1Ref} className="text-center para1 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            deserunt quidem odit at provident perspiciatis impedit perferendis,
            quibusdam laudantium? Deserunt impedit ducimus consequuntur
            laudantium aliquid illum in eaque! Alias, nam.
          </p>
          <p ref={para2Ref} className="text-center md:mt-10 para2 mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam at
            facere delectus dolores exercitationem alias autem tempore. Ipsam
            recusandae, voluptatem possimus, officia nihil vero dicta voluptas
            aperiam, id ut necessitatibus
          </p>
          <p ref={para3Ref} className="text-center md:mt-10 para3 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            culpa ut pariatur numquam cumque alias laborum enim obcaecati
            officia quasi! Aspernatur voluptates, nemo perferendis repellat
            reprehenderit beatae expedita odio quod.
          </p>
        </div>
      </div>
      <div className="md:flex shadow-xl md:p-4 md:mt-14 p-6">
        <img
          src={team2}
          alt="team2"
          className="md:size-2/5 md:mt-20 transform transition-transform delay-200 hover:md:translate-x-5"
        />
        <div>
          <span className="md:text-5xl ml-40 text-4xl font-bold underline md:ml-72 overflow-hidden">
            Legacy
          </span>
          <br />
          <ul className="md:mt-10 mt-5 md:ml-14 list-disc font-medium">
            <li>
              Innovation and Technological Advancements: Over the years, our
              company has consistently been at the forefront of technological
              innovation, pioneering new solutions and setting industry
              standards.
            </li>
            <li className="md:mt-4 mt-5">
              Client Success Stories: Our legacy is built on the success of our
              clients, with numerous case studies showcasing transformative IT
              solutions that have driven significant business growth and
              efficiency.
            </li>
            <li className="md:mt-4 mt-5">
              Industry Recognition: We have received numerous accolades and
              awards for our contributions to the IT industry, recognizing our
              commitment to excellence and innovation.
            </li>
            <li className="md:mt-4 mt-5">
              Industry Recognition: We have received numerous accolades and
              awards for our contributions to the IT industry, recognizing our
              commitment to excellence and innovation.
            </li>
            <li className="md:mt-4 mt-5">
              Sustainable Growth and Impact: Over the decades, we have achieved
              sustainable growth while making a positive impact on the
              communities we serve, demonstrating our commitment to corporate
              social responsibility and ethical business practices.
            </li>
          </ul>
          <button className="mt-5 bg-gradient-to-tr from-blue-700 to-blue-500 px-4 md:py-2 rounded md:mt-8 shadow-blue-600 shadow-xl md:ml-72 text-white hover:shadow-blue-600 hover:shadow-inner animate-bounce">
            <Link to="/contact"> Lets Start</Link>
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-center font-bold text-4xl mt-8 overflow-hidden">
          We Care
        </h2>
        <p className="text-center md:px-24 md:text-2xl text-xl px-10 mt-7">
          we care deeply about leveraging cutting-edge technology to empower
          businesses and improve lives.
          <br /> Our commitment to innovation, reliability, and exceptional
          customer service drives us to deliver tailored IT solutions that meet
          your unique needs.
        </p>
      </div>
      <h2 className="text-center mt-10 font-bold text-3xl team">
        Meet our team
      </h2>
      <div className="flex flex-col md:flex-row md:mt-14 mt-14 cards2">
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
    </div>
  );
};

export default About;
