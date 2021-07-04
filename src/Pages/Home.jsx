import React, { useEffect } from 'react'
import Posts from '../Components/Posts'

import { getPosts } from '../Redux/Actions/Posts/PostsActions'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        if (posts.length > 0) return
        dispatch(getPosts())
    }, [])

    return (
        <div>
            <Posts data={posts}/>
        </div>
    )
}

export default Home
