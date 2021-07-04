import {
    LOADING,
    GET_ALL_POSTS,
    GET_USER_BY_ID,
    GET_COMMENTS_BY_ID
} from '../Actions/Posts/PostsActionTypes'

const initialState = {
    loading: false,
    posts: [],
    user: {},
    comments: [],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_ALL_POSTS: {
            return {
                ...state,
                posts: action.payload,
                loading: false,
            }
        }
        case GET_USER_BY_ID: {
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        }
        case GET_COMMENTS_BY_ID: {
            return {
                ...state,
                comments: action.payload,
                loading: false,
            }
        }
        default: {
            return state
        }
    }
}

export default postsReducer