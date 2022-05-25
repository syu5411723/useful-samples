import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
    position: absolute;
    z-index: 1000;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
`
const ImageWrapper = styled(motion.div)`
    position: relative;
    height:450px;
    width:225px;
`
const wrapperV = {
    close: { x: "50%", scale: 0, transition:{ duration: 0.2 }},
    open: { x: "72%", scale: 1, transition:{ duration: 0.5 } },
}

export const CocaImage = ({ img, hover }) => {
    return (
        <Container>
            <ImageWrapper
                variants={wrapperV}
                animate={hover ? "open" : "close"}
            >
            <Image src={img} layout="fill" objectFit="contain" />
        </ImageWrapper>
        </Container >
    )
}
