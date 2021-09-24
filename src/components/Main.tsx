import React from 'react'
import Tree from './Tree'
import Words from './Words'
import Level from './Level'
import styled from 'styled-components'

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
`

function Main() {
    return (
        <MainWrapper>
            <Tree />
            <Words />
            <Level />
        </MainWrapper>
    )
}

export default Main
