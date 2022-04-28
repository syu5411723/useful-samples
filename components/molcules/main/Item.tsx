import React from 'react'
import styled from 'styled-components'
import { ItemBottom } from '../../atoms/main/ItemBottom'
import { ItemImage } from '../../atoms/main/ItemImage'

const Wrapper = styled.div`
    width:90%;
    background-color:#202020;
`
const Inner = styled.div`
    padding:2%;
`
const BottomWrapper = styled.div``


export const Item = ({data}) => {
    return (
        <Wrapper>
            <Inner>
                    <ItemImage img={data.image} />
                    <ItemBottom title={data.title} date={data.date}/>
            </Inner>
        </Wrapper>
    )
}
