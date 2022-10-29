import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Ads from "./Ads";
import CreatePost from "./CreatePost";
import Header from "./Header";
import Modal from "../../components/Modal";
import ProfileCard from "./ProfileCard";
import Avatar from "../../components/Avatar";
import { fetchFeeds } from "./feedSlice";

const postSteps = {
    picture: [
        {
            postTitle: 'Edit your photo',
            buttontTitle: 'Done',
        },
        {
            postTitle: 'Create a post',
            buttontTitle: 'Post',
        }
    ]
};

const Dashboard = () => {

    const [image, setImage] = useState('');
    const [isDone, setIsDone] = useState(false);
    const [currentStep, setCurrentStep] = useState('');

    const user = useSelector(state => state.users.user);
    const feeds = useSelector(state => state.feeds.feeds);
    const dispatch = useDispatch()

    const handleUploadImage = (e) => {
        const image = e.target.files[0];

        if (image === '' || image === undefined) {
            return;
        }

        setImage(image);
    }

    useEffect(() => {
        dispatch(fetchFeeds());
    }, [dispatch]);
    

    const onClickImage = () => {
        const body = document.getElementsByTagName('body');
        body[0].classList.add('modal-open');

        const modal = document.getElementById('modal');
        modal.classList.add('open');

        console.log(currentStep);

        setCurrentStep(postSteps.picture[0]);
    }

    return (
        <Content>
            <DashboardContainer>
                <Header user={user}/>
                <LayoutContainer>
                    <ProfileCard />
                    <NewsFeed>
                        <CreatePost user={user} onClickImage={onClickImage} />
                        <PostList>
                            {
                                feeds.map((feed) => {
                                    return  <PostListItem key={feed.id}>
                                        <Card>
                                        <PostHeader>
                                            <PostProfile>
                                                <CircleImage src={feed.post.images[0]} alt=''/>
                                                <div>
                                                    <a href="/">
                                                        {feed.user.name} <span>3rd +</span>
                                                    </a>
                                                    <p> {feed.user.postion}</p>
                                                    <p>1 week</p>
                                                </div>
                                            </PostProfile>
                                            <PostContent>
                                                <span>{feed.post.message}</span>
                                            </PostContent>
                                            <PostActivities>
                                                <PostReaction>
                                                    <img src='/images/like-icon.svg' alt=''/>
                                                    <img src='/images/heart-icon.svg' alt=''/>
                                                    <img src='/images/clap-icon.svg' alt=''/>
                                                    <span>{feed.socialReactions.likes}</span>
                                                </PostReaction>
                                                <PostShare>
                                                    <span>{feed.socialReactions.comments} comments</span>
                                                    <span>{feed.socialReactions.repost} reposts</span>
                                                </PostShare>
                                            </PostActivities>
                                            <PostActions>
                                                <PostActionItem>
                                                    <img src='/images/like-action.svg' alt=''/>
                                                    <span>Like</span>
                                                </PostActionItem>
                                                <PostActionItem>
                                                    <img src='/images/comment-action.svg' alt=''/>
                                                    <span>Comment</span>
                                                </PostActionItem>
                                                <PostActionItem>
                                                    <img src='/images/repost-action.svg' alt=''/>
                                                    <span>Repost</span>
                                                </PostActionItem>
                                                <PostActionItem>
                                                    <img src='/images/send-action.svg' alt=''/>
                                                    <span>Send</span>
                                                </PostActionItem>
                                            </PostActions>
                                        </PostHeader>
                                    </Card>
                                    </PostListItem>
                                })
                            }

                        </PostList>
                    </NewsFeed>
                    <Ads/>
                </LayoutContainer>
            </DashboardContainer>
            <Modal title={currentStep.postTitle}
                onClickDone={() => {
                    setCurrentStep(postSteps.picture[1]);
                    setIsDone(true);
                }} 
                showFooter={!isDone}
                buttontTitle={currentStep.buttontTitle}
                child1={ isDone ? 
                    <PostContainer>
                        <PostPhotoProfile>
                            <Avatar user={user} height={48} width={48} />
                            <PostAudience>
                                <h1>John Paul Inhog</h1>
                                <button>
                                    <img src='/images/globe-icon.svg' alt=''/>
                                    <span>Anyone</span>
                                    <img src='/images/caret-down.svg' alt=''/>
                                </button>
                            </PostAudience>
                        </PostPhotoProfile>
                        <textarea placeholder="What do you want to talk about?" rows={3}/>
                        <ImageContainer>
                            <img src={URL.createObjectURL(image)} alt=''/> 
                        </ImageContainer>
                    
                    </PostContainer>
                    : <Fragment>
                        { !image ? <UploadPhoto>
                            <input 
                                type={'file'} 
                                id="file-upload"
                                accept="iamge/gif, image/jpeg, image/png"
                                name="image"
                                onChange={handleUploadImage}/>
                            <label for="file-upload">Select images to share</label>
                            </UploadPhoto> : 
                            <PhotoContainer>
                                <img src={URL.createObjectURL(image)} alt=''/> 
                            </PhotoContainer>
                        }
                    </Fragment>
                }
                child2={ isDone && <PostFooter>
                        <PostFooterList>
                            <PostFooterItem>
                                <img src='/images/gallery-icon.svg' alt=''/>
                            </PostFooterItem>
                            <PostFooterItem>
                                <img src='/images/post-video-icon.svg' alt=''/>
                            </PostFooterItem>
                            <PostFooterItem>
                                <img src='/images/file-icon.svg' alt=''/>
                            </PostFooterItem>
                            <PostFooterItem>
                                <img src='/images/post-job-icon.svg' alt=''/>
                            </PostFooterItem>
                            <PostFooterItem>
                                <img src='/images/occasion-icon.svg' alt=''/>
                            </PostFooterItem>
                            <PostFooterItem>
                                <img src='/images/poll-icon.svg' alt=''/>
                            </PostFooterItem>
                        </PostFooterList>
                        <ButtonPrimary>
                            {currentStep.buttontTitle}
                        </ButtonPrimary>
                    </PostFooter>
                }
            >
            </Modal>
        </Content>
    )

}

const CircleImage = styled.img`
   cursor: pointer;
    border-radius: 50%;
`

const Content = styled.div`
    background: #f3f2ef;
    box-sizing: border-box;
    width: 100%;
   
`;

const DashboardContainer = styled.div`
    padding: 56px 0 0;
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 68px 0 0;
    }
`;

const LayoutContainer = styled.div`
    display: flex;
    margin-top: 20px;
    padding-bottom: 20px;
    flex-direction: row;
    gap: 25px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 20px;
    }
   
`;

const Card = styled.div`
    background: white;
    border-radius: 10px;
`;

const NewsFeed = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const PostList = styled.ul`
`;

const PostListItem = styled.li`
    margin-top: 10px;
    list-style-type: none;
`;

const PostHeader = styled.div`
    padding: 10px;
`;

const PostProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    & img {
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }

    & a {
        font-size: 14px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.9);
    }

    & p {
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 0;
    }
`;

const PostContent = styled.div`
    margin: 10px 10px;
`;

const PostActivities = styled.div`
    display: flex;
    margin: 10px 10px;
    align-items: center;
`;

const PostReaction = styled.div`
    display: flex;
    flex: 1;
    
    & img {
        margin: 0 0 0 -4px;
        background-color: #fff;
        border-radius: 50%;
    }

    & span {
        margin-left: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;
    }
`;

const PostShare = styled.div`
    & span {
        margin-left: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;

        &:nth-last-child() {
           color: red;
        }
    }
`;

const PostActions = styled.ul`
    margin: 10px 10px 0 10px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    
`;

const PostActionItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: center;
    cursor: pointer;

    :hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 5px;
    }

    & span {
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: 600;
        margin-left: 5px;
    }
`;

const UploadPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    & input {
        display: none;
    }
    
    & label {
        color: #0a66c2;
        font-size: 16px;
        font-weight: 600;
        padding: 5px 8px;
        cursor: pointer;

        :hover {
            background-color: rgba(112, 181, 249, 0.2);
            border-radius: 5px;
        }
    }
`;

const PhotoContainer = styled.div`
    width: 100%;
    overflow: auto;
    max-height: calc(100vh - 334px);

    & img {
        width: 100%;
    }
`;

const PostContainer = styled.div`
    padding: 25px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh - 334px);

    & textarea {
        padding: 15px 10px 10px 10px;
        width: 100%;
        border: none;
        box-sizing: border-box;
        resize: none;
        font-size: 16px;
        font-weight: 400;

        :focus {
            border: none;
            outline: none;
        }
    }
`;

const PostPhotoProfile = styled.div`
    display: flex;

    & h1 {
        font-size: 16px;
        font-weight: 600;
    }

    & button {
        background-color: transparent;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
        border: none;
        border-radius: 25px;
        padding: 8px 10px;
        align-items: center;
        display: flex;

        span {
            padding: 0 4px;
            font-size: 14px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.6);
        }
    }
`;

const PostAudience = styled.div`
    padding-left: 15px;
`;

const ImageContainer = styled.div`
    border: 1px solid rgba(0, 0 ,0, 0.08);
    border-radius: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & img {
        width: 100%;
    }
`;

const PostFooter = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    flex: 1;
`;

const PostFooterList = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

const PostFooterItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;

    :hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 50%;
    }
`;

const ButtonPrimary = styled.button`
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 8px 15px;
    border: none;
    background-color: #0a66c2;

    :hover {
        background-color: #09223b;
        color: hsla(0, 0%, 100%, 0.9);
    }
`;

export default Dashboard;