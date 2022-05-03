import { useState } from "react"
import styled from 'styled-components'
import Link from "next/link"


import { ItemBottom } from '../../atoms/main/ItemBottom'
import { ItemImage } from '../../atoms/main/ItemImage'

const Wrapper = styled.div`
    width:45%;
    background-color:#202020;
    margin-bottom:50px;
`
const Inner = styled.div`
    padding:3%;
`
const BottomWrapper = styled.div``



export const Item = ({ data }) => {
    const [isHover, setHover] = useState(false)
    const toggle = () => { setHover(!isHover) }
    return (
        <>
            <Link href={data.link}>
                <Wrapper
                    onMouseEnter={toggle}
                    onMouseLeave={toggle}
                >
                    <Inner>
                        <ItemImage img={data.img} isHover={isHover} />
                        <ItemBottom title={data.title} date={data.date} />
                    </Inner>
                </Wrapper>
            </Link>
        </>
    )
}
