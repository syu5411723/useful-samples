import React from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0%, 100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    } 
    50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
`

const Container = styled.section`
    font-family:'Poppins', sanse-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-color:#000;
`
const Wrapper = styled.div`
    position:relative;
`
const Text = styled.h2`
    position:absolute;
    color:#fff;
    transform: translate(-50%, -50%);
    font-size:8em;
    &:nth-child(1) {
        color:transparent;
        -webkit-text-stroke:2px #03a9f4;
    }
    &:nth-child(2) {
        color:#03a9f4;
        animation: ${animate} 4s infinite;
    }
`

export const WaveText = () => {
    return (
        <Container>
            <Wrapper>
                <Text>WATER</Text>
                <Text>WATER</Text>
            </Wrapper>
        </Container>
    )
}
