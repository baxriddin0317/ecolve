import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

export const CallToAction = () => {
  return (
    <section className='max-w-8xl mx-auto grid grid-cols-2 gap-10 lg:gap-20 items-center px-4 py-28'>
      <div className='relative'>
        <div className="absolute bottom-16 right-16 size-80 bg-black blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 size-96 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl -z-20"/>
        <h2 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold'>
          Show Sample Task Defination
        </h2>
        <p className='text-neutral-400 mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste repellendus ab exercitationem laborum iure rem voluptas accusantium impedit inventore mollitia animi maxime minus, labore ipsum at aperiam sunt. Dolore corporis saepe, necessitatibus magnam iusto quam repudiandae fugiat dolores odio.
        </p>
      </div>
      <div className='flex flex-col gap-4 relative'>
      <div className="absolute top-0 right-0 size-64 bg-black blur-3xl -z-10" />
        <div className="absolute top-0 right-0 size-80 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl -z-20"/>
        <div className='flex relative items-center gap-2 group border cursor-pointer border-white rounded-lg py-6 px-5'>
          <div className='absolute hidden group-hover:block size-full inset-0 bg-white/10 blur-md'></div>
          <FaCircleCheck className='text-green-600 text-2xl' />
          <p className='text-white font-medium text-lg capitalize'>
            Easy task scheduling
          </p>
        </div>
        <div className='flex relative items-center gap-2 group border cursor-pointer border-white rounded-lg py-6 px-5'>
          <div className='absolute hidden group-hover:block size-full inset-0 bg-white/10 blur-md'></div>
          <FaCircleCheck className='text-green-600 text-2xl' />
          <p className='text-white font-medium text-lg capitalize'>
            no code or development required
          </p>
        </div>
        <div className='flex relative items-center gap-2 group border cursor-pointer border-white rounded-lg py-6 px-5'>
          <div className='absolute hidden group-hover:block size-full inset-0 bg-white/10 blur-md'></div>
          <FaCircleCheck className='text-green-600 text-2xl' />
          <p className='text-white font-medium text-lg capitalize'>
            simple JSON data format
          </p>
        </div>
      </div>
    </section>
  )
}