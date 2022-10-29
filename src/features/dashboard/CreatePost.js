import React from "react";
import styled from 'styled-components';

import Card from '../../components/Card';
import Avatar from "../../components/Avatar";

const CreatePost = (props) => {

    return  (
        <Container>
            <Card>
                <StartPost>
                    <Avatar user={props.user} height={48} width={48} />
                    <button>Start a post</button>
                </StartPost>
                <PostType>
                    <PostTypeItem onClick={props.onClickImage}>
                        <img src='/images/photo-icon.svg' alt=''/>
                        <span>Photo</span>
                    </PostTypeItem>
                    <PostTypeItem>
                        <img src='/images/video-icon.svg' alt=''/>
                        <span>Video</span>
                    </PostTypeItem>
                    <PostTypeItem>
                        <img src='/images/calendar-icon.svg' alt=''/>
                        <span>Event</span>
                    </PostTypeItem>
                    <PostTypeItem>
                        <img src='/images/article-icon.svg' alt=''/>
                        <span>Write article</span>
                    </PostTypeItem>
                </PostType>
            </Card>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    & img {
        margin-right: 10px;
    }
`;

const StartPost = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;

    & button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(0, 0, 0, 0.3);
        flex-grow: 1;
        margin: 5px 0;
        font-size: 14px;
        font-weight: 600;
        flex-grow: 1;
        border-radius: 35px;
        height: 48px;
        text-align: left;
        padding-left: 20px;
        cursor: pointer;

        :hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }
`;

const PostType = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 5px;

`;

const PostTypeItem = styled.li`
    padding: 0 8px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    height: 48px;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 5px;
    }

    & img {
        height: 24px;
        width: 24px;
    }

    & span {
        font-size: 14px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.6);
    }
`;


export default CreatePost;