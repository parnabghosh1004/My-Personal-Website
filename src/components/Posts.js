import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import sanityClient from '../client'

export default function Posts() {

    const [posts, setPosts] = useState(null)
    const prop1 = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -40 }, config: { duration: 2000 } })
    const prop2 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } })

    useEffect(() => {
        sanityClient.fetch(`*[_type=="post"]{
            id,
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then(data => setPosts(data))
    }, [])

    return (
        <section className="text-gray-700 body-font">
            <animated.div style={prop1}>
                <h1 className="font-semibold lg:text-4xl md:text-3xl text-gray-900 text-center my-12">My Posts</h1>
            </animated.div>
            <animated.div style={prop2}>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {posts?.map(post => (
                            <div className="p-4 md:w-1/3" key={post._id}>
                                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                    <img className="lg:h-56 md:h-36 w-full object-cover object-center" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/post/${post.slug}`}>View Post
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </animated.div>
        </section>
    )
}
