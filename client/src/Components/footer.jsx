import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const adjustFooter = () => {
      const footer = document.getElementById("main-footer");
      if (footer) {
        const bodyHeight = document.body.clientHeight;
        const windowHeight = window.innerHeight;
        if (bodyHeight < windowHeight) {
          footer.classList.add("absolute", "bottom-0", "w-full");
        } else {
          footer.classList.remove("absolute", "bottom-0", "w-full");
        }
      }
    };

    adjustFooter();
    window.addEventListener("resize", adjustFooter);
    return () => window.removeEventListener("resize", adjustFooter);
  }, []);
  return (
    <footer id="main-footer" className="bg-zinc-900 text-white p-4">
      <div className="container mx-auto text-center text-xs">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/juan-carlos-mondalgo-tapia-348147251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/Jmond544"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/juancarlos.mondalgotapia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Juan Mondalgo. All rights reserved.</p>
        <p>
          Contact information:
          <a
            href="mailto:jmondalgotapia@gmail.com"
            className="hover:text-blue-400 transition duration-200"
          >
            {" "}
            jmondalgotapia@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
