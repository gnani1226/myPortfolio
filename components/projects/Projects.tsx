import React from 'react'
import Link from 'next/link'

type projType = {title: string, link: string,desc?: string}  

const projectList: projType[] = [
    {title: 'Tasty Kitchen',link:'https://github.com/gnani1226/Tastykitchen'},
    {title: 'Jobby App',link:'https://gnanijbapp.ccbp.tech/login',desc:"[user:rahul, password: rahul@2021]"},
    {title: 'Godspeed Systems',link:'https://www.godspeed.systems/'},
]

 const Projects = () => {
  return (
    <ul className='list-none flex flex-col gap-4 font-mono'>
        {
            projectList.map((project,i) => (
                <>
                <li key={i} className='flex flex-col border-t-0 border-l-0 border-r-0 p-0 text-xs'>
                    <Link href={project.link} target='_blank'>{project.title}</Link>
                    <small>{project.desc}</small>
                    </li>
                
                </>
            )
        )}
    </ul>
  )
}

export default Projects