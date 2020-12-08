import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GestureSlider from './index';

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

const StyledGestureSliderDemo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: whitesmoke;
`;

/**
 * Main
 */
function GestureSliderDemo() {
    return(<>
        <DemoGlobalStyle />
        <StyledGestureSliderDemo>
            <GestureSlider />
        </StyledGestureSliderDemo>
    </>);
}

export default GestureSliderDemo;