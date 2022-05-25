import React from 'react'
import styled from 'styled-components'
import { Card } from '../molcules/Detail/Card'

const Container = styled.div`
    display:flex;
    justify-content:center;
`
export const DrinkCard = () => {
    return (
        <Container>
            <Card img="/img/detail/cocacola.png" logoImg="/img/cocacola_logo.png" />
            <Card img="/img/detail/sprite.png" logoImg="/img/detail/sprite_logo.png" />
        </Container>
    )
}
