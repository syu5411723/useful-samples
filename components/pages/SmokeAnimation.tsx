import styled, { css, keyframes } from "styled-components"
import react from "react"

type TextProps = {
    n: number
    delay:number
}

const textData = [
    { id: 1, text: "C", delay: 1 },
    { id: 2, text: "O", delay: 2 },
    { id: 3, text: "D", delay: 2.5 },
    { id: 4, text: "E", delay: 3 },
    { id: 5, text: "S", delay: 3.5 },
    { id: 6, text: "S", delay: 3.75 },
    { id: 7, text: "S", delay: 4 },
    { id: 8, text: "I", delay: 4.5 },
    { id: 9, text: "E", delay: 5 },
]

const Container = styled.section`
    height:100vh;
    background:#000;
`
const Text = styled.h1`
    margin:0;
    padding:0;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:100%;
    text-align:center;
    color:#ddd;
    font-size:5em;
    font-family:sans-serif;
    letter-spacing:0.2em;
`
const animate = keyframes`
    0% {
        opacity: 0;
        transform:rotateY(90deg);
        filter:blur(10px)
    }
    100% {
        opacity: 1;
        transform:rotateY(0deg);
        filter:blur(0)
    }
`
const Span = styled.span<TextProps>`
    opacity:0;
    display: inline-block;
    animation:${animate} 1s linear forwards;
    &:nth-child(${({n}) => n}) {

    }
`



export const Smokeanimation = () => {
    return (
        <Container>
            <Text>
                {textData.map(data => <Span delay={data.delay} n={data.id} key={data.id}>{data.text}</Span>)}
            </Text>
        </Container>
    )
}
