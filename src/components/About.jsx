import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-200 text-blue-900'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
            </div>
            <p text-xl>
                Over the last few years, I have acquired a diverse set of skills, ranging from Graphics Design (Corel draw, Adobe Photoshop) to Product Design(UI/UX) using Figma, 
                to HTML, CSS + Javascript, and React for web development with Kotlin/Android for mobile development
                all the way to backend development with languges such as Java, python and build tools such as Springboot and Django amongst other programming tools and technologies,
                and as an enthusiastic and passionate software engineer (particularly in front-end), 
                I have strong fundamentals and desire to build products/systems that solves people's problems.
                I try to keep pace with the brand new fields and dig into cutting-edge technologies.
            </p>

        </div>
    </div>
  )
}

export default About