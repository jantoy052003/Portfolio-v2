import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-[#26c2a8]'>
        <li className='mb-10 ml-4 cursor-default'>
            <div className='absolute w-3 h-3 bg-[#26c2a8] rounded-full mt-.5 -left-1.5'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
                <span className='text-lg font-semibold text-white'>{title}</span>
                <span className='my-1 text-sm font-normal leading-non text-stone-400'>{duration}</span>
            </p>
            <p className='my-2 text-base font-normal'>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem
