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
    width:300px;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:inset 10px 10px 10px rgba(0,0,0,0.05),
    15px 25px 10px rgba(0,0,0,0.05),
    15px 20px 20px rgba(0,0,0,0.05),
    inset -10px -10px 15px rgba(255,255,255,0.9)
    ;
    border-radius:50%;
    &:before {
        content: "";
        position:absolute;
        top:70px;
        left:50px;
        width:40px;
        height:40px;
        border-radius:50%;
        background-color:#fff;
    }
    &:after {
        content: "";
        position:absolute;
        top:50px;
        left:100px;
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
                <Image src="/img/detail/logo-apple.svg" width="100px" height="100px" />
            </Drop>
        </Wrapper>
    )
}
