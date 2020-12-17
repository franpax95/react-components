import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { OpacityCarousel } from './index';
import data from './data';

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

const StyledCarouselDemo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: lightgreen;
`;

/**
 * Main
 */
export function OpacityCarouselDemo() {
    return (<>
        <DemoGlobalStyle />
        <StyledCarouselDemo>
            <OpacityCarousel
                slides = {data}
            />
        </StyledCarouselDemo>
    </>);
}
