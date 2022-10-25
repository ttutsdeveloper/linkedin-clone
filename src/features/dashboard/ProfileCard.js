import React from "react";
import styled from 'styled-components';
import Avatar from "../../components/Avatar";
import Card from '../../components/Card';

const ProfileCard = (props) => {
    return (
        <ProfileLayout>
            <Card>
                <ProfileContainer>
                    <ProfileBanner>
                    </ProfileBanner>
                    <Avatar user={props.user} height={64} width={64} />
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
            <RecentContainer>
                <Card>
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
              
                </Card>
            </RecentContainer>
        </ProfileLayout>
    )
}

const ProfileLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 225px;

    @media (max-width: 768px) {
        width: 100%;
    }
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

const RecentContainer = styled.div`

    position: sticky;
    top: 70px;

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

export default ProfileCard;