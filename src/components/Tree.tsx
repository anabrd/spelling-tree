import React from 'react'
import styled from 'styled-components'
import leaf from '../leaf.svg'

interface LeafStyleProps {
    position: number;
} 

let tangent: number = Math.tan(Math.PI/5);
let imgSize: number = 150;
let rel: number = 0.8;
let r: number = 0.5 * (1 + rel) * imgSize/tangent;
let containerSize: number = 2*r+imgSize;

const TreeWrapper = styled.div`
    width: ${containerSize}px;
    height: 80vh;
    position: relative;
`

const Leaf = styled.img<LeafStyleProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: ${imgSize * -0.5}px;
    height: ${imgSize}px;
    width: ${imgSize}px;
    position: absolute;
    transform: 
    rotate(calc(${props => props.position}*1turn/6/-1.67))
    translate(${r}px)
    /* bottom: ${props => props.position < 3 ? props.position*89 + "px" : (5-props.position)*89 + "px"};
    left: ${props => props.position*85 + "px"}; */
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
