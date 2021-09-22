import React from 'react'
import styled from 'styled-components'

interface StyleProps {
    bottomLeft?: boolean;
    vertical?: boolean;
} 

const CornerWrapper = styled.div<StyleProps>`
    height: 300px;
    width: 300px;
    position: absolute;
    bottom: ${props => props.bottomLeft ? "10px" : "initial"};
    left: ${props => props.bottomLeft ? "0" : "initial"};
    margin: 0;
`

const CornerText = styled.p<StyleProps>`
    font-size: 10px;
    position: absolute;
    transform: ${props => props.vertical ? "rotate(90deg)" : "initial"};
    bottom: ${props => props.bottomLeft && props.vertical ? "190px" : "7px"};
    left: ${props => props.bottomLeft && props.vertical ? "-5px" : "35px"};
    margin: 0;
`

const CornerLine = styled.div<StyleProps>`
    height: 6px;
    width: 150px;
    background-color: black;
    margin: 0;
    position: absolute;
    transform: ${props => props.bottomLeft ? "rotate(90deg)" : "initial"};
    bottom: ${props => props.bottomLeft ? "81px" : "initial"};
    left: ${props => props.bottomLeft ? "-50px" : "initial"};
`

function Corner() {
    return (
        <CornerWrapper bottomLeft={true}>
            <CornerText bottomLeft={true} vertical={true}>spelling bee</CornerText>
            <CornerLine bottomLeft={true}/>
            <CornerText bottomLeft={true}>designed and developed by ana brdar</CornerText>
        </CornerWrapper>
    )
}

export default Corner
