import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Dashboard = () => {

    const user = useSelector(state => state.users.user);

    return (
        <Content>
            <DashboardContainer>
                <Header>
                    <Logo>
                        <a href="/">
                            <img src='/images/linkedin-logo.svg' alt=''/>
                        </a>
                    </Logo>
                    <Nav>
                        <Menu>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                                </svg>
                                <span>Home</span>
                            </a>
                        </Menu>
                        <Menu>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" focusable="false" className="lazy-loaded">
                                    <path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" fill="currentColor"></path>
                                </svg>
                                <span>My Network</span>
                            </a>
                        </Menu>
                        <Menu>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" focusable="false" className="lazy-loaded">
                                    <path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" fill="currentColor"></path>
                                </svg>
                                <span>Jobs</span>
                            </a>
                        </Menu>
                        <Menu>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                                </svg>
                                <span>Messaging</span>
                            </a>
                        </Menu>
                        <Menu>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                                </svg>
                                <span>Notifications</span>
                            </a>
                        </Menu>
                        <Menu>
                            <a href='/'>
                                <CircleImage src={user && user.picture} alt=''/>
                                <p>Me
                                    <span>
                                        <img src='/images/caret-down.svg' alt=''/>
                                    </span>
                                </p>
                                
                            </a>
                        </Menu>
                    </Nav>
                </Header>
                <LayoutContainer>
                    <ProfileLayout>
                        <Card>
                            <ProfileContainer>
                                <ProfileBanner>
                                </ProfileBanner>
                                <CircleImage src={user && user.picture} alt=''/>
                                <ProfileDetails>
                                    <h1>
                                        John Paul Inhog
                                    </h1>
                                    <p>Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Pasig</p>
                                </ProfileDetails>
                                <ProfileView>
                                    <ProfileViewItem>
                                        <p>Who's viewed your profile</p>
                                        <span>22</span>
                                    </ProfileViewItem>
                                    <ProfileViewItem>
                                        <p>Impressions of your post</p>
                                        <span>1,462</span>
                                    </ProfileViewItem>
                                </ProfileView>
                                <ProfileItem>
                                    <p>Access exclusive tools & insights</p>
                                    <a href="/">
                                        <img src='/images/hire-icon.svg' alt=''/>
                                        Get Hired Faster. Try Premium Free
                                    </a>
                                </ProfileItem>
                                <ProfileItem>
                                    <a href="/">
                                        <img src='/images/bookmark.svg' alt=''/>
                                        My Items
                                    </a>
                                </ProfileItem>
                            </ProfileContainer>
                        </Card>
                        <Card>
                            <RecentContainer>
                                <h1>Recent</h1>
                                <HashTagList>
                                    <HashTagItem>
                                        <img src='/images/hashtag-icon.svg' alt=''/>
                                        <span>Hire me</span>
                                    </HashTagItem>
                                    <HashTagItem>
                                        <img src='/images/hashtag-icon.svg' alt=''/>
                                        <span>Programming</span>
                                    </HashTagItem>
                                </HashTagList>
                            </RecentContainer>
                        </Card>
                    </ProfileLayout>
                    <NewsFeed>
                        <CreatePost>
                            <Card>
                                <StartPost>
                                    <CircleImage src={user && user.picture} alt=''/>
                                    <button>Start a post</button>
                                </StartPost>
                                <PostType>
                                    <PostTypeItem>
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
                        </CreatePost>
                        <PostList>
                            {
                                [0, 1, 3].map(() => {
                                    return  <PostListItem>
                                        <Card>
                                        <PostHeader>
                                            <PostProfile>
                                                <CircleImage src={user && user.picture} alt=''/>
                                                <div>
                                                    <a>
                                                        John Paul I. <span>3rd +</span>
                                                    </a>
                                                    <p> Position</p>
                                                    <p>1 week</p>
                                                </div>
                                            </PostProfile>
                                            <PostContent>
                                                <span>
                                                    I was INTERVIEWING an exiting employee, and here are 5 insights I would like to share with you:

                                                    1. Mental resignation happens long before. The physical resignation is the final act of a loss of hope.
                                                    2. You can’t try to appreciate someone on their way out. It is a little too late.
                                                    3. Money motivates only to a point. People rarely leave just for money.
                                                    4. Career progression is one of the biggest factors to retention. Every job plateaus. Create a career path for each employee to ensure they stay motivated.
                                                    5. Once trust is broken, it's hard to regain.

                                                    Your employees are your most valuable asset. Don't take them for granted or treat them poorly. Loyalty is a two-way street.
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
                    <AdsContainer>
                        <AddList>
                            <AddListItem>
                                <Card>
                                    <AdsContent>
                                        <h1>Add to your feed</h1>
                                        <Recommendations>
                                            <RecommendationItem>
                                                <img src='/images/google-img.jpg' alt=''/>
                                                <a>
                                                    Google
                                                    <span>Company Computer Software</span>
                                                    <button>+ Follow</button>
                                                </a>
                                            </RecommendationItem>
                                            <RecommendationItem>
                                                <img src='/images/google-img.jpg' alt=''/>
                                                <a>
                                                    Google
                                                    <span>Company Computer Software</span>
                                                    <button>+ Follow</button>
                                                </a>
                                            </RecommendationItem>
                                            <RecommendationItem>
                                                <img src='/images/google-img.jpg' alt=''/>
                                                <a>
                                                    Google
                                                    <span>Company Computer Software</span>
                                                    <button>+ Follow</button>
                                                </a>
                                            </RecommendationItem>
                                        </Recommendations>
                                    </AdsContent>
                                </Card>
                            </AddListItem>
                        </AddList>
                    </AdsContainer>
                </LayoutContainer>
            </DashboardContainer>
        </Content>
    )

}


const Header = styled.header`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    width: 100vw;
    align-items: flex-end;
    position: fixed;
    top: 0;
    z-index: 1;
    margin: auto;
    max-width: 1128px;
    width: 100%;

    & img {
        height: 2.4rem;
        width: 2.4rem;
    }

    @media (max-width: 768px) {
        padding: .5rem 1rem;
    }

    &::after {
        content: '';
        background-color: #fff;
        width: 100vw;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
        z-index: -2;
        right: calc((1128px - 100vw) / 2);
    }

`;

const Logo = styled.div`
    margin-right: auto;

    & img {
        height: 2.4rem;
        width: 2.4rem;
    }

`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    align-items: baseline;
    
    @media (max-width: 768px) {
        align-items: center;
    }
`;

const Menu = styled.div`
    width: 80px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        height: 24px;
        width: 24px;
    }
   
    & > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: rgba(0,0,0,0.6);
        font-weight: 400;
        font-size: 12px;
        display: flex;
        line-height: 1.5;

        &:hover {
            color: rgba(0,0 ,0 , 0.9);
        }
    }

    span > img {
        height: 16px;
        width: 16px;
        position: relative;
        top: 3px;
    }
    
    @media (max-width: 768px) {
        width: 48px;

        span {
            display: none;
        }
    }
`;

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
    flex-direction: row;
    gap: 25px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 20px;
    }
   
`;

const ProfileLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 225px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Card = styled.div`
    background: white;
    border-radius: 10px;
`;

const ProfileBanner = styled.div`
    background-image: url('/images/profile-banner.svg');
    background-position: center;
    background-size: cover;
    display: block;
    height: 56px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        align-self: center;
        position: absolute;
        top: 20px;
        border: 2px solid white;
    }
`;

const ProfileDetails = styled.div`
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin-top: 30px;
    
    & h1 {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 600;
    }

    & p {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
    }
`;

const ProfileView = styled.ul`
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

`;

const ProfileViewItem = styled.li`
    display: flex;
    list-style-type: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 2;
    
    & p {
        color: rgba(0, 0, 0, 0.6);
        margin-right: auto;
    }

    & span {
        color: #0a66c2;
    }
`;

const ProfileItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;
   

    &:hover{
        &:not(:last-child) {
            a {
                color: #004182;
            }
        }
        background-color: rgba(0, 0, 0, 0.08);
    }

    & p {
        color: rgba(0, 0, 0, 0.6);
        font-size: 12px;
    }

    & img {
        height: 24px;
        width: 24px;
        margin-right: 2px;
        margin-bottom: 0;
        border: none;
        position: initial;
    } 

    & a {
        display: flex;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 600;
    }

    :last-child {
        a {
            text-decoration: none;
        }
    }
`;

const NewsFeed = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CreatePost = styled.div`
    width: 100%;
    & img {
        height: 48px;
        width: 48px;
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

const AdsContainer = styled.div`
    width: 315px;
`;

const AddList = styled.ul`
`;

const AddListItem = styled.li`
    list-style-type: none;
`;

const AdsContent = styled.div`
    padding: 10px;

    & h1 {
        color: rgba(0, 0, 0, 0.9);
        font-size: 16px;
        font-weight: 600;
    }
`;

const Recommendations = styled.ul`
`;
const RecommendationItem = styled.li`
    list-style-type: none;
    display: flex;
    margin: 10px 0;

    & img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 10px;
    }

    & a {
        display: flex;
        flex-direction: column;
        color: rgba(0, 0, 0, 0.9);
        font-size: 14px;
        font-weight: 600;

        span {
            color: rgba(0, 0, 0, 0.6);
            font-size: 12px;
        }

        button {
            border-radius: 25px;
            background: transparent;
            color: rgba(0, 0, 0, 0.6);
            width: 100px;
            padding: 5px 10px;
            font-size: 16px;
            border: 1px solid  rgba(0, 0, 0, 0.6);
            margin-top: 5px;
        }
    }
`;

const RecentContainer = styled.div`


    & h1 {
        font-size: 12px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.9);
        padding: 5px 10px;
    }
`;


const HashTagList = styled.ul`
`;

const HashTagItem = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 5px 10px;

    :hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    & span {
        font-size: 12px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.6);
        margin-left: 10px;
    }
`;

export default Dashboard;