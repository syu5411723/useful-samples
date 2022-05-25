
import { motion } from "framer-motion"
import { useState } from "react"
import styled from "styled-components"
import { Circle, CircleWrapper, ImageWrapper } from "../../atoms/detail/Card/Circle"
import { CocaImage } from "../../atoms/detail/Card/CocaImage"
import { Content } from "../../atoms/detail/Card/Content"


const Container = styled.section`
    font-family:'Poppins', sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    min-height:100vh;
`
const CardWrapper = styled(motion.div)`
    position:relative;
    display:flex;
    /* justify-content:flex-start; */
    align-items:center;
    width: 300px;
    height: 350px;
    margin: 20px;
    border-radius:20px;
    &:hover ${CircleWrapper} {
        &:before {clip-path:circle(400px at center);}
    }
`
const wrapperV = {
    close: { width: "300px", transition: { duration: 0.3 } },
    open: { width: "600px", transition: { duration: 0.5 } },
}

export const Card = ({ img, logoImg }) => {
    const [hover, setHover] = useState(false)
    const toggle = () => { setHover(!hover) }
    return (
        <Container>
            <CardWrapper
                onMouseEnter={toggle}
                onMouseLeave={toggle}
                variants={wrapperV}
                animate={hover ? "open" : "close"}
            >
                <Circle logoImg={logoImg} hover={hover} />
                <Content hover={hover} />
                <CocaImage img={img} hover={hover} />

            </CardWrapper>
        </Container>
    )
}
