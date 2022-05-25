import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled(motion.div)`
    position: relative;
    width: 80%;
    padding:20px 20px 20px 40px;
`
const LogoText = styled.h2`
    color: #fff;
    text-transform:uppercase;
    font-size:2.5em;
    line-height:1em;
`
const Lorem = styled.p`
    color: #fff;
    width: 100%;
`
const Button = styled.div`
    position:relative;
    color: #111;
    background-color:#fff;
    padding:10px 20px;
    border-radius:10px;
    margin-top: 10px;
    display:inline-block;
    font-weight:500;
`
const wrapperV = {
    close:{y:"20%", opacity:0, transition:{duration: 0.2 }},
    open:{y:"0%", opacity:1, transition: { duration: 0.5 }},
}

export const Content = ({hover}) => {
    return (
        <ContentWrapper
            variants={wrapperV}
            animate={hover ? "open" : "close"}
        >
            <LogoText>
                CocaCola
            </LogoText>
            <Lorem>Lorem ipsum dolor sit amet</Lorem>
            <Lorem>consectetur adipisicing elit.</Lorem>
            <Lorem> Cupiditate, earum accusamus</Lorem>
            <Lorem>est placeat qui voluptas.</Lorem>
            <Lorem>Quibusdam quo vero doloribus</Lorem>
            <Button>
                Explor
            </Button>
        </ContentWrapper>
    )
}
