import styled, { keyframes } from "styled-components"

type delayProps = {
    d: number
}
const data = [0, 1, 2, 3, 4, 5, 6, 7]

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:linear-gradient(45deg, #006b, #1ecafc);
    font-family:'Oleo Script Swash Caps', cursive;
`
const Text = styled.h2`
    position:absolute;
    color: #fff;
    font-size:1.75em;
    font-weight:500;
`
const Loader = styled.div`
    position:relative;
    width:300px;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.25);
    filter: url(#Gooey);
`
const animate = (d) => keyframes`
    0%,10% {
        width: 100px;
        height: 100px;
        transform:rotate(0deg) translateX(120px);
    }
    40%,70% {
        width: 40px;
        height: 40px;
        transform:rotate(calc(360deg / 8 * ${d} ));
        box-shadow: 0 0 0 10px #fff;
    }
    90%,100% {
        width: 100px;
        height: 100px;
        transform:rotate(0deg) translateX(120px);
    }
`
const LoaderSpan = styled.span<delayProps>`
    position:absolute;
    left:0;
    width:100px;
    height:100px;
    background:#fff;
    border-radius:50%;
    animation: ${props => animate(props.d)} 5s ease-in-out infinite;
    animation-delay:${({ d }) =>
        d === 0 && 'calc(0.15s * 0)' ||
        d === 1 && 'calc(0.15s * 1)' ||
        d === 2 && 'calc(0.15s * 2)' ||
        d === 3 && 'calc(0.15s * 3)' ||
        d === 4 && 'calc(0.15s * 4)' ||
        d === 5 && 'calc(0.15s * 5)' ||
        d === 6 && 'calc(0.15s * 6)' ||
        d === 7 && 'calc(0.15s * 7)'
    };
    transform-origin:150px;
`

export const LiquidLoader = () => {
    return (
        <>
            <Container>
                <Text>Milk</Text>
                <Loader>
                    {data.map(i => <LoaderSpan d={i} />)}
                    {/* <LoaderSpan d={0} />
                    <LoaderSpan d={1} />
                    <LoaderSpan d={2} />
                    <LoaderSpan d={3} />
                    <LoaderSpan d={4} />
                    <LoaderSpan d={5} />
                    <LoaderSpan d={6} />
                    <LoaderSpan d={7} /> */}
                </Loader>
            </Container>
            <svg style={{ width: 0, height: 0 }}>
                <filter id="Gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    <feColorMatrix values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 20 -10
                        "/>
                </filter>
            </svg>
        </>
    )
}
