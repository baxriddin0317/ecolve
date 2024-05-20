import React from 'react'

export const CallToAction = () => {
  return (
    <section className='max-w-8xl mx-auto grid grid-cols-2 gap-10 lg:gap-20 items-center px-4 py-20'>
      <div className=''>
        <h2 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold'>
          Show Sample Task Defination
        </h2>
        <p className='text-neutral-400 mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste repellendus ab exercitationem laborum iure rem voluptas accusantium impedit inventore mollitia animi maxime minus, labore ipsum at aperiam sunt. Dolore corporis saepe, necessitatibus magnam iusto quam repudiandae fugiat dolores odio.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex relative items-center gap-2 group border cursor-pointer border-white rounded-lg py-6 px-5'>
          <div className='absolute hidden group-hover:block size-full inset-0 bg-white/10 blur-md'></div>
          <p className='text-yellow-600 group-hover:text-white font-medium text-lg capitalize'>
            Easy task scheduling
          </p>
        </div>
        <div className='flex relative items-center gap-2 group border cursor-pointer border-white rounded-lg py-6 px-5'>
          <div className='absolute hidden group-hover:block size-full inset-0 bg-white/10 blur-md'></div>
          <p className='text-yellow-600 group-hover:text-white font-medium text-lg capitalize'>
            no code or development required
          </p>
        </div>
        <div className='flex relative items-center gap-2 group border cursor-pointer border-white rounded-lg py-6 px-5'>
          <div className='absolute hidden group-hover:block size-full inset-0 bg-white/10 blur-md'></div>
          <p className='text-yellow-600 group-hover:text-white font-medium text-lg capitalize'>
            simple JSON data format
          </p>
        </div>
      </div>
    </section>
  )
}