import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
    position:relative;
    background:black;
    width:100vw;
    height:100vh;
`
const Text = styled.div`
    width:80%;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    display:flex;
    justify-content:space-between;
`

const Reveal = keyframes`
    100% {
        opacity: 1;
        filter:blur(0px);
    }
`

const Span = styled.span`
    text-align:center;
    font-weight:800;
    font-size:30px;
    color:#777;
    transition: 1s;
    --webkit-transition: 1s;
    -moz-transition: 1s;
    animation: ${Reveal} 2.5s linear forwards;
    opacity:0;
    filter: blur(13px);
`



export const Smokeanimation = () => {
    return (
        <Container>
            <Text>
                <Span>R</Span>
                <Span>E</Span>
                <Span>V</Span>
                <Span>E</Span>
                <Span>A</Span>
                <Span>L</Span>
            </Text>
        </Container>
    )
}
