import React from 'react'

const ReactProjects = ({img, title, demoLink, codeLink}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-[#040C16] rounded-xl group hover:bg-gradient-to-r from-gray-600 to-[#0a192f]'>
      <img src={img} alt="/" className='duration-500 rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-xl font-bold text-white tracking-wider text-center'>
            {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <div className='flex justify-center '>
            <a href={demoLink} target="_blank">
              <button className='text-[#0a192f] mx-4 items-center font-bold px-[10px] duration-500 rounded-md h-[35px] bg-[#64ffda] hover:text-[#26c2a8] hover:border-2 hover:border-[#26c2a8] hover:bg-transparent'>Demo</button>
            </a>
            <a href={codeLink} target="_blank">
              <button className='text-[#0a192f] mx-4 items-center font-bold px-[10px] duration-500 rounded-md h-[35px] bg-[#64ffda] hover:text-[#26c2a8] hover:border-2 hover:border-[#26c2a8] hover:bg-transparent'>Code</button>
            </a>
        </div>
      </div>
    </div>
  )
}

export default ReactProjects
