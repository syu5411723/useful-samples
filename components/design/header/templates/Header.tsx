import styled from "styled-components"
import { useState } from "react"

import { HeaderHumburger } from "../atoms/HeaderHumburger"
import { HeaderLogo } from "../atoms/HeaderLogo"
import { MenuBG } from "../molcules/MenuBG"
import { MenuToggle } from "../atoms/MenuToggle"

// const Container = styled.header`
//     position: fixed;
//     height: 100px;
//     width: 100%;
//     z-index: 10;
//     top:0;
//     left:0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// const Inner = styled.div`
//     width: 96%;
// `


// export const Header = () => {

//     return (
//         <Container>
//             <Inner>
//                 <HeaderLogo />
//                 <HeaderHumburger />
//                 <MenuToggle isOpen={isOpen} toggle={toggle} />
//                 <MenuBG isOpen={isOpen} />
//             </Inner>
//         </Container>
//     )
// }
import React from 'react'

const HeaderContaner = styled.header`
    position: fixed;
    height: 60px;
    width: 100%;
    z-index: 10;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

const Inner = styled.div`
    width: 90%;
`

export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => { setOpen(!isOpen) }
    return (
        <HeaderContaner>
            <Inner>
                <HeaderLogo />
                <HeaderHumburger />
                <MenuToggle isOpen={isOpen} toggle={toggle} />
                <MenuBG isOpen={isOpen} />
            </Inner>

        </HeaderContaner>
    )
}
