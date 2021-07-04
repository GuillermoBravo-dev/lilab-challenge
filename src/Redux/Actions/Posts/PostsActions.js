import {
    GET_ALL_POSTS,
    GET_USER_BY_ID,
    GET_COMMENTS_BY_ID,
    LOADING
} from './PostsActionTypes'

import axios from 'axios'

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60e2459341b9aeb169b059db'

const getAllPosts = async () => {
    try {
        const posts = await axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
        return posts.data.data
    } catch (error) {
        console.log('Error', error.message)
    }
}

const getUser = async (userId) => {
    try {
        const user = await axios.get(`${BASE_URL}/user/${userId}`, { headers: { 'app-id': APP_ID } })
        return user.data
    } catch (error) {
        console.log('Error', error.message)
    }
}

const getComments = async (postId) => {
    try {
        const comments = await axios.get(`${BASE_URL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
        return comments.data.data
    } catch (error) {
        console.log('Error', error.message)
    }
}


export const getPosts = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING })
        dispatch(
            {
                type: GET_ALL_POSTS,
                payload: await getAllPosts()
            }
        )
    }
}

export const getUserById = (userId) => {
    return async (dispatch) => {
        dispatch({ type: LOADING })
        dispatch(
            {
                type: GET_USER_BY_ID,
                payload: await getUser(userId)
            }
        )
    }
}

export const getCommentsById = (postId) => {
    return async (dispatch) => {
        dispatch({ type: LOADING })
        dispatch(
            {
                type: GET_COMMENTS_BY_ID,
                payload: await getComments(postId)
            }
        )
    }
}