import React from 'react';
import styled from 'styled-components';
import { OpacityCarousel } from './index';
import data from './data';

/**
 * Styles
 */
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
    return (
        <StyledCarouselDemo>
            <OpacityCarousel slides = {data} />
        </StyledCarouselDemo>
    );
}
