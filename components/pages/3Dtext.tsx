import styled from "styled-components"

const Container = styled.section`
    background-color: #000;
    color: #fff;
    min-height:100vh;
    display: grid;
    place-items: center;
`
const Banner = styled.div`
    display:flex;
`
const Panel = styled.div`
    position:relative;
    width: 100px;
    height: 100px;
    border: 1px solid white;
    overflow: hidden;
    &:before {
        position: absolute;
        content: "";
        font-size: 100px;
        width:max-content;
    }

`

export const ThreeDtext = () => {
    return (
        <Container>
            <Banner />
            <Panel />
            <Panel />
            <Panel />
            <Panel />
            <Panel />

        </Container>
    )
}
