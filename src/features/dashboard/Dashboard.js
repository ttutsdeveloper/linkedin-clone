import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import Ads from "./Ads";
import CreatePost from "./CreatePost";
import Header from "./Header";
import Modal from "../../components/Modal";
import ProfileCard from "./ProfileCard";

const Dashboard = () => {

    const user = useSelector(state => state.users.user);

    return (
        <Content>
            <DashboardContainer>
                <Header user={user}/>
                <LayoutContainer>
                    <ProfileCard />
                    <NewsFeed>
                        <CreatePost user={user} />
                        <PostList>
                            {
                                [0, 1, 2, 3, 4].map((data) => {
                                    return  <PostListItem key={data}>
                                        <Card>
                                        <PostHeader>
                                            <PostProfile>
                                                <CircleImage src={user && user.picture} alt=''/>
                                                <div>
                                                    <a href="/">
                                                        John Paul I. <span>3rd +</span>
                                                    </a>
                                                    <p> Position</p>
                                                    <p>1 week</p>
                                                </div>
                                            </PostProfile>
                                            <PostContent>
                                                <span>
                                                    Hire me. I'm open to work as a Front end developer using React and Angular.
                                                </span>
                                            </PostContent>
                                            <PostActivities>
                                                <PostReaction>
                                                    <img src='/images/like-icon.svg' alt=''/>
                                                    <img src='/images/heart-icon.svg' alt=''/>
                                                    <img src='/images/clap-icon.svg' alt=''/>
                                                    <span>John Paul and 1,841 others</span>
                                                </PostReaction>
                                                <PostShare>
                                                    <span>1, 136 comments</span>
                                                    <span>17 reposts</span>
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
            <Modal title="Edit your photo">
                <UploadPhoto>
                    <input type={'file'} id="file-upload"/>
                    <label for="file-upload">Select images to share</label>
                </UploadPhoto>

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

export default Dashboard;