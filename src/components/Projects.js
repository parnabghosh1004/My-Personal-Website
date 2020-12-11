import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import { useSpring, animated } from 'react-spring'

export default function Projects() {

    const [projects, setProjects] = useState(null)
    const prop1 = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -40 }, config: { duration: 1000 } })
    const prop2 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { delay: 2000, duration: 4000 } })

    useEffect(() => {
        sanityClient.fetch(`*[_type=="project"]{
            _id,
            title,
            description,
            date,
            link,
            tags,
            projectType
        }`).then(data => {
            setProjects(data)
        })
    }, [])

    return (
        <section className="text-gray-700 body-font overflow-hidden">
            <animated.div style={prop1}>
                <h1 className="font-semibold lg:text-4xl md:text-3xl text-gray-900 text-center my-12">My Projects</h1>
            </animated.div>
            <div className="container px-6 py-6 mx-auto">
                <div className="-my-8">
                    {projects?.map(project => (

                        <animated.div style={prop2} key={project._id}>
                            <div className="py-8 flex justify-center flex-wrap lg:flex-nowrap w-auto p-8 border-opacity-5 border-2 shadow-xl rounded-lg my-6 mx-16"
                            >
                                <div className="md:w-72 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="tracking-widest font-medium title-font text-gray-900 underline">Project Type : {project.projectType}</span>
                                    <span className="mt-1 text-gray-500 text-sm">finished on {new Date(project.date).toDateString()}</span>
                                </div>
                                <div className="md:flex-grow ml-10">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Title : {project.title}</h2>
                                    <p className="leading-relaxed">Description : {project.description}</p>
                                    <a href={project.link} target="_blank" className="text-indigo-500 inline-flex items-center mt-4">View Project
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </animated.div>
                    ))}
                </div>
            </div>
        </section >
    )
}
