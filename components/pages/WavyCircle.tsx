import styled, { keyframes } from "styled-components"
// import { Loader } from "../molcules/Detail/Loader"
import { Wave } from "../molcules/Detail/Wave"


const Loader = styled.div`
    position: relative;
    width: 300px;
    height:300px;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateX(60deg);
`

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:100vh;
    background-color: #333;
`


export const WavyCircle = () => {
    return (
        <Container>
            <Loader>
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
                <Wave />
            </Loader>
        </Container>
    )
}
