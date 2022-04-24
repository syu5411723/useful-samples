import { motion } from 'framer-motion'
import {VFC} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Data = ["","","","",]

const Container = styled(motion.div)`
    
`
const MenuList = styled(motion.ul)``
const MenuItem = styled(motion.li)``

const itemV = {
    closed: { x: "50px", opacity: 0 },
    open: { x: "0px", opacity: 1 },
    hover: { scale: 1.2, originX: 0 }
}

const Links = styled(Link)``
export const MenuBgContent = () => {
    return (
        <Container>
            <MenuList>
                {Data.map(data => <MenuItem>{data}</MenuItem>)}
            </MenuList>
        </Container>
    )
}
