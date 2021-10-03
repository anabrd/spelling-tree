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
    position?: number | null;
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

const LeafCenter = styled.div<LeafObj>`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    border: 4px solid black;
    border-radius: 50%;
    margin: ${imgSize * -0.5}px;
    height: ${imgSize}px;
    width: ${imgSize}px;
    position: absolute;
`

const LetterWrapper = styled.div<LeafObj>`
    top: 50%;
    left: 50%;
    margin: ${imgSize * -0.5}px;
    height: ${imgSize}px;
    width: ${imgSize}px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    z-index: 10;
    transform: 
    rotate(calc(${props => props.position}*1turn/6/-1.67))
    translate(${r}px)
`

const Letter = styled.p<LeafObj>`
    font-size: 32px;
    font-weight: 700;
    transform: 
    ${props => props.isCenter ? null : "rotate(90deg)"};
    display: inline-block;
`

function Tree() {
    const leafArrDupe: LeafObj[] = [];
    let leafRenderArr: JSX.Element[] = [];
    const [leafArr, setLeafArr] = useState<LeafObj[]>([]);

    for (let i = 0; i < 6; i++) {
        if (i == 3) {
            leafArrDupe.push({isCenter: true, letter: "b"})
            leafArrDupe.push({isCenter: false, position: i, letter: "a"})
        } else {
            leafArrDupe.push({isCenter: false, position: i, letter: "a"})
        }
    }

    useEffect(() => {
        setLeafArr([...leafArrDupe])
    }, [])

    leafRenderArr = leafArr.map((leafRend, index) => 
    leafRend.isCenter ?
    <LeafCenter>
        <LetterWrapper isCenter={leafRend.isCenter} position={leafRend.position}>
            <Letter isCenter={leafRend.isCenter}>{leafRend.letter}</Letter>
        </LetterWrapper>
    </LeafCenter>
    :
    <>
        <LetterWrapper position={leafRend.position}><Letter>{leafRend.letter}</Letter></LetterWrapper>
        <Leaf key={index} src={leafImg} position={leafRend.position} isCenter={leafRend.isCenter}/>
    </>)

    return (
        <TreeWrapper>
            {leafRenderArr}
        </TreeWrapper>
    )
}

export default Tree;
