import { motion } from 'framer-motion'
import { VFC } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Data = [
    {
        text: "1",
        link: "/",
    },
    {
        text: "2",
        link: "/",
    }
]

const Container = styled(motion.div)`
`
const MenuList = styled(motion.ul)``
const MenuItem = styled(motion.li)``

const listV = {
    closed: {},
    open: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const itemV = {
    closed: { x: "50px", opacity: 0 },
    open: { x: "0px", opacity: 1 },
}

const Links = styled(Link)``
export const MenuBgContent = ({ isOpen }) => {
    return (
        <Container>
            <MenuList
                variants={listV}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                {Data.map(item => (
                    <MenuItem
                        variants={itemV}
                    >
                        {/* <Links to={item.link}> */}

                        {/* </Links> */}
                        {item.text}
                    </MenuItem>
                ))}

            </MenuList>
        </Container>
    )
}
