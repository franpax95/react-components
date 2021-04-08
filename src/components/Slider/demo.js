import React from 'react';
import styled from 'styled-components';
import { GestureSlider, InfiniteSlider, SimpleSlider } from './index';
import items from './infiniteSliderData';
import { animated } from 'react-spring';

console.log(items);


const StyledSliderDemo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: whitesmoke;
`;

export function GestureSliderDemo() {
    return(
        <StyledSliderDemo>
            <GestureSlider />
        </StyledSliderDemo>
    );
}

export function SimpleSliderDemo() {
    return (
        <StyledSliderDemo>
            <SimpleSlider width={'80vw'} />
        </StyledSliderDemo>
    );
}


const Main = styled.div`
    height: 400px;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 70px 100px;
`;

const Marker = styled.span`
    color: black;
    position: absolute;
    top: 0px;
    left: 140px;
    font-family: monospace;
`;

const Image = styled(animated.div)`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
`;

/**
 * IMPORTANT!!: InfiniteSlider only works for specific versions of the following packages
 * @package react-spring: 9.0.0-rc.2
 * @package react-use-gesture: 8.0.0-beta.1
 */
export function InfiniteSliderDemo() {
    return (
        <StyledSliderDemo>
            <InfiniteSlider slides={items} width={700} visible={4}>
                {({ css, height }, i) => (
                    <Content>
                        <Marker>{String(i).padStart(2, '0')}</Marker>
                        <Image style={{ backgroundImage: css, height }} />
                    </Content>
                )}
            </InfiniteSlider>
        </StyledSliderDemo>
    );
}
