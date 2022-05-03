import { VFC } from 'react'
import Image from "next/image"
import styled from 'styled-components'
import { motion } from 'framer-motion'


type Props = {
    img: string
    isHover: any
}
const Container = styled.div`
    overflow: hidden;
`

const Wrapper = styled(motion.div)`
    position: relative;
    width:100%;
    height:20vw;
    border-radius:5%;
`

const imageV = {
    hover: { scale: 1 },
    unHover: { scale: 1.03, duration: 0.5 }
}




export const ItemImage: VFC<Props> = ({ img, isHover }) => {
    return (
        <Container>
            <Wrapper
                variants={imageV}
                animate={isHover ? "unHover" : "hover"}
            >
                <Image src={img} layout="fill" objectFit='cover' />
            </Wrapper>
        </Container>
    )
}