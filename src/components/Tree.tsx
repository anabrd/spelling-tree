import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import leafImg from '../leaf.svg'

let tangent: number = Math.tan(Math.PI/5);
let imgSize: number = 150;
let rel: number = 0.8;
let r: number = 0.5 * (1 + rel) * imgSize/tangent;
let containerSize: number = 2*r+imgSize;

interface LeafObj {
    isCenter?: boolean;
    letter?: string;
    position?: number;
    src?: string;
}

const TreeWrapper = styled.div`
    width: ${containerSize}px;
    height: 80vh;
    position: relative;
`
const Leaf = styled.img<LeafObj>`
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
`

function Tree() {
    const leafArrDupe: LeafObj[] = [];
    let leafRenderArr: JSX.Element[] = [];
    const [leafArr, setLeafArr] = useState<LeafObj[]>([]);

    for (let i = 0; i < 6; i++) {
        leafArrDupe.push({isCenter: false, position: i})
    }

    useEffect(() => {
        setLeafArr([...leafArrDupe])
    }, [])

    leafRenderArr = leafArr.map((leafRend, index) => <Leaf key={index} src={leafImg} position={leafRend.position} isCenter={leafRend.isCenter}/>)

    return (
        <TreeWrapper>
            {leafRenderArr}
        </TreeWrapper>
    )
}

export default Tree;
