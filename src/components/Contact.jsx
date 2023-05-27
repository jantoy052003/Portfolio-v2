import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb=8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#26c2a8]'>Contact</p>
            <p className='py-4 mb-5'>Fill out the form to reach me</p>
            </div>
            <div>
                <form action="https://getform.io/f/434a7b43-49d3-4f89-a78d-a3285cee451d" method='POST' encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <input className='border-2 rounded-lg p-3 flex border-[#64FFDA] bg-gray-700' type="text" name='name' placeholder="Name"/>
                        </div>
                        <div className='flex flex-col'>
                            <input className='border-2 rounded-lg p-3 flex border-[#64FFDA] bg-gray-700' type="text" name='phone' placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <input className='border-2 rounded-lg p-3 flex border-[#64FFDA] bg-gray-700' type="email" name='email' placeholder="Email" required/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <input className='border-2 rounded-lg p-3 flex border-[#64FFDA] bg-gray-700' type="text" name='subject' placeholder="Subject"/>
                    </div>
                    <div className='flex flex-col py-2'>
                        <textarea className='border-2 rounded-lg p-3 border-[#64FFDA] bg-gray-700 ' rows='10' name='message' placeholder="Write your message here..."></textarea>
                    </div>
                    <button className='w-full text-[#0a192f] items-center font-bold px-[10px] duration-500 rounded-md h-[35px] bg-[#64ffda] hover:text-[#26c2a8] hover:border-2 hover:border-[#26c2a8] hover:bg-transparent'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
