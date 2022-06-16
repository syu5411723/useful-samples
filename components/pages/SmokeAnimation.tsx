import React from 'react'
import styled, { keyframes } from 'styled-components'


type StyleProps = {
    n: number
    delay: number
    AniDelay: number
}
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

const Span = styled.span<StyleProps>`
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
     &:nth-child(${({n}) => props.n})
`
const Video = styled.video`
    width:80%;
    position: absolute;
    top:50%;
    left:50%;
    translate:translate(-50%, -50%);
    display: flex;
`

export const Smokeanimation = () => {
    return (
        <Container>
            <Video src="/video/Tiny_Coding.mp4" autoPlay muted></Video>
            <Text>
                <Span n={1} delay={} AniDelay={}>R</Span>
                <Span n={2} delay={} AniDelay={}>E</Span>
                <Span n={3} delay={} AniDelay={}>V</Span>
                <Span n={4} delay={} AniDelay={}>E</Span>
                <Span n={5} delay={} AniDelay={}>A</Span>
                <Span n={6} delay={} AniDelay={}>L</Span>
            </Text>
        </Container>
    )
}
