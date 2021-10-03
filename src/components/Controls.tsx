import React from 'react'
import styled from 'styled-components'
import {X, RefreshCcw} from '@styled-icons/feather'

const InputActionsWrapper = styled.div`
    
`

const WordInput = styled.input`
    font-size: 32px;
    font-family: 'Montserrat', 'Helvetica', Sans-Serif;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    text-align: center;
`

const ActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 2px;
`

const Enter = styled.span`
    font-size: 20px;
    font-weight: 700;
`

const Delete = styled(X)`
    height: 32px;
`

const Refresh = styled(RefreshCcw)`
    height: 32px;
`

function Input() {
    return (
        <InputActionsWrapper>
            <WordInput />
            <ActionsWrapper>
                <Delete />
                <Refresh />
                <Enter>Enter</Enter>
            </ActionsWrapper>
        </InputActionsWrapper>
    )
}

export default Input
