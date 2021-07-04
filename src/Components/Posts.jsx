import React from 'react'
import moment from 'moment';
import ProfileModal from './ProfileModal'
import CommentsModal from './CommentsModal'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    `
const Card = styled.div`
    width: 36em;
    height: 100%;
    margin: 2em;
    padding: 1em;
    border: .2em solid black;
    text-align: center;
    border-radius: 2em;
    transition: .25s;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &:hover {
        transform: scale(1.05);
    }
    p {
        font-size: 1.6em;
    }
    a {
        font-size: 1.6em;
        text-decoration: none;
    }
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: .5em;
    p {
        margin-left: 1em;
    }
`
const Time = styled.p`
    text-align: right;
    color: gray;
`
const ProfilePic = styled.img`
    width: 4em;
    height: 4em;
    border-radius: 50%;
    object-fit: cover;
`
const Picture = styled.img`
    width: 100%;
    height: 25em;
    object-fit: cover;
`
const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Tags = styled.p`
    font-size: 2em;
    background-color: #1565c0;
    border-radius: 2em;
    padding: 0 .5em 0 .5em;
`
const Divider = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Likes = styled.div`
    padding: 0 1.5em;
    border-radius: 2em;
    background-color: #1565c0;
`
const Comments = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    border-radius: 2em;
`

const Posts = ({ data }) => {
    return (
        <Container>
            {data?.map((p) => (
                <Card key={p.id}>

                    <Header>
                        <ProfilePic src={p.owner.picture}/>
                        <p>{p.owner.firstName} {p.owner.lastName}</p>
                        <Time>{moment(p.publishDate).fromNow()}</Time>
                    </Header>

                    <Picture src={p.image}/>
                    <p>{p.text}</p>

                    <TagContainer>
                        {p.tags.map((t) => (
                            <Tags>#{t}</Tags>
                        ))}
                    </TagContainer>      

                    <ProfileModal userId={p.owner.id}/>


                    {(p.link) ?
                    <a href={p.link} target="blank">External Link</a>
                    :
                    <p>Link not available</p>
                    }

                    <Divider>
                        <Likes>
                            <p>Likes: {p.likes}</p>
                        </Likes>
                        <Comments>
                            <CommentsModal postId={p.id}/>
                        </Comments>
                    </Divider>

                </Card>
            ))}
        </Container>
    )
}

export default Posts
