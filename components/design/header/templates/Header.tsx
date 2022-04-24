import styled from "styled-components"
import {useState} from "react"

import { HeaderHumburger } from "../atoms/HeaderHumburger"
import { HeaderLogo } from "../atoms/HeaderLogo"
import { MenuBG } from "../molcules/MenuBG"
import { MenuToggle } from "../atoms/MenuToggle"

const Container = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Inner = styled.div`
    width: 96%;
`


export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => { setOpen(!isOpen) }
    return (
        <Container>
            <Inner>
                <HeaderLogo />
                <HeaderHumburger />
                <MenuToggle isOpen={isOpen} toggle={toggle} />
                <MenuBG isOpen={isOpen} />
            </Inner>
        </Container>
    )
}
