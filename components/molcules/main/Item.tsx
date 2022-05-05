import { useState } from "react"
import styled from 'styled-components'
import Link from "next/link"


import { ItemBottom } from '../../atoms/main/ItemBottom'
import { ItemImage } from '../../atoms/main/ItemImage'
import { pc, sp, tab } from "../../design/Media"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
    background-color:#202020;
    margin-bottom:50px;
    cursor: pointer;
    ${sp`
        width:90%;
    `}
    ${tab`
        width:45%;
    `}
    ${pc`
        width:33%;
    `}
`
const Inner = styled.div`
    padding:3%;
`
const wrapperV = {
    hidden: {opacity: 0, y: "15px"},
    visible: {opacity: 1, y: "0", transition: { duration: 0.5 }},
    exit: {opacity: 0, y: "-15px", transition: {duration:0.25} }
} 


export const Item = ({ data }) => {
    const [isHover, setHover] = useState(false)
    const toggle = () => { setHover(!isHover) }
    const [ref, inView] = useInView({
        rootMargin: "-50px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <Link href={data.link}>
                <Wrapper
                    ref={ref}
                    variants={wrapperV}
                    animate={inView ? "visible" : "hidden"}
                    onMouseEnter={toggle}
                    onMouseLeave={toggle}
                >
                    <Inner>
                        <ItemImage img={data.img} isHover={isHover} />
                        <ItemBottom title={data.title} date={data.date} />
                    </Inner>
                </Wrapper>
            </Link>
        </>
    )
}
