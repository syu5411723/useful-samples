import React from 'react'
import styled from 'styled-components'

const Container = styled.section``
const Wrapper = styled.div`
    position: relative;
    top: 50px;
`
const CupWrapper = styled.div`
    position:relative;
    width: 280px;
    height: 300px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-bottom-left-radius:45%;
    border-bottom-right-radius: 45%;
`
const Top = styled.div`
    position:absolute;
    top:-30px;
    left: 0;
    width:100%;
    height:60px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
`
const Cirecle = styled.div`
    position:absolute;
    top:5px;
    left: 10px;
    width: calc(100% - 20px);
    height: 50px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-radius:50%;
    box-sizing: border-box;
`

export const Steame = () => {
    return (
        <Container>
            <Wrapper>
                <CupWrapper>
                    <Top>

                    </Top>
                </CupWrapper>
            </Wrapper>
        </Container>
    )
}
