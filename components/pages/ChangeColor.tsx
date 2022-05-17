import react from 'react';
import styled from "styled-components"

const randomColor = () => {
    return Math.floor(Math.random() * 255)
}
class ChangeColor = {
    const style = {
        background:`rgba('+${randomColor}', '+${randomColor}', '+${randomColor}' )`
    }
    return (
        <div
            style={style}
            onClick={this.randomColor}
        >
        </div>
    )
}

export default ChangeColor
