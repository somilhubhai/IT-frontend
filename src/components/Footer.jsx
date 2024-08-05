import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="md:flex flex-col bg-blue-800 h-96 md:mt-14 md:p-24 text-white px-5 py-4">
        <img src="" alt="logo" />
        <h2>XYZ</h2>
        <hr className="mt-10" />
        <div className="flex">
          <ul className="list-disc md:ml-10">
            <li className="mt-3">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="mt-3">
              <a href="/">Terms and conditions</a>
            </li>
            <li className="mt-3">
              <a href="/">Refund Policy</a>
            </li>
          </ul>
          <div className="flex md:ml-60 md:mt-3">
            <h2>
              Subscribe to our Email: <b>xyxy@gmail.com</b>
            </h2>
            <a href="https://github.com/somilhubhai/" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="md:ml-32 "
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="md:ml-4 ml-4"
              />
            </a>
            <a href="https://x.com/?lang=en" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                className="md:ml-3 ml-4"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
