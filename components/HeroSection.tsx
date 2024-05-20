import React from 'react'
import { BackgroundBeams } from './ui/background-beams';

export const Hero = () => {
  return (
    <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Lorem, ipsum dolor.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="flex justify-center gap-4 mt-16 relative z-10">
          <button className="w-40 h-10 rounded-xl border border-white text-white font-bold">
            Demo
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  font-bold">
            Get Started
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}