import React from 'react'

const Contact = () => {


  return (
    <div name='contact' className='w-full h-150 bg-red-900 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl text-white font-bold inline border-b-4 border-gray-300'>Contact</p>
          <p className='py-6'>To reach me, Kindly fill and submit the form below</p>
        </div>
        
        <div className='flex justify-center items-center'>
        <form 
        action='https://getform.io/f/05a07e20-6747-4d1f-8807-06e25c8a81ac' 
        method='POST'
        className='flex flex-col w-full md:w-1/2'>
            <input
            type='text'
            name='fullName'
            placeholder='Enter your name'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'
            />
            <input
            type='text'
            name='email'
            placeholder='Enter your email'
            className=' my-4 p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'
            />
            <textarea
            name='message'
            rows='10'
            placeholder='Enter your message'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'
            ></textarea>
            
            <button className='text-blue-900 bg-white px-6 py-3 my-8 mx-auto flex
            items-center rounded-md hover:scale-110 duration-300'>Send</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact