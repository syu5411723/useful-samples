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
const Title = styled.p``
const Date = styled.p``


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