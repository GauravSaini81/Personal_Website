import React from 'react';
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const [isToggle, setisToggle] = useState(false);

  const isClick = () => {
    setisToggle(!isToggle);
  }

  return (
    <div className="flex justify-between p-3 border border-b-1 drop-shadow-md bg-gray-50 sticky inset-y-0 inset-x-0 w-full top-0 left-0 z-10 cursor-pointer">
      <h1 className="p-5 text-xl font-bold text-gray-900 " onClick={scrollToTop}>
        Gaurav.dev
      </h1>
      
      <ul className={`flex flex-col md:flex-row md:flex ${isToggle ? 'visible' : 'hidden'} md:visible justify-center items-center text-gray-800`}>
        <li className="md:mr-5 mt-5 mb-5 md:pt-0 pt-20 text-xl font-bold hover:text-sky-600 cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={1000}>
            Home
          </ScrollLink>
        </li>
        <li className="md:mr-5 mt-5 mb-5  text-xl font-bold hover:text-sky-600 cursor-pointer">
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className="md:mr-5 mt-5 mb-5 text-xl font-bold hover:text-sky-600 cursor-pointer">
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li className="mt-5 mb-5 text-xl  font-bold hover:text-sky-600 cursor-pointer">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div className="md:hidden">
        {/* Hamburger Menu Icon */}
        <GiHamburgerMenu className='text-2xl mt-4' onClick={isClick} />
      </div>
    </div>
  );
};
export default Header;
