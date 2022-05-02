import { VFC } from 'react'
import styled from 'styled-components'
import Image from  "next/image"

type Props = {
    title: string
    date: string
}

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
`
const TextWrappe = styled.div``
const IconhWrapper = styled.div``
const Title = styled.p`
    color: white;
`
const Date = styled.p`
    color: #7E7E7E;
`


export const ItemBottom: VFC<Props> = ({ title, date }) => {
    return (
        <Wrapper>
            <TextWrappe>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </TextWrappe>
            <IconhWrapper>
                {/* <Image src={}  /> */}
            </IconhWrapper>
        </Wrapper>
    )
}