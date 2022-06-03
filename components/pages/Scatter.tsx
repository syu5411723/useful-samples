import styled from "styled-components"

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
const Loader = styled.div`
    position:relative;
    width:300px;
    height:300px;
`
const Span = styled.span<loaderProps>`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    transform:rotate(calc(3x6deg * ${({n}) => n}));
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
        box-shadow:0 0 20px #00efff
            -30px -30px 0 #00efff
            -30px -30px 20px #00efff;
            
    }
`


export const Scatter = () => {
    return (
        <Container>
            <Loader>
                {data.map(i => <Span key={i} n={i} />)}
            </Loader>
        </Container>
    )
}
