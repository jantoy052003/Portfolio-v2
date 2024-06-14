import React from 'react'
import ReactProjects from './ReactProjects';
import capstone from '../assets/capstone.jpg';
import mp2 from '../assets/mp2.jpg';
import movie from '../assets/movie.jpg';
import project2 from '../assets/project2.png';
import BootstrapProjects from './BootstrapProjects';

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-24'>
        <div className='max-w-[1000px] mx-auto p-4 lg:pt-0 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#26c2a8]'>Projects</p>
                <p className='py-4'>Check out some of my recent projects</p>
            </div>

            <div className='w-full grid sm:grid-cols-2 gap-5'>
                <ReactProjects img={capstone} title='MindfullTasks App' demoLink='https://mindfull-tasks-app.onrender.com/' codeLink='https://github.com/jantoy052003/Capstone-Frontend'/>
                <ReactProjects img={project2} title='Streaming App' demoLink='https://mp2-8ww2.onrender.com/' codeLink='https://github.com/jantoy052003/MP2.git'/>
                <BootstrapProjects img={mp2} title='Resort Website' demoLink='https://jantoy052003.github.io/KodeGoMP1/index.html' codeLink='https://github.com/jantoy052003/KodeGoMP1.git'/>
                <ReactProjects img={movie} title='Trailers App' demoLink='https://mp2-testing-api.onrender.com/' codeLink='https://github.com/jantoy052003/MP2-testing-API.git'/>
            </div>

        </div>
    </div>
  )
}

export default Projects
