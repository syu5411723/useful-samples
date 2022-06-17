import styled, { keyframes } from "styled-components"

type ColorProps = {
    color: string
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-color:#000;
`
const EnergyWrapper = styled.div`
    position:relative;
    width: 300px;
    height: 300px;
`
const animate = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`
const EnergySpan = styled.span<ColorProps>`
    position:absolute;
    border-radius:50%;
    mix-blend-mode:plus-lighter;
    filter:blur(30px);
    animation: ${animate} 5s linear infinite;
    width: ({ color }) =>
        color === 'yelow' && 'calc(300px + 18px)' ||
        color === 'bule' && 'calc(300px + 13px)' ||
        color === 'red' && 'calc(300px + 15px)' ||
        color === 'green' && 'calc(300px + 20px)'
    };
    height: ${({ color }) =>
        color === 'yelow' && 'calc(300px + 18px)' ||
        color === 'bule' && 'calc(300px + 13px)' ||
        color === 'red' && 'calc(300px + 15px)' ||
        color === 'green' && 'calc(300px + 20px)'
    };
    background-color: ${({ color }) =>
        color === 'yelow' && '#fbad04' ||
        color === 'bule' && '#03a1d9' ||
        color === 'red' && '#f7036d' ||
        color === 'green' && '#93ff16'
    };

    animation-duration: ${({ color }) =>
        color === 'yelow' && 'calc(2.5s)' ||
        color === 'bule' && 'calc(5s)' ||
        color === 'red' && 'calc(7.5s)' ||
        color === 'green' && 'calc(10s)'
    };
    transform-origin:${({ color }) =>
        color === 'yelow' && 'calc(100px + 18px)' ||
        color === 'bule' && 'calc(100px + 13px)' ||
        color === 'red' && 'calc(100px + 15px)' ||
        color === 'green' && 'calc(100px + 20px)'

    };
    &:nth-child(even) {
        animation-direction: reverse;
    }
`



export const Energy = () => {
    return (
        <Container>
            <EnergyWrapper>
                <EnergySpan color="yelow" />
                <EnergySpan color="bule" />
                <EnergySpan color="red" />
                <EnergySpan color="green" />
            </EnergyWrapper>
        </Container>
    )
}
