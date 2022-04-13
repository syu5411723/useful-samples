import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled(motion.div)`

`
const Line = styled(motion.div)``

const line01V = {
    closed: {},
    open: { transform: "rotate(45deg) translateX(5px, 9pd)" },
}
const line02V = {
    closed: { opacity: 1 },
    open: { opacity: 0, transform: "translateX(30px)" },
}
const line03V = {
    closed: {},
    open: { transform: "rotate(-45deg) translateX(5px, 9px)" },
}
const transition = { transition: { duration: 0.5 } }


export const MenuToggle = () => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => { setOpen(!isOpen) }
    return (
        <Container onClick={toggle}>
            <Line
                variants={line01V}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={transition}
            />
            <Line
                variants={line02V}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={transition}
            />
            <Line
                variants={line03V}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={transition}
            />
        </Container>
    )
}
