import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { useSpring, animated } from 'react-spring'

export default function NavBar() {

    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } })

    return (
        <div className='font-sans bg-gray-900'>
            <animated.div style={props}>
                <header className="text-white body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <NavLink to='/' exact activeClassName="p-2 text-white bg-gray-700 rounded-lg" className="flex title-font font-medium items-center mb-4 md:mb-0">
                            <span className="ml-3 text-base md:text-lg lg:text-xl">Parnab Ghosh</span>
                        </NavLink>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                            <NavLink activeClassName="p-2 text-white bg-gray-700 rounded-lg" className="mr-5 p-2 hover:text-gray-900 hover:bg-gray-300 lg:text-lg md:text-base text-sm font-medium rounded-lg" to='/about'>About</NavLink>
                            <NavLink activeClassName="p-2 text-white bg-gray-700 rounded-lg" className="mr-5 p-2 hover:text-gray-900 hover:bg-gray-300 lg:text-lg md:text-base text-sm font-medium rounded-lg" to='/posts'>My posts</NavLink>
                            <NavLink activeClassName="p-2 text-white bg-gray-700 rounded-lg" className="mr-5 p-2 hover:text-gray-900 hover:bg-gray-300 lg:text-lg md:text-base text-sm font-medium rounded-lg" to='/projects'>My Projects</NavLink>
                        </nav>
                        <div className='sm:mt-3 md:mt-0'>
                            <SocialIcon network='linkedin' url="https://www.linkedin.com/in/parnab-ghosh-57326118b" target='_blank' className="mx-2 sm:my-0 my-6" />
                            <SocialIcon network='github' url="https://github.com/parnabghosh1004" target='_blank' className="mx-2" />
                        </div>
                    </div>
                </header>
            </animated.div>
        </div>
    )
}
