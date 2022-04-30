import React from 'react'
import styled from 'styled-components'

const Container = styled.div``



export const ItemList = ({data}) => {
    return (
        <Container>
            {data.title}
        </Container>
    )
}
