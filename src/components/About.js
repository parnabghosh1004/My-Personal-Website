import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import sanityClient from '../client'

export default function About() {

    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } })
    const [data, setData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type=="author"]{
            name,
            Resume{
                asset->{
                    url
                },
            },    
            image{
                asset->{
                    url
                }
            }
        }`).then(data => {
            setData(data)
        })

    }, [])

    return (

        <animated.div style={props}>
            <div className="flex items-center flex-col md:flex-row md:justify-evenly md:items-start">
                <div className="flex flex-col bg-gray-200 min-w-max items-center rounded-lg my-6 py-6 w-11/12 md:w-1/4 "
                    style={{ minWidth: '25%' }}
                >
                    <h1 className="font-bold text-xl my-6">Basic Info</h1>
                    <div className="flex items-center md:flex-col">

                        <img src={data && data[0].image.asset.url} alt="" className="h-44 w-44 lg:h-52 lg:w-52 rounded-full my-4 mb-6 mx-6" />
                        <div className="flex flex-col font-medium text-sm">
                            <h1 className="my-1">Name - {data && data[0].name}</h1>
                            <h1 className="my-1">Age - 19 yrs</h1>
                            <h1 className="my-1">Nationality - Indian</h1>
                            <h1 className="my-1">languages - English , Hindi , Bengali</h1>
                            <h1 className="my-1">DOB - 10 April 2001</h1>
                            <h1 className="my-1">UG student at MNNIT Allahabad</h1>
                            <h1 className="my-1">Electronics and Communication Engg</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-200 items-center rounded-lg my-6 py-6 w-11/12 md:w-8/12"
                >
                    <h1 className="font-bold text-xl my-4 ml-6 self-start underline">Education : </h1>
                    <div className="flex items-center self-start ml-10 my-1 mt-6">
                        <img src="https://static.toiimg.com/thumb/msid-65381960,width-1200,height-900,resizemode-4/.jpg" alt="" className="h-16 w-16 rounded-full mb-6 mr-6" />
                        <div className="self-start">
                            <h1 className="font-medium">Motilal Nehru National Institute Of Technology , Allahabad</h1>
                            <p className="text-sm">Btech in Electronics and Communication Engg. ( <i>2019-Present</i> )</p>
                        </div>
                    </div>
                    <div className="flex items-center self-start ml-10 my-1">
                        <img src="https://dpsbhilai.org/school/upload/SC0026/schoollogo/oc1452487087234a.jpg" alt="" className="h-16 w-16 rounded-full mb-6 mr-6" />
                        <div className="self-start">
                            <h1 className="font-medium">Delhi Public School , Bhilai</h1>
                            <p className="text-sm">10+2 level ( <i>2015-2019</i> )</p>
                        </div>
                    </div>
                    <h1 className="font-bold text-xl my-4 ml-6 self-start underline flex-wrap">Skills : </h1>
                    <div className="self-start ml-6 flex flex-wrap">
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">Python</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">JavaScript</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">MERN Stack</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">Digital Electronics</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">Programming</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">Calculus</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">Physics</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">React Native</h1>
                        <h1 className="font-medium mx-4 my-1 ml-0 bg-gray-400 px-4 py-2 rounded-md">Deep learning</h1>
                    </div>
                    <div className="self-start ml-6 flex flex-wrap">
                    </div>
                    <h1 className="font-bold text-xl my-4 ml-6 self-start underline flex-wrap">Resume : </h1>
                    <a target="_blank" href={data && data[0].Resume.asset.url} className="font-medium self-start ml-6 hover:underline">Click here to view my resume</a>
                </div>
            </div >
        </animated.div>
    )
}
