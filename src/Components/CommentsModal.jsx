import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getCommentsById } from '../Redux/Actions/Posts/PostsActions'

import styled from 'styled-components'
import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        height: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,2,4),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}))

const Text = styled.p`
    font-size: 1.8em;
`
const Comment = styled.div`
    background: #1565c0;
    border-radius: 2em;
    margin: .5em;
    padding: .5em;
`

const ProfileModal = ({ postId }) => {
    
    const dispatch = useDispatch()

    const loading = useSelector(state => state.posts.loading)

    const comment = useSelector(state => state.posts.comments)

    const styles = useStyles()

    const [modal, setModal] = useState(false)

    const openCloseModal = () => {
        dispatch(getCommentsById(postId))
        setModal(!modal)
    }

    const body = (
        <div className={styles.modal}>
            <div align='center'>
                <h2>Comments</h2>
            </div>
            {(loading) ? 
                <Text>Loading...</Text>
            :
            <div>
                {comment?.map((c) => (
                    <Comment>
                    <Text>Author: {c.owner.firstName}</Text>
                    <Text>Message: {c.message}</Text>
                    </Comment>
                ))}
            </div>
            }
        </div>
    )

    return (
        <div>
            <button onClick={() => openCloseModal()}>Show Comments</button>
            <Modal
                open={modal}
                onClose={openCloseModal}
            >
            {body}
            </Modal>
        </div>
    )
}

export default ProfileModal