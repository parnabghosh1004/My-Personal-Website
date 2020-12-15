import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Typewriter from 'typewriter-effect'
import sanityClient from '../client'

export default function Home() {

    const [img, setImg] = useState()

    useEffect(() => {

        document.title = 'My Portfolio | home'

        sanityClient.fetch(`*[_type=="author"]{
            image{
                asset->{
                    url
                },
                alt
            },
        }`).then(data => setImg(data[0].image.asset.url))
    }, [])

    const props = useSpring({ marginLeft: 30, opacity: 1, from: { marginLeft: -200, opacity: 0 }, config: { velocity: 8, delay: 2000, duration: 1000, mass: 3 } })

    return (
        <div style={{ background: 'linear-gradient(rgb(181 ,188, 237, 0.5), rgba(255, 200, 110, 0.5)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")', backgroundSize: 'cover', height: '88%' }} className='flex flex justify-center items-center'>
            <animated.div style={props}>
                <div className='flex flex-col justify-center items-center mb-20'>
                    <img src={img} alt="myprofile"
                        className='rounded-full h-40 w-40 no-repeat border-4 border-black mb-6'
                    />
                    <h1 className="font-semibold sm:text-md md:text-3xl mx-5">
                        <Typewriter options={{ loop: true, delay: 80, deleteSpeed: 10 }} onInit={(typewriter) => {
                            typewriter.pauseFor(1000)
                                .typeString('Hello, I am Parnab Ghosh. Welcome to my website !')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Web and MERN stack developer !')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Also an ECE Undergrad student at MNNIT Allahabad :)')
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                        }} />
                    </h1>
                </div>
            </animated.div>
        </div>
    )
}
