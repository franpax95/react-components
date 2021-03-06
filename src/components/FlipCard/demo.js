import React from 'react';
import styled from 'styled-components';
import { FlipCard, FlipImageCard } from './index';

/**
 * Styles
 */
const StyledFlipCardDemo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: whitesmoke;
`;

const StyledCard = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`;

const StyledFlipImageCardDemo = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: gray;
`;


/**
 * Front & Back cards
 */
function Front() {
    return (
        <StyledCard backgroundColor = 'red' color = 'white'>
            Front
        </StyledCard>
    );
}

function Back() {
    return (
        <StyledCard backgroundColor = 'whitesmoke' color = '#4d4d4d'>
            Back
        </StyledCard>
    );
}


/**
 * Main
 */
export function FlipCardDemo() {
    return(
        <StyledFlipCardDemo>
            <FlipCard 
                width = {'80%'}
                height = {'80%'}
                front = {<Front />}
                back = {<Back />}
            />
        </StyledFlipCardDemo>
    );
}

export function FlipImageCardDemo() {
    return(
        <StyledFlipImageCardDemo>
            <FlipImageCard />
        </StyledFlipImageCardDemo>
    );
}
