import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/Jan_logo3.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleclick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] bg-opacity-60 text-gray-300 z-[99]'>
            <div className='z-10'>
                <img src={Logo} alt="" style={{width: '90px'}} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex text-[#CCD6F6] '>
                <li className='hover:text-[#07f1e6]'>
                    <Link to="home"  smooth={true}  duration={500} id='navLinks'>
                        Home
                    </Link>
                </li>
                <li className='hover:text-[#07f1e6]'>
                    <Link to="about"  smooth={true}  duration={500} id='navLinks'>
                        About
                    </Link>
                </li>
                <li className='hover:text-[#07f1e6]'>
                    <Link to="skills"  smooth={true}  duration={500} id='navLinks'>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-[#07f1e6]'>
                    <Link to="projects"  smooth={true}  duration={500} id='navLinks'>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-[#07f1e6]'>
                    <Link to="work"  smooth={true}  duration={500} id='navLinks'>
                        Work
                    </Link>
                </li>
                <li className='hover:text-[#07f1e6]'>
                    <Link to="contact"  smooth={true}  duration={500} id='navLinks'>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleclick} className='md:hidden z-10 absolute right-14'>
                <Hamburger color='#64FFDA' toggled={nav} toggle={setNav}/>
            </div>

            {/* Mobile Menu */}
            <ul onClick={handleclick} className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] bg-opacity-95 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-[#07f1e6]'>
                    <Link onClick={handleclick} to="home"  smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-[#07f1e6]'>
                    <Link onClick={handleclick} to="about"  smooth={true}  duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-[#07f1e6]'>
                    <Link onClick={handleclick} to="skills"  smooth={true}  duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-[#07f1e6]'>
                    <Link onClick={handleclick} to="projects"  smooth={true}  duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-[#07f1e6]'>
                    <Link onClick={handleclick} to="work"  smooth={true}  duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-[#07f1e6]'>
                    <Link onClick={handleclick} to="contact"  smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Socials */}
            <div className='hidden lg:flex lg:fixed lg:flex-col lg:top-[35%] lg:right-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/jan-caasi-53ab30277/" target='blank'><FaLinkedin size={30}/> LinkedIn </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/jantoy052003" target='blank'><FaGithub size={30}/> Github </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:janmichaelcaasi@gmail.com" target="_blank"><HiOutlineMail size={30}/> Email </a>
                    </li> 
                    <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/jan-michael-caasi-resume.pdf" download="jan-michael-caasi-resume.pdf"><BsFillPersonLinesFill size={30}/> Resume </a>
                    </li> 
                </ul>
            </div>

        </div>
    )
}

export default Navbar
