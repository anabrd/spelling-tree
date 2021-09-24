import React from 'react'
import styled from 'styled-components'
import leaf from '../leaf.svg'

interface LeafStyleProps {
    position: number;
} 

const TreeWrapper = styled.div`
    width: 80%;
    margin-top: -250px;
    margin-left: 50px;
    display: flex;
    position: relative;
`

const Leaf = styled.img<LeafStyleProps>`
    height: 120px;
    position: absolute;
    transform: 
    rotate(${props => props.position*34 + "deg"});
    top: ${props => props.position >= 3 ? props.position*89 + "px" : (5-props.position)*89 + "px"};
    left: ${props => props.position*85 + "px"};
`

function Tree() {
    return (
        <TreeWrapper>
            <Leaf src={leaf} position={0} />
            <Leaf src={leaf} position={1} />
            <Leaf src={leaf} position={2} />
            <Leaf src={leaf} position={3} />
            <Leaf src={leaf} position={4} />
            <Leaf src={leaf} position={5} />
        </TreeWrapper>
    )
}

export default Tree
