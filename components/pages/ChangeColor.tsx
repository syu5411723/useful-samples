import react, { useState } from 'react';
import styled from "styled-components"

const randomColor = () => {
    return Math.floor(Math.random() * 255)
}


export const ChangeColor = () => {
  const [color, setColor] = useState("")
  const HandleClick = () => {
    setColor(color => randomColor)
  }
  const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background:rgba('+${randomColor}+', '+${randomColor}+', '+${randomColor}+');
`

  const 
    return (
        <Wrapper
            onClick={randomColor}
        >
        </Wrapper>
    )
}
