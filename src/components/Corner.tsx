import React from 'react'
import styled from 'styled-components'

type CornerProps = {
    position: string
}

interface StyleProps {
    bottomLeft?: boolean;
    vertical?: boolean;
} 

const CornerWrapper = styled.div<StyleProps>`
    height: 300px;
    width: 300px;
    display: inline-block;
    position: absolute;
    bottom: ${props => props.bottomLeft ? "0px" : "initial"};
    left: ${props => props.bottomLeft ? "0" : "initial"};
    right: ${props => props.bottomLeft ? "initial" : "0"};
    top: ${props => props.bottomLeft ? "initial" : "0"};
    margin: 0;
`

const CornerText = styled.p<StyleProps>`
    font-size: 10px;
    position: absolute;
    transform: ${props => props.vertical ? "rotate(90deg)" : "initial"};
    bottom: ${props => {if (props.bottomLeft && props.vertical) {return "190px"} else if (!props.bottomLeft && props.vertical) {return "240px"} else if (props.bottomLeft && !props.vertical) {return "7px"} else {return "271px"}}};
    left: ${props => {if (props.bottomLeft && props.vertical) {return "-5px"} else if (!props.bottomLeft && props.vertical) {return "260px"} else if (props.bottomLeft && !props.vertical) {return "32px"} else {return "65px"}}};
    margin: 0;
`

const CornerLine = styled.div<StyleProps>`
    height: 6px;
    width: 150px;
    background-color: black;
    margin: 0;
    position: absolute;
    transform: ${props => props.vertical ? "rotate(90deg)" : "initial"};
    bottom: ${props => props.bottomLeft ? "81px" : "initial"};
    left: ${props => props.bottomLeft ? "-50px" : "initial"};
    top: ${props => props.bottomLeft ? "initial" : "20px"};
    right: ${props => props.bottomLeft ? "initial" : "20px"};
`

function Corner({position}: CornerProps) {
    return (
        position == "left" ?
        <CornerWrapper bottomLeft={true}>
            <CornerText bottomLeft={true} vertical={true}>spelling tree</CornerText>
            <CornerLine bottomLeft={true} vertical={true}/>
            <CornerText bottomLeft={true}>designed and developed by ana brdar</CornerText>
        </CornerWrapper>
        : <CornerWrapper>
            <CornerText>spelling tree</CornerText>
            <CornerLine />
            <CornerText vertical={true}>github</CornerText>
        </CornerWrapper>

    )
}

export default Corner
