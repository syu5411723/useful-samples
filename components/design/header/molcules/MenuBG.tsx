import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { MenuBgContent } from '../atoms/MenuBgContent'


const Container = styled(motion.div)`
    position:fixed;
    width:400px;
    height:100vh;
    top:0;
    right:0;
    z-index:3;
    background-color: rgb(255,188,112);
`
const containerV = {
    closed: { x: "400px", },
    open: { x: "0px", transition: { duration: 0.3 } }
}


export const MenuBG = ({ isOpen }) => {
    return (
        <Container
            variants={containerV}
            animate={isOpen ? "open" : "closed"}
        >
            <MenuBgContent isOpen={isOpen} />
        </Container>
    )
}
