import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='bg-[#0a192f] pb-4 text-sm'>
        <div className='flex justify-center text-[#64ffda] pb-2'>
            <ul className='flex'>
                <li className=''>
                    <Link to="home"  smooth={true}  duration={500}>
                        Home 
                    </Link>
                </li>
                <span>|</span>
                <li className=''>
                    <Link to="about"  smooth={true}  duration={500}>
                        About 
                    </Link>
                </li>
                <span>|</span>
                <li className=''>
                    <Link to="skills"  smooth={true}  duration={500}>
                        Skills 
                    </Link>
                </li>
                <span>|</span>
                <li className=''>
                    <Link to="projects"  smooth={true}  duration={500}>
                        Projects 
                    </Link>
                </li>
                <span>|</span>
                <li className=''>
                    <Link to="work"  smooth={true}  duration={500}>
                        Work 
                    </Link>
                </li>
                <span>|</span>
                <li className=''>
                    <Link to="contact"  smooth={true}  duration={500}>
                        Contact 
                    </Link>
                </li>
            </ul>
        </div>
        <div className='flex justify-center text-[#0a886a]'>
            <p className="text-xs">&copy; Jan Caasi 2023. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
