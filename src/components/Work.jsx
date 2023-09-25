import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'KodeGo',
        duration: '3 months',
        details:
        'The bootcamp focused on full-stack web development with intensive coding activities that lead us in building our own project websites. Our team won the best capstone project with me providing the back-end codes and few frontend UIs'
    },
    {
        year: 2020,
        title: 'TDCX/ Apple',
        duration: '2 Years',
        details:
        'I served as a Tier 2 Technical Support Advisor for Apple and I handled Tier 1 escalation cases and consults. I was also part of the mentoring team who assisted and taught new employees and Tier 2 advisors'
    },
    {
        year: 2012,
        title: 'Management Trainee',
        duration: '3 Years',
        details:
        'My main task was to train new staff and made sure they adhere to the company`s quality standards by ensuring cleanliness of equipment and food hygiene is followed by all staff. I was also responsible for the daily operations of the the food stall from opening till closing.'
    },
]

const Work = () => {
    return (
        <div name='work' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 pt-56 md:pt-0 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#26c2a8]'>Work</p>
                    <p className='py-4'>Here are my past work experiences</p>
                </div>
                <div>
                    {data.map((item, id) => (
                        <WorkItem 
                            key={id} 
                            year={item.year} 
                            title={item.title} 
                            duration={item.duration} 
                            details={item.details} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
