import styled from "styled-components"

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #333;
`
const Bowl = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    border : 8px solid transparent;
    &:before {
        content: "";
        position: absolute;
        width: 40%;
        height:30px;
        border: 15px solid #444;
        border-radius: 50%;
        left: 50%;
        top: --15px;
        transform: translateX(-50%);
        box-shadow: 0 10px #222;
    }
    &:after {
        position: absolute;
        left: 50%;
        top: 40%;
        width: 15px;
        height:80px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 10px #222;
        background: rgba(255,255,255,0.05);
    }
`
const Liquid = styled.div`
    position: absolute;
    top: 50px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: #41c1fb;
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
    filter:drop-shadow(0 0 80px #41c1fb);
`

export const InfinitLiquid = () => {
    return (
        <Container>
            <Bowl />
            <Liquid />
        </Container>
    )
}
