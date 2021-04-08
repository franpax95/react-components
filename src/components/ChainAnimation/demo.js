import React from 'react';
import styled from 'styled-components';
import ChainAnimation from './index';
import data from './data';

/**
 * Styles
 */
const StyledChainAnimationDemo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: lightblue;
`;

/**
 * Main
 */
function ChainAnimationDemo() {
    return (
        <StyledChainAnimationDemo>
            <ChainAnimation
                data = {data}
                containerHeight = '90%'
                containerWidth = '90%'
                listFromColor = '#4d4d4d'
            />
        </StyledChainAnimationDemo>
    );
}

export default ChainAnimationDemo;
