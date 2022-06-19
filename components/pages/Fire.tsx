import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:#0e0e0e;
`
const TextWrapper = styled.div`
    position:relative;
    width:100%;
    text-align:center;
`
const Text = styled.h2`
    position:relative;
    color:#ffeb3b;
    font-weight:600;
    font-size:16em;
    -webkit-box-reflect:below -95px linear-gradient(transparent, #000100) ;
    text-shadow:0 0 10px #ff8c3b,
    0 0 40px #ff8c3b,
    0 0 80px #ff8c3b,
    0 0 160px #ff8c3b,
    0 0 240px #ff8c3b

    ;
`
const SVG = styled.svg``
const Filter = styled.filter``
export const Fire = () => {
    return (
        <Container>
            <TextWrapper>
                <Text>Fire</Text>
            </TextWrapper>
            <SVG>

            </SVG>

        </Container>
    )
}
