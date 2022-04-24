import styled from "styled-components"
import { HeaderHumburger } from "../atoms/HeaderHumburger"
import { HeaderLogo } from "../atoms/HeaderLogo"
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
    return (
        <Container>
            <Inner>
                <HeaderLogo />
                <HeaderHumburger />
                <MenuToggle />
            </Inner>
        </Container>
    )
}
