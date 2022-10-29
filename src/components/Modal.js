import React from "react";
import styled from 'styled-components';

const Modal = (props) => {

    const closeModalHandler = () => {
        const modal = document.getElementById('modal');
        if (!modal.classList.contains('active')) {
            modal.classList.remove('open');
            const body = document.getElementsByTagName('body');
            body[0].classList.remove('modal-open');
        }
    }

    const onMouseHoverHandler = () => {
        const modal = document.getElementById('modal');
        modal.classList.add('active');
    }

    const onMouseLeaveHandler = () => {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
    }

    const onCloseHandler  = () => {
        const modal = document.getElementById('modal');
        modal.classList.remove('open');
        const body = document.getElementsByTagName('body');
        body[0].classList.remove('modal-open');
    }

    return (
        <Container id="modal" onClick={closeModalHandler}>
            <PostModalContent onMouseOver={onMouseHoverHandler} onMouseLeave={onMouseLeaveHandler}>
                <PostModalHeader>
                    <h1>{props.title}</h1>
                    <img src='/images/close-button.svg' alt='' onClick={onCloseHandler}/>
                </PostModalHeader>
                <PostModalBody>
                    { props.child1 }
                </PostModalBody>
                <PostModalFooter>
                    {props.showFooter && 
                        <ButtonContainer>
                            <ButtonSecondary>
                                Cancel
                            </ButtonSecondary>
                            <ButtonPrimary onClick={props.onClickDone}>
                                {props.buttontTitle}
                            </ButtonPrimary>
                        </ButtonContainer>
                    }
                    { props.child2 }
                </PostModalFooter>
            </PostModalContent>     
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .75);
    display: none;
    
    &.open {
        display: block;
    }
`;

const PostModalContent = styled.div`
    width: 552px;
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;
    z-index: 2;
    overflow-y: auto;
    max-height: calc(100vh - 160px);
    top: 32px;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const PostModalHeader = styled.div`
    display: flex;
    padding: 10px 15px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    & h1 {
        flex: 1;
        font-size: 20px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.9);
    }

    & img {
        height: 20px;
        width: 20px;
        padding: 5px;
        cursor: pointer;
        :hover {
            background-color: rgba(0, 0, 0, 0.12);
            border-radius: 50%;
        }
    }
`;

const PostModalBody = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

const PostModalFooter = styled.div`
    padding: 10px 30px;
    display: flex;
    /* justify-content: flex-end; */
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    flex: 1;
`;


const ButtonSecondary = styled.button`
    border-radius: 25px;
    color: #0a66c2;
    font-size: 16px;
    font-weight: 600;
    padding: 8px 15px;
    box-shadow: inset 0 0 0 1px #0a66c2;
    border: none;
    background-color: transparent;

    :hover {
        background-color: rgba(112, 181, 249, 0.3);
        color: #004182;
        box-shadow: inset 0 0 0 2px #004182;
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

export default Modal;