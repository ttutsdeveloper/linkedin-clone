import React, {Fragment} from "react";
import styled from 'styled-components';

const Avatar = (props) => {
    return (
        <CircleImage src={props.user && props.user.picture} alt='' height={props.height} width={props.width}/>
    )
}

const CircleImage = styled.img`
    cursor: pointer;
    border-radius: 50%;
    height: ${(p) => p.height + 'px'};
    width: ${(p) => p.width + 'px'};
`

export default Avatar;