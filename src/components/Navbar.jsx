import logo from "../assets/lwb-portfolio-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
      <a href="#" onClick={(e) => {
            e.preventDefault();
            window.location.reload();
        }}
      >
        <img src={logo} alt="logo" />
      </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/liam-blake-985239225/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Liam-WB">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/liam_blake001/">
        <FaInstagram />
      </a>
    </div>
  </nav>
};

export default Navbar;