import styled, { keyframes } from "styled-components"
import { useState } from "react"

type loaderProps = {
    n: number
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    overflow:hidden;
    background-color:#001f25;
`

const animate = keyframes`
    0% {
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
`
const Span = styled.span<loaderProps>`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    transform:rotate(calc(36deg * ${({ n }) => n}));
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border-radius:50%;
        background:transparent;
        border:4px solid #00efff;
        box-sizing: border-box;
        box-shadow:0 0 20px #00efff,
            -30px -30px 0 #00efff,
            -30px -30px 20px #00efff,
            30px 30px 0 #00efff,
            30px 30px 20px #00efff,
            30px -30px 0 #00efff,
            30px -30px 20px #00efff,
            -30px 30px 0 #00efff,
            -30px 30px 20px #00efff
            ;
        animation:${animate} 5s linear infinite;
        animation-delay:calc(-0.25s * ${({ n }) => n});
        transform-origin:20px;
        transition:2s;
    }
`
const Loader = styled.div`
    position:relative;
    width:300px;
    height:300px;
    :hover ${Span} {
        &:before {
            transform-origin:250px;
            box-shadow:0 0 20px #00efff,
            -200px -200px 0 #00efff,
            -200px -200px 20px #00efff,
            200px 200px 0 #00efff,
            200px 200px 20px #00efff,
            200px -200px 0 #00efff,
            200px -200px 20px #00efff,
            -200px 200px 0 #00efff,
            -200px 200px 20px #00efff
            ;
        }
    }
`


export const Scatter = () => {
    const [hover, setHover] = useState(false)
    const toggle = () => { setHover(!hover)}
    return (
        <Container>
            <Loader
                onMouseLeave={toggle}
                onMouseEnter={toggle}
            >
                {data.map(i => <Span key={i} n={i} />)}
            </Loader>
        </Container>
    )
}
