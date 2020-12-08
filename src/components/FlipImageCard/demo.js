import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FlipImageCard from './index';

/**
 * Styles
 */
const DemoGlobalStyle = createGlobalStyle`
    * { 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        user-select: none;
    }

    html,
    body,
    #root {
        height: 100%;
        width: 100%;
    }
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
 * Main
 */
function FlipImageCardDemo() {
    return(<>
        <DemoGlobalStyle />
        <StyledFlipImageCardDemo>
            <FlipImageCard />
        </StyledFlipImageCardDemo>
    </>);
}

export default FlipImageCardDemo;