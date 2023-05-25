import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <p className='sm:text-2xl text-2xl pb-4 text-[#64FFDA]'>Hi, my name is</p>
                <h1 className='sm:text-7xl text-4xl font-bold text-[#ccd6f6]'>Jan Michael Caasi</h1>
                <h2 className='flex sm:text-4xl text-2xl pt-4 text-[#64FFDA]'>I'm a 
                <TypeAnimation
                    sequence={[
                        'Full Stack Web Developer', 
                        2000, 
                        'Coder', 
                        2000, 
                        'Tech Enthusiast',
                        2000,
                        'Passionate Learner',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px'}}
                />
                </h2>
                <div className='pt-5'>
                    <button className='group flex items-center font-bold px-[10px] duration-500 rounded-md h-[50px] bg-[#64ffda] hover:text-[#26c2a8] hover:border-2 hover:border-[#26c2a8] hover:bg-transparent  '> 
                    <Link to="projects"  smooth={true}  duration={500}>
                        Check out my work
                    </Link> 
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span> 
                    </button>
                    
                </div>
            </div>
    </div>
  )
}

export default Home
