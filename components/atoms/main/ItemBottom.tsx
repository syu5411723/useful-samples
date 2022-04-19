import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    title: string
    date: string
}

const Wrapper = styled.div``
const Inner = styled.div``
const Title = styled.p``
const Date = styled.p``


export const ItemBottom: VFC<Props> = ({ title, date }) => {
    return (
        <Wrapper>
            <Inner>
                <Title>{title}</Title>
            </Inner>
            <Date>{date}</Date>
        </Wrapper>
    )
}