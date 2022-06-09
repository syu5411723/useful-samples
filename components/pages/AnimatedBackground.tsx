import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlien } from '@fortawesome/free-regular-svg-icons'

const Container = styled.div`
    overflow:hidden;
    min-height:100vh;
    background:#000;
`

export const AnimatedBackground = () => {
    return (
        <>
        <FontAwesomeIcon icon={faRss} />
        <FontAwesomeIcon icon={faAngry} />
        </>
    )
}
