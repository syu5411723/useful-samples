import { VFC } from 'react'
import Image from "next/image"
import styled from 'styled-components'
import { motion } from 'framer-motion'

type Props = {
    img: string
}

const Wrapper = styled(motion.div)`
    position: relative;
    width:90%;
    height:20vw;
`



export const ItemImage: VFC<Props> = ({img}) => {
    return (
        <Wrapper>
            <Image src={img} layout="fill" objectFit='cover' />
        </Wrapper>
    )
}