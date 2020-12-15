import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import sanityClient from '../client'

export default function About() {

    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } })
    const [data, setData] = useState(null)

    useEffect(() => {

        document.title = 'My Portfolio | about'

        sanityClient.fetch(`*[_type=="author"]{
            _id,
            name,
            age,
            nationality,
            dob,
            languages,
            skills,
            otherinfo,
            education,
            image{
                asset->{
                    url
                },
                alt
            },
            resume{
                asset->{
                    url
                },
                alt
            }
        }`).then(data => {
            setData(data[0])
        })
    }, [])

    return (

        <animated.div style={props}>
            <div className="flex items-center flex-col md:flex-row md:justify-evenly md:items-start h-full" style={{ background: 'linear-gradient(rgb(181 ,188, 237, 0.5), rgba(255, 200, 110, 0.5)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")', backgroundSize: 'cover', height: '88vh' }} >
                <div className="flex flex-col bg-gray-200 min-w-max items-center rounded-lg my-6 py-6 w-11/12 md:w-1/4"
                    style={{ minWidth: '25%' }}
                >
                    <h1 className="font-bold text-xl my-6">Basic Info</h1>
                    <div className="flex items-center md:flex-col">

                        <img src={data?.image.asset.url} alt="" className="h-44 w-44 lg:h-52 lg:w-52 rounded-full my-4 mb-6 mx-6" />
                        <div className="flex flex-col font-medium text-sm">
                            <h1 className="my-1">Name - {data?.name}</h1>
                            <h1 className="my-1">Age - {data?.age} yrs</h1>
                            <h1 className="my-1">Nationality - {data?.nationality}</h1>
                            <h1 className="my-1">DOB - {new Date(data?.dob).toDateString()}</h1>
                            <h1 className="my-1">languages - {data?.languages[0]} , {data?.languages[1]} , {data?.languages[2]}</h1>
                            {
                                data?.otherinfo.map((info, i) => (
                                    <h1 className="my-1" key={i}>{info}</h1>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-200 items-center rounded-lg my-6 py-6 w-11/12 md:w-8/12"
                >
                    <h1 className="font-bold text-xl my-4 ml-6 self-start underline">Education : </h1>
                    {
                        data?.education.map((e, i) => (
                            <div className="flex items-center self-start ml-10 my-1 mt-6" key={i}>
                                <img src={e.image} alt="fdd" className="h-16 w-16 rounded-full mb-4 mr-6" />
                                <div className="self-start">
                                    <h1 className="font-medium">{e.name}</h1>
                                    <p className="text-sm">{e.educationType} (<i>{e.timespan}</i>)</p>
                                </div>
                            </div>
                        ))
                    }
                    <h1 className="font-bold text-xl my-4 ml-6 self-start underline flex-wrap">Skills : </h1>
                    <div className="self-start ml-6 flex flex-wrap">
                        {
                            data?.skills.map((s, i) => (
                                <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md" key={i}>{s}</h1>
                            ))
                        }
                    </div>
                    <div className="self-start ml-6 flex flex-wrap">
                    </div>
                    <h1 className="font-bold text-xl my-4 ml-6 self-start underline flex-wrap">Resume : </h1>
                    <a target="_blank" rel="noreferrer" href={data?.resume.asset.url} className="font-medium self-start ml-6 hover:underline">Click here to view my resume</a>
                </div>
            </div >
        </animated.div>
    )
}
