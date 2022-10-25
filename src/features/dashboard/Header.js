import React, { Fragment } from "react";
import styled from 'styled-components';
import Avatar from "../../components/Avatar";


const Header = (user) => {
    return (
        <Fragment>
             <HeaderContainer>
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
                                <Avatar user={user} height={24} width={24} />
                                <p>Me
                                    <span>
                                        <img src='/images/caret-down.svg' alt=''/>
                                    </span>
                                </p>
                                
                            </a>
                        </Menu>
                    </Nav>
                </HeaderContainer>
        </Fragment>
    )
}


const HeaderContainer = styled.header`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    width: 100vw;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    margin: auto;
    max-width: 1128px;
    width: 100%;

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

export default Header;