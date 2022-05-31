﻿import styled, { keyframes } from "styled-components"



const Container = styled.div`
    font-family: consolas;
    display:flex;
    justify-content: center;
    align-items: center;
    min-height:100vh;
    background-color:#111;
`
const ScanWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
`
const animate = keyframes`
    0%, 100% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
`
const animateLine = keyframes`
    0%, 100% {
        top: 0%;
    }
    50% {
        top: 100%;
    }
`
const FingerWrapper = styled.div`
    position: relative;
    width: 300px;
    height:380px;
    background:url("/img/detail/fingerprint_01.png");
    background-size:300px;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background:url("/img/detail/fingerprint_02.png");
        background-size:300px;
        animation: ${animate} 4s ease-in-out infinite;
    }
    &:after {
        content: "";
        position: absolute;
        top:0%;
        left:0%;
        width:100%;
        height:8px;
        background-color:#3fefef;
        border-radius:8px;
        filter:drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 63px #3fefef);
        animation: ${animateLine} 4s ease-in-out infinite;
    }
`

const animateText = keyframes`
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
`
const Text = styled.h3`
    text-transform:uppercase;
    font-size:2em;
    letter-spacing:3px;
    margin-top:20px;
    color:#3fefef;
    filter:drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 63px #3fefef);
    animation:${animateText} 1s steps(1) infinite;
`
export const FingerScan = () => {
    return (
        <Container>
            <ScanWrapper>
                <FingerWrapper></FingerWrapper>
                <Text>SCANNING ...</Text>
            </ScanWrapper>
        </Container>
    )
}
