import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getUserById } from '../Redux/Actions/Posts/PostsActions'

import styled from 'styled-components'
import { Modal, Button } from '@material-ui/core'
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
    button: {
        fontSize: '1.4em',
        textAlign: 'center',
        color: '#1565c0'
    }
}))
const PictureContainer = styled.div`
    text-align: center;
`
const Picture = styled.img`
    height: 12em;
    width: 12em;
    border-radius: 50%;
    object-fit: cover;
`
const Text = styled.p`
    font-size: 1.8em;
`

const ProfileModal = ({ userId }) => {
    
    const dispatch = useDispatch()

    const loading = useSelector(state => state.posts.loading)
    const user = useSelector(state => state.posts.user)

    const styles = useStyles()

    const [modal, setModal] = useState(false)

    const openCloseModal = () => {
        dispatch(getUserById(userId))
        setModal(!modal)
    }

    const body = (
        <div className={styles.modal}>
            <div align='center'>
                <h2>Profile</h2>
            </div>
            {(loading) ? 
                <Text>Loading...</Text>
            :
            <>
            <PictureContainer>
                <Picture src={user.picture} alt={user.firstName}/>
            </PictureContainer>
            <Text>First Name: {user.firstName}</Text>
            <Text>Last Name: {user.lastName}</Text>
            <Text>Gender: {user.gender}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            </>
            }
        </div>
    )

    return (
        <div>
            <Button className={styles.button} onClick={() => openCloseModal()}>Show Profile</Button>
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
