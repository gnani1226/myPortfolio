import Image from 'next/image'
import Nav from '../components/nav/Nav';
import Projects from '../components/projects/Projects';

export default function Home() {

  const intro: string = `Hi I'm Gnaneshwar, Frontend Developer based in Hyderabad, India, Developed many Projects using ReactJs, NextJs, JS, Tailwind CSS `;
  const description: string = `I'm passionate coder for cutting-edge, pixel-perfect optimized frontend for web development`;

  return (
    <main className=" flex min-h-screen flex-col items-center justify-center text-slate-100 font-mono">
      <div className='flex justify-center items-center px-20 p-10 lg:w-[72%]  bg-gray-800'>
        <div className='custom-border after:bg-gray-800 '>
          <div className='flex flex-col border-0 rounded-lg p-2 relative z-10'>
            <Nav />
            <div className='flex justify-between gap-16 items-center px-20 py-32'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-6xl font-extralight'>Welcome</h1>
                <div className='flex justify-center items-stretch gap-4 '>
                  <div className='border '>
                  </div>
                  <div className='overflow-x-auto'>
                    <small className='font-semibold'>{intro}</small>
                    <br />
                    <br />
                    <small>{description}</small>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <h1>Projects</h1>
                <div className='border pl-4 pt-4 border-orange-600 border-r-0 border-b-0'>
                  <Projects />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
