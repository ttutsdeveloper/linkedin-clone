import React from "react";
import styled from 'styled-components';

import Card from '../../components/Card';

const Ads = () => {
    return (
        <Container>
            <AddList>
                <AddListItem>
                    <Card>
                        <AdsContent>
                            <h1>Add to your feed</h1>
                            <Recommendations>
                                {
                                    [1, 2, 3, 4].map(data => {
                                        return <RecommendationItem key={data}>
                                            <img src='/images/google-img.jpg' alt=''/>
                                            <a href="/">
                                                Google
                                                <span>Company Computer Software</span>
                                                <button>+ Follow</button>
                                            </a>
                                        </RecommendationItem>
                                    })
                                }
                            </Recommendations>
                        </AdsContent>
                    </Card>
                </AddListItem>
            </AddList>
        </Container>
    )
}


const Container = styled.div`
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

export default Ads;