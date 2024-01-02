import React from 'react'
import Image from 'next/image'

 const Nav = () => {
  return (
    <nav className='w-full pt-2 flex justify-end'>
    <ul className='flex gap-4 text-gray-300'>
      <li className='hover:-translate-y-0.5 hover:text-red-500'><a href="https://github.com/gnani1226" target='_blank'><Image src='/icons8-git-64.png' alt='github' width={30} height={30} title='github'/></a></li>
      <li className='hover:-translate-y-0.5 hover:text-red-500'><a href=""><Image src='/email.png' alt='Gmail' width={25} height={25} title='konda.gnani060@gmail.com'/></a></li>
      <li className='hover:-translate-y-0.5 hover:text-red-500'><a href="https://www.linkedin.com/in/gnaneshwar-konda/" target='_blank'><Image src='/icons8-linkedin-48.png' alt='LinkedIn' width={30} height={30} title='LinkedIn'/></a></li>
    </ul>
  </nav>
  )
}

export default Nav