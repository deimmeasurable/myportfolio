import React from 'react'
import html from '../assets/technologies/html.png'
import css from '../assets/technologies/css.png'
import javascript from '../assets/technologies/javascript.png'
import react from '../assets/technologies/react.png'
import java from '../assets/technologies/Java.png'
import mysql from '../assets/technologies/mysql.png'
import springboot from '../assets/technologies/springboot.png'
import python from '../assets/technologies/python.png'
import coreldraw from '../assets/technologies/corel.png'
import ps from '../assets/technologies/photoshop.png'
import figma from '../assets/technologies/figma-logo.png'
import tailwind from '../assets/technologies/tailwind.png'


const Technologies = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title:'HTML'
  },
  {
    id: 2,
    src: css,
    title:'CSS'
},
{
  id: 3,
  src:javascript,
  title:'JAVASCRIPT'
},
{
  id: 4,
  src: react,
  title:'REACT'
},
{
  id: 5,
  src: java,
  title:'JAVA'
},
{
  id: 6,
  src: springboot,
  title:'SPRINGBOOT'
},
{
  id: 7,
  src: mysql,
  title:'MySQL'
},
{
  id: 8,
  src: python,
  title:'PYTHON'
},
{
  id: 9,
  src: coreldraw,
  title:'CORELDRAW'
},
{
  id: 10,
  src: ps,
  title:'PHOTOSHOP'
},
{
  id: 11,
  src: figma,
  title:'FIGMA'
},
{
  id: 12,
  src: tailwind,
  title:'TAILWIND'
},
]
  return (
    <div name='technologies' className='bg-white w-full h-150'>
        <div className='max-w-screen-lg mx-auto p-4 flex-col
        justify-center w-full' text-blue-900>
            <div>
                <p className='text-4xl text-black-900 font-bold 
                border-b-4 border-gray-200 p-2 inline'>
                  Technologies</p>
                <p className='py-6'>Some of the technologies I've worked with</p>
            </div>
             
            <div className='w-full grid grid-cols-3 sm:grid-cols-4
            gap-8 text-center py-8 px-12 sm:px 0'>

              {techs.map(({id, src, title, style}) => (
                  <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                  <img src={src} alt=''className='w-20 mx-auto'/>
                  <p className='mt-4'>{title}</p>
                  </div>
              ))}
              
            </div>
        </div>
    </div>
  )
}

export default Technologies