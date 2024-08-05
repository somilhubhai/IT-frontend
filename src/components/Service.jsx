import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg_1 from "../assets/bg_1.jpg"
import cyberfirst from "../assets/cyberfirst.jpg";
import ai from "../assets/ai.jpg";
import AppSecond from "../assets/AppSecond.jpg";
import service from "../assets/service.jpg";
import AppFirst from "../assets/AppFirst.jpg";

const Service = () => {
  const text =
    `we specialize in delivering cutting-edge IT services to empower your business. \n From custom software development and strategic IT consulting.`;
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text]);

  const lines = displayedText.split("\n");

  return (
    <div className="overflow-hidden">
      <div>
        <img src={AppFirst} alt="first-img" className="h-screen w-full" />
        <h2 className="absolute text-sm md:text-2xl top-60 md:top-60 text-white typing-text">
          {lines.map((line, index) => (
            <p
              key={index}
              className="md:text-2xl whitespace-nowrap overflow-hidden border-r-2 border-black typing-text"
            >
              {line}
              {index !== lines.length - 1 && <br />}{" "}
            </p>
          ))}
        </h2>
      </div>
      <h2 className="md:text-4xl font-bold text-center mt-10">Services</h2>
      <div className="bg-gradient-to-tl from-slate-700 via-blue-600 to-teal-300 md:mt-10 p-6 md:flex">
        <img src={service} alt="services" className="rounded" />
        <div>
          <ul className="md:ml-16 list-disc text-white mt-7">
            <li>
              Software Development: Custom software solutions tailored to
              specific business requirements, including web and mobile
              application development, system integration, and maintenance.
            </li>
            <li className="mt-5">
              IT Consulting: Expert advice and strategic planning to help
              businesses leverage technology effectively. This includes IT
              strategy development, technology assessments, and digital
              transformation initiatives.
            </li>
            <li className="mt-5">
              Network and Infrastructure Services: Design, implementation, and
              management of robust IT infrastructures, including network setup,
              server management, and cloud services. Ensuring optimal
              performance, security, and scalability of IT systems.
            </li>
            <li className="mt-5">
              Training and Development: Providing training programs to enhance
              the IT skills of employees, ensuring they are equipped with the
              latest technology knowledge and best practices.
            </li>
          </ul>
          <button className="text-white bg-pink-400 rounded md:ml-48 mt-8 px-4 md:py-2 hover:bg-pink-300 hover:animate-pulse">
            <Link to="/contact"> Contact us</Link>
          </button>
        </div>
      </div>
      <div className="md:mt-10 flex-col">
        <h2 className="text-center text-3xl mt-5 font-bold md:text-4xl">
          About us
        </h2>
        <p className="text-center md:px-24 px-2 font-medium mt-5 md:mt-8">
          Students gain hands-on experience in each discipline, learning to
          create dynamic websites, user-friendly mobile applications, advanced
          AI models, and robust cybersecurity measures. These essential tech
          skills prepare them for rewarding careers in technology, where they
          contribute to solving complex challenges and driving innovation in a
          rapidly evolving digital world.
        </p>
      </div>
      <h2 className="font-bold text-center mt-7 text-4xl">What we Offer</h2>
      <div className="md:mt-16 mt-5 p-5 shadow-xl shadow-blue-500">
        <div className="md:flex">
          <img
            src={bg_1}
            alt="rbot"
            className="md:size-2/5 w-full  rounded-md"
          />
          <div className="md:ml-14 mt-5">
            <h2 className="font-bold text-2xl">Drones and Robotics</h2>
            <p className="font-medium mt-5">
              Drones and robotics represent a significant leap in technology,
              transforming various industries and daily life. Drones are widely
              used for aerial photography, delivery services, agriculture, and
              surveillance, offering unmatched precision and efficiency.
              Robotics, on the other hand, encompasses a broad range of
              applications from manufacturing automation to healthcare, enabling
              tasks to be performed with high accuracy and consistency.
              Together, drones and robotics are driving innovation, improving
              productivity, and creating new possibilities across multiple
              sectors.
            </p>
            <button className="mt-5 bg-blue-500 hover:bg-blue-400 hover:animate-pulse px-4 py-2 rounded text-white">
              <a href=".././DronesRobotics.html">Read more</a>
            </button>
          </div>
        </div>
        <div className="md:flex mt-14">
          <img
            src={cyberfirst}
            alt="cyber1"
            className="md:size-2/5 w-full rounded-md"
          />
          <div className="md:ml-14 mt-5">
            <h2 className="font-bold text-2xl">Cyber Analysis</h2>
            <p className="md:mt-5 font-medium mt-5">
              Cyber analytics plays a crucial role in todays digital landscape,
              enhancing security and operational efficiency across various
              industries. By leveraging advanced data analysis techniques, it
              identifies and mitigates cyber threats, ensuring the integrity and
              confidentiality of information systems. Cyber analytics helps
              organizations detect anomalies, predict potential attacks, and
              respond swiftly to incidents, thereby minimizing risks. This
              proactive approach to cybersecurity not only protects sensitive
              data but also supports compliance with regulatory standards,
              fostering a safer digital environment.
            </p>
            <button className="mt-5 bg-blue-500 hover:bg-blue-400 hover:animate-pulse px-4 py-2 rounded text-white">
              <a href=".././CyberAnalysis.html">Read more</a>
            </button>
          </div>
        </div>
        <div className="md:flex mt-14">
          <img
            src={AppSecond}
            alt="app1"
            className="md:size-2/5 w-full rounded-md"
          />
          <div className="ml-14 mt-5">
            <h2 className="font-bold text-2xl">Application Development</h2>
            <p className="md:mt-5 font-medium mt-5">
              App development is a dynamic field that drives innovation and
              connectivity in the digital age. It involves creating software
              applications for mobile devices, tablets, and computers, tailored
              to meet specific user needs. This process includes designing
              user-friendly interfaces, coding functionalities, and ensuring
              seamless performance across different platforms. App development
              enhances user engagement, supports business operations, and opens
              new avenues for customer interaction. By continually evolving with
              technological advancements, app development remains at the
              forefront of digital transformation, enabling businesses to reach
              wider audiences and deliver impactful experiences.
            </p>
            <button className="mt-5 bg-blue-500 hover:bg-blue-400 hover:animate-pulse px-4 py-2 rounded text-white">
              <a href=".././AppDev.html">Read more</a>
            </button>
          </div>
        </div>
        <div className="md:flex md:mt-14 mt-5">
          <img src={ai} alt="AI1" className="md:size-2/5 w-full rounded-md" />
          <div className="ml-14">
            <h2 className="font-bold text-2xl">AI Integration</h2>
            <p className="md:mt-5 font-medium mt-5">
              AI integration is revolutionizing various sectors by embedding
              artificial intelligence into existing systems to enhance
              functionality and decision-making. This process involves
              incorporating machine learning algorithms, natural language
              processing, and predictive analytics to automate tasks, provide
              insights, and improve user experiences. AI integration enables
              businesses to analyze vast amounts of data, streamline operations,
              and offer personalized services. As a result, organizations can
              achieve greater efficiency, innovate faster, and maintain a
              competitive edge in a rapidly evolving digital landscape.
            </p>
            <button className="mt-5 bg-blue-500 hover:bg-blue-400 hover:animate-pulse px-4 py-2 rounded text-white">
              <a href=".././ArtificialLearning.html">Read more</a>
            </button>
          </div>
        </div>
      </div>
      <h2 className="mt-20 text-3xl text-center mb-8 md:text-5xl bg-gradient-to-r from-slate-900 via-blue-900 to-pink-900 animate-pulse text-transparent bg-clip-text">
        Serving the best from XXXX years
      </h2>
    </div>
  );
};

export default Service;
