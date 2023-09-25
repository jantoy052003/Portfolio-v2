import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import laravel from '../assets/laravel.png';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#26c2a8]'>Skills</p>
              <p className='py-4'> Here are some technologies that I am skilled at</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML logo" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="CSS logo" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={js} alt="JavaScript logo" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={reactLogo} alt="React logo" />
                  <p className='my-4'>ReactJS</p>
              </div>
              <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={laravel} alt="Laravel logo" />
                  <p className='my-4'>Laravel</p>
              </div>
              <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="Tailwind logo" />
                  <p className='my-4'>Tailwind</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Skills
