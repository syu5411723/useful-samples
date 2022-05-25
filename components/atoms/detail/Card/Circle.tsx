import styled from "styled-components"
import Image from "next/image"
import { motion } from 'framer-motion'

export const CircleWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    overflow: hidden;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:#f00;
        clip-path:circle(120px at center);
        transition: 0.4s;
    }
`
export const ImageWrapper = styled(motion.div)`
    position:relative;
    width:200px;
    height:170px;
`
const imageV = {
    close: { scale: 1, transition: { duration: 0.1 } },
    open: { scale: 0, transition: { duration: 0.1 } },
}

export const Circle = ({ logoImg, hover }) => {
    return (
        <>
            <CircleWrapper>
                <ImageWrapper
                    variants={imageV}
                    animate={hover ? "open" : "close"}
                >
                    <Image src={logoImg} layout="fill" objectFit="cover" />
                </ImageWrapper>
            </CircleWrapper>
        </>
    )
}
