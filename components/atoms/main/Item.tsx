import React from 'react'
import styled from 'styled-components'
import { ItemBottom } from './ItemBottom'
import { ItemImage } from './ItemImage'

const Wrapper = styled.div``
const Inner = styled.div``
const ImageWrapper = styled.div``
const BottomWrapper = styled.div``


export const Item = ({ img, title, date, }) => {
    return (
        <Wrapper>
            <Inner>
                <ImageWrapper>
                    <ItemImage img={img} />
                </ImageWrapper>
                <BottomWrapper>
                    <ItemBottom title={title} date={date}/>
                </BottomWrapper>
            </Inner>
        </Wrapper>
    )
}
