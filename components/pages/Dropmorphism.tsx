import React from 'react'
import styled from 'styled-components'
import Image from "next/image"
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:#eee;
`
const Drop = styled.div`
    position:relative;
    width:150px;
    height:150px;
    box-shadow:inset 10px 10px 10px rgba(0,0,0,0.5),
    15px 25px 10px rgba(0,0,0,0.5),
    15px 20px 20px rgba(0,0,0,0.5),
    inset -10px -10px 15px rgba(255,255,255,0.9)
    ;
    border-radius:50%;
    &:before {
        content: "";
        position:absolute;
        top:35px;
        left:25px;
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:#fff;
    }
`

export const Dropmorphism = () => {
    return (
        <Wrapper>
            <Drop>
                <Image src="/img/detail/logo-apple.svg" width="50px" height="50px" />
            </Drop>
        </Wrapper>
    )
}
