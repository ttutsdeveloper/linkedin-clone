import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signInWithGoogle } from '../features/user/userSlice';

const Login = (props) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.users.user);

    if (user) {
        return <Navigate to='/dashboard' />
    }

    const dispatch = useDispatch()

    const suggestedTopics = ['See all Topics', 'Workplace', 'Job Search', 'Careers', 'Interviewing', 'Salary and Compensation', 'Interships', 'Employee Benefits'];
    const suggestedJobs = ['Engineering', 'Business Development', 'Finance', 'Administrative Assistant', 'Retail Associate', 'Customer Service', 'Operations', 'Information Technology', 'Marketing', 'Human Resources'];
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/login-logo.svg' alt=''/>
                </a>
                <TopNav>
                    <Menu>
                        <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" focusable="false" className="lazy-loaded">
                                <path d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z" fill="currentColor"></path>
                            </svg>
                            Discover
                        </a>
                    </Menu>
                    <Menu>
                        <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" focusable="false" className="lazy-loaded">
                                <path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" fill="currentColor"></path>
                            </svg>
                            People
                        </a>
                    </Menu>
                    <Menu>
                        <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" className="lazy-loaded">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fill-opacity=".25"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fill-opacity=".6"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor"></path>
                            </svg>
                            Learning
                        </a>
                    </Menu>
                    <Menu>
                        <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" focusable="false" className="lazy-loaded">
                                <path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" fill="currentColor"></path>
                            </svg>
                            Jobs
                        </a>
                    </Menu>
                </TopNav>
                <RightNav>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </RightNav>
            </Nav>
            <Main>
                <Section>
                    <Hero>
                        <FormContainer>
                            <h1>Welcome to your professional community</h1>
                            <Form>
                                <form>
                                    <InputContainer>
                                        <InputForm>
                                            <input type={'text'} placeholder=" "></input>
                                            <label>Email or phone number</label>
                                        </InputForm>
                                        <InputForm>
                                            <input type={'password'} placeholder=" "></input>
                                            <label>Password</label>
                                        </InputForm>
                                    </InputContainer>
                                    <a href='/'>
                                        Forgot Password?
                                    </a>
                                    <button type='button' onClick={() => navigate('/dashboard')}>
                                        Sign in
                                    </button>
                                    <ButtonSpacer>
                                        <span>or</span>
                                    </ButtonSpacer>
                                    <GoogleButton type='button' onClick={() => {
                                        dispatch(signInWithGoogle())
                                    }}>
                                        <img src='/images/google-icon.svg' alt=''/>
                                        <span>Sign in with Google</span>
                                    </GoogleButton>
                                </form>
                            </Form>
                        </FormContainer>
                        <img src='/images/hero-login.svg' alt=''/>
                    </Hero>
                </Section>
                <Section>
                    <JobPost>
                        <h2>See what you can do with LinkedIn</h2>
                        <List>
                            <ListItem>
                                <a href='/'>
                                    Search for a job
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="artdeco-icon lazy-loaded" focusable="false"><path d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z" fill="rgba(0, 0, 0, 0.6)"></path></svg>
                                    </i>
                                </a>
                            </ListItem>
                            <ListItem>
                                <a href='/'>
                                    Find a person you know
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="artdeco-icon lazy-loaded" focusable="false"><path d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z" fill="rgba(0, 0, 0, 0.6)"></path></svg>
                                    </i>
                                </a>
                            </ListItem>
                            <ListItem>
                                <a href='/'>
                                    Learn a new skill
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="artdeco-icon lazy-loaded" focusable="false"><path d="M14 12L8 3.06 9.55 2l6.19 9.15a1.5 1.5 0 010 1.69L9.55 22 8 20.94z" fill="rgba(0, 0, 0, 0.6)"></path></svg>
                                    </i>
                                </a>
                            </ListItem>
                        </List>
                    </JobPost>
                </Section>
                <Section>
                    <Suggested>
                        <h2>Explore topics you are interested in</h2>
                        <Topic>
                            <h3>Content Topics</h3>
                            <ButtonList>
                                { suggestedTopics.map((topic, index) => {
                                    return <ButtonListItem key={index}>
                                        <a href='/'>
                                            { topic }
                                        </a>
                                    </ButtonListItem>
                                })}
                            </ButtonList>
                        </Topic>
                    </Suggested>
                </Section>
                <Section>
                    <SuggestedJob>
                        <h2>Find the right job or internship for you</h2>
                        <Topic>
                            <h3>Suggested Searches</h3>
                            <ButtonList>
                                { suggestedJobs.map((job, index) => {
                                    return <ButtonListItem key={index}>
                                    <a href='/'>
                                        { job }
                                    </a>
                                </ButtonListItem>
                                }) }
                            </ButtonList>
                        </Topic>
                    </SuggestedJob>
                </Section>
                <Section>
                    <JobPost>
                        <h2>Post your job for millions of people to see</h2>
                        <ButtonListItem>
                            <a href='/' className='active'>
                               Post a Job
                            </a>
                        </ButtonListItem>
                    </JobPost>
                </Section>
            </Main>
        </Container>
    )
}

const Container = styled.div`

`;

const Nav = styled.nav`
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1128px;
    margin: auto;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }

    & > a {
        width: 135px;
        height: 34px;
        margin-right: auto;
        @media (max-width: 768px) {
            width: 84px;
            height: 21px;
        }
    }
`;

const RightNav = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    gap: 8px;
    
    & > a {
        column-gap: 8px;
    }

  
`;

const Join = styled.a`
    font-size: 16px;
    /* min-height: 48px; */
    font-weight: 600;
    border-radius: 24px;
    padding: 12px 24px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);

    &:hover {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
        background-color: rgba(0,0,0,.04);
    }
`;

const SignIn = styled.a`
    box-shadow: 0 0 0 1px #0a66c2;
    background-color: rgba(0, 0, 0, 0);
    color: #0a66c2;
    font-size: 16px;
    /* min-height: 48px; */
    font-weight: 600;
    border-radius: 24px;
    padding: 12px 24px;
    cursor: pointer;

    &:hover {
        background-color: rgba(112, 181, 249, 0.1);
        color: #004182;
    }
`;

const TopNav = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;
    align-items: center;

    &::after {
        content: '';
        display: flex;
        width: 1px;
        height: 37px;
        background-color: rgba(0,0,0,0.6);
        margin-right: 8px;
    }

    @media (max-width: 767px) {
        display: none;
    }
`;

const Menu = styled.div`
    width: 80px;
    height: 52px;

    & > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: rgba(0,0,0,0.6);

        &:hover {
            color: rgba(0,0 ,0 , 0.9);
        }
    }
    
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

const Section = styled.div`
    width: 100%;
    max-width: 1128px;
    position: relative;
`;

const FormContainer = styled.div`
    padding-right: 42px;
    width: 55%;
    position: relative;
    align-items: center;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: initial;
        padding-right: initial;
    }
`;

const Form = styled.div`
    
    form {
        margin-top: 24px;
        margin-bottom: 16px;
        width: 408px;

        @media (max-width: 768px) {
            width: 100%;
            margin-top: 0;
        }
    }

    label {
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
        color: rgba(0,0,0,0.6);
        position: absolute;
        background-color: transparent;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 12px;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        pointer-events: none;
        box-sizing: border-box;
    }

    a {
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
        color: rgba(0,0,0,0.9);
        display: inline-block;
        margin: 16px 0 24px 0;
        text-decoration: none;
    }

    button {
        border: 0;
        border-radius: 2px;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        font-family: inherit;
        height: 32px;
        line-height: 48px;
        overflow: hidden;
        outline-width: 2px;
        padding: 0 32px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition-duration: 167ms;
        transition-property: background-color,box-shadow,color;
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        vertical-align: middle;
        z-index: 0;
        height: 56px;
        width: 100%;
        border-radius: 28px;
        line-height: normal;
        font-weight: normal;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2977c9;
    }

    
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const InputForm = styled.div`
    position: relative;
    margin-top: 12px;
    width: 100%;
    background-color: #fff;

    input {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
        height: 48px;
        width: 100%;
        background-color: transparent;
        padding: 20px 12px 4px;
        outline: none;
        color: rgba(0, 0, 0, 0.9);
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.6);
        box-sizing: border-box;

        &:focus ~ label {
            font-size: 12px;
            line-height: 1.33333;
            font-weight: 400;
            color: rgba(0,0,0,0.6);
            padding-top: 6px;
            -webkit-transition-delay: 0s;
            transition-delay: 0s;
        }

        &:not(:placeholder-shown) ~ label {
            font-size: 12px;
            line-height: 1.33333;
            font-weight: 400;
            color: rgba(0,0,0,0.6);
            padding-top: 6px;
            -webkit-transition-delay: 0s;
            transition-delay: 0s;
        }
    }

    
`;

const ButtonSpacer = styled.div`
    margin: 16px 0;
    padding: 0 12px;
    align-items: center;
    display: flex;

    &::after, &::before {
        background-color: rgba(0,0,0,0.35);
        content: '';
        height: 1px;
        width: 50%;
    }
    span {
        padding: 0 16px;
        font-weight: 400;
        color: rgba(0,0,0,0.6);
        line-height: 1.42857;
    }

`;

const GoogleButton = styled.button`
    background-color: #fff !important;
    color: rgba(0,0,0,0.6) !important;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    
    span {
        padding-left: 24px;
    }

    img {
        height: 24px !important;
        width: 24px !important;
    }
`;

const Hero = styled.div`
    display: flex;
    position: relative;
    padding-top: 40px;
    align-items: center;
    align-self: flex-start;

   

    & h1 {
        font-weight: 200;
        font-size: 56px;
        line-height: 1.2;
        color: #8f5849;
    }

    & img {
        width: 700px;
        height: 560px;
        flex-shrink: 1;
        position: relative;
    }

    @media (max-width: 768px) {
        padding: 24px 16px;
        flex-direction: column;
        gap: 0;
        align-items: initial;

        & img {
            height: 214px;
            width: 374px;
            align-self: center;
        }

        & h1 {
            font-weight: 300;
            font-size: 32px;
            padding-bottom: 24px;
        }
    }
`;

const JobPost = styled.div`
    display: flex;
    gap: 64px;
    align-items: center;
    background-color: rgb(241 236 229);
    padding: 60px 16px;
    
    & h2 {
        font-size: 40px;
        font-weight: 400;
        color: #b24020;
        width: 408px;
        margin-right: 72px;
    }

    &::after {
        content: '';
        background-color: rgb(241 236 229);
        width: 100vw;
        width: 100vw;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
        z-index: -2;
        right: calc((1128px - 100vw) / 2);
    }

    @media (max-width: 768px) {
        padding: 60px 16px;
        flex-wrap: wrap;
        gap: 0;

        & h2 {
            font-size: 32px;
            margin-right: 0;
            margin-bottom: 24px;
        }
    }
`;

const List = styled.ul`
    
`;

const ListItem = styled.li`
    list-style: none;
    display: flex;
    margin-bottom: 16px;
    align-items: center;

    a {
        text-decoration: none;
        width: 408px;
        padding: 16px;
        background-color: white;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.25;
        color: rgba(0, 0, 0, 0.9);
        border-radius: 8px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3)
        }

        i {
            margin-left: 16px;
        }

        @media (max-width: 767px){
            width: 300px;
        }
    }
`;

const Suggested = styled.div`
    display: flex;
    background-color: #f3f2f0;;
    padding: 60px 0;
    gap: 64px;

    & h2 {
        font-size: 48px;
        font-weight: 200;
        color: rgba(0, 0, 0, 0.9);
        width: 408px;
        margin-right: 72px;
        flex-shrink: 0;
    }

    & h3 {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.25;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 20px;
    }

    &::after {
        content: '';
        background-color: #f3f2f0;
        width: 100vw;
        width: 100vw;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
        z-index: -2;
        right: calc((1128px - 100vw) / 2);
    }

    @media (min-width: 768px) and (max-width: 991px) {
        flex-wrap: wrap;
        padding: 60px 16px;
        gap: 0;

        & h2 {
            width: initial;
            margin-bottom: 24px;
        }
    }

    @media (max-width: 767px){
        flex-direction: column;
        gap: 0;
        padding: 56px 16px;

        & h2 {
            font-size: 32px;
            font-weight: 400;
            margin-bottom: 24px;
        }
    }
`;

const Topic = styled.div`

`;

const ButtonList = styled.ul`
`;

const ButtonListItem = styled.li`
    list-style: none;
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    float: left;
    margin-right: 6px;
    margin-bottom: 12px;

    & a {
        text-decoration: none;
        padding: 12px 24px;
        background-color: white;
        font-size: 20px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.75);
        border-radius: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.75);
        background-color: transparent;

        &.active {
            box-shadow: 0 0 0 1px #0a66c2;
            color: #0a66c2;
        }
    }
`;

const SuggestedJob = styled.div`
    display: flex;
    padding: 60px 0;
    gap: 64px;

    & h2 {
        font-size: 48px;
        font-weight: 200;
        color: rgba(0, 0, 0, 0.9);
        width: 408px;
        margin-right: 72px;
        flex-shrink: 0;
    }

    & h3 {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.25;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 20px;
    }

    &::after {
        content: '';
        width: 100vw;
        width: 100vw;
        height: 100%;
        top: 0;
        right: 0;
        position: absolute;
        z-index: -2;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        flex-wrap: wrap;
        padding: 60px 16px;
        gap: 0;

        & h2 {
            width: initial;
            margin-bottom: 24px;
        }
    }

    @media (max-width: 767px){
        flex-direction: column;
        gap: 0;
        padding: 56px 16px;

        & h2 {
            font-size: 32px;
            font-weight: 400;
            margin-bottom: 24px;
        }
    }
`;

export default Login;