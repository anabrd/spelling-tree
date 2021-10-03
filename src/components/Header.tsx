import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 64px;
    margin: 0;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`

function Header() {
    return (
        <div>
        <Title>
            Spelling Tree
        </Title>
        <Subtitle>Make as many words as you can with the 7 letters, always using the one in the center.</Subtitle>
        </div>
    )
}

export default Header
