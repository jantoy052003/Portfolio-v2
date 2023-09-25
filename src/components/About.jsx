import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#26c2a8]'>
                        About
                    </p>
                </div>
                <div className='mt-8 max-w-[1000px] w-full grid sm:grid-cols-2 gap-20'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi there! Please take a look around</p>
                    </div>
                <div>
                    <p className='indent-6 text-justify'>My name is Jan Michael Caasi and I find coding challenging and fun at the same time. I have a tiny bit of a background on Java Programming Language and I am passionate about creating web apps that can help improve quality of life. </p>
                    <p className='indent-6 text-justify'>Aside from being a web developer, I spend my free time riding my mountain bike around town, nearby cities and local bike parks and trails.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
