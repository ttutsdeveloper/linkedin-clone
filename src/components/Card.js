import React from "react";
import styled from 'styled-components';

const Card = (props) => {
    return <CardContainer>
        {props.children}
    </CardContainer>
}

const CardContainer = styled.div`
    background: white;
    border-radius: 10px;
`;

export default Card;
