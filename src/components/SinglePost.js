import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import sanityClient from '../client'

export default function SinglePost() {

    const { id } = useParams()
    const [post, setPost] = useState(null)
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } })

    useEffect(() => {
        document.title = `My Portfolio/post/${id}`
        sanityClient.fetch(`*[_id=="${id}"]{
            title,
            _id,
            body,
            mainImage{
                asset->{
                    url,
                },
                alt
            }
        }`).then(data => {
            setPost(data[0])
        })
    }, [id])

    return (
        <animated.div style={props}>
            <div style={{ background: 'linear-gradient(rgb(181 ,188, 237, 0.5), rgba(255, 200, 110, 0.5)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")', backgroundSize: 'cover', height: '90vh' }} className='pt-12' >

                <div className='p-2 md:p-6 lg:p-12 bg-gray-200 rounded-lg mx-auto w-11/12 lg:h-11/12'>
                    <div className='flex flex-col lg:flex-row items-center justify-evenly h-full w-full'>
                        <img src={post?.mainImage.asset.url} alt={post?.mainImage.alt} className='lg:h-full lg:w-2/3 w-full rounded-lg' />
                        <div className='h-full w-3/3  mx-auto lg:mx-10 self-start'>
                            <h1 className='text-xl lg:text-2xl font-semibold text-center mt-6 mb-3'>{post?.title}</h1>
                            <p className='text-sm lg:text-base text-center font-light'>{post?.body[0].children[0].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}
