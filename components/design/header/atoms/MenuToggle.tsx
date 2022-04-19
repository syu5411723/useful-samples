import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const LineInner = styled(motion.div)`
    height:25px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const Line = styled(motion.div)`
    width:30px;
    height: 2px;
    border-radius:10px;
    background-color: #292929;
`

const line01V = {
    closed: {},
    open: { transform: "rotate(45deg) translate(6px, 10px)", transition: { duration: 0.5 } },
}
const line02V = {
    closed: { opacity: 1 },
    open: { opacity: 0, transform: "translateX(30px)", transition: { duration: 0.5 } },
}
const line03V = {
    closed: {},
    open: { transform: "rotate(-45deg) translate(6px, -10px )", transition: { duration: 0.5 } },
}
const transition = { transition: { duration: 0.5 } }


export const MenuToggle = () => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => { setOpen(!isOpen) }
    return (
        <LineInner onClick={toggle}>
            <Line
                variants={line01V}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            // transition={transition}
            />
            <Line
                variants={line02V}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            />
            <Line
                variants={line03V}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            // transition={transition}
            />
        </LineInner>
    )
}
