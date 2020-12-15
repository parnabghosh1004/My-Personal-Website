import React, { useEffect, useState } from 'react'
import sanityClient from '../client'
import { useSpring, animated } from 'react-spring'

export default function Projects() {

    const [projects, setProjects] = useState(null)
    const prop1 = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -40 }, config: { duration: 1000 } })
    const prop2 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600, config: { duration: 1500 } })

    useEffect(() => {

        document.title = 'My Portfolio | projects'

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
        <section style={{ background: 'linear-gradient(rgb(181 ,188, 237, 0.5), rgba(255, 200, 110, 0.5)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")', backgroundSize: 'cover', height: '90vh' }} className="text-gray-700 body-font overflow-hidden">
            <animated.div style={prop1}>
                <h1 className="font-semibold lg:text-4xl md:text-3xl text-gray-900 text-center my-12">My Projects</h1>
            </animated.div>
            <div className="container px-6 py-6 mt-8 mx-auto">
                <div className="-my-8 projectDiv">
                    <animated.div style={prop2} >
                        {projects ? projects.map((project, i) => (

                            <div className="py-8 flex flex-col lg:flex-row justify-center
                            items-center flex-wrap lg:flex-nowrap w-auto p-8 border-opacity-5 border-2 shadow-xl rounded-lg my-6 mx-1 lg:mx-16 bg-gray-300" key={project._id}
                            >
                                <div className="md:w-72 md:mb-0 mb-6 flex flex-col md:self-start">
                                    <span className="tracking-widest text-xs lg:font-medium title-font text-gray-900 underline">Project Type : {project.projectType}</span>
                                    <span className="mt-1 text-gray-500 text-xs">finished on {new Date(project.date).toDateString()}</span>
                                </div>
                                <div className="md:flex-grow ml:0 lg:ml-10 md:self-start">
                                    <h2 className="text-base md:text-xl lg:text-2xl font-medium text-gray-900 title-font mb-2">Title : {project.title}</h2>
                                    <p className="leading-relaxed text-sm"><b>Description</b> : {project.description}</p>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-indigo-500 inline-flex items-center mt-4 text-xs md:text-lg">View Project
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        )) : <div className="text-center">No projects !</div>}
                    </animated.div>
                </div>
            </div>
        </section >
    )
}
