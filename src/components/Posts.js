import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import sanityClient from '../client'

export default function Posts() {

    const [posts, setPosts] = useState(null)
    const prop1 = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -40 }, config: { duration: 1000 } })
    const prop2 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700, config: { duration: 2000 } })

    useEffect(() => {

        document.title = 'My Portfolio | posts'

        sanityClient.fetch(`*[_type=="post"]{
            _id,
            title,
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
        <section style={{ background: 'linear-gradient(rgb(181 ,188, 237, 0.5), rgba(255, 200, 110, 0.5)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")', backgroundSize: 'cover', height: '88%' }} className="text-gray-700 body-font overflow-hidden" >
            <animated.div style={prop1}>
                <h1 className="font-semibold lg:text-4xl md:text-3xl text-gray-900 text-center my-12">My Posts</h1>
            </animated.div>
            <animated.div style={prop2}>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {posts ? posts.map(post => (
                            <div className="p-4 md:w-1/3 bg-white rounded-lg" key={post._id}>
                                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                    <img className="lg:h-56 md:h-36 w-full object-cover object-center" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                                        <div className="flex items-center flex-wrap ">
                                            <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/post/${post._id}`}>View Post
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <div>No Posts !</div>}
                    </div>
                </div>
            </animated.div>
        </section>
    )
}
