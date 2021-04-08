import React from 'react';
import styled from 'styled-components';
import { TextDisappearEffect } from './index';

/**
 * Styles
 */
const StyledTextDisappearEffectDemo = styled.div`
    width: 100%;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: lightgray;
`;

/**
 * Main
 */
export function TextDisappearEffectDemo() {
    return(
        <StyledTextDisappearEffectDemo>
            <TextDisappearEffect 
                text="Fran es un crack"
                height="auto"
                width="auto"
                backgroundColor="#4d4d4d"
                fontSize="5em"
                lineHeight="70px"
                letterEffect={false}
            />
        </StyledTextDisappearEffectDemo>
    );
}
