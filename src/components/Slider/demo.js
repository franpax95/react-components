import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GestureSlider, InfiniteSlider } from './index';
import items from './infiniteSliderData';
import { animated } from 'react-spring';

console.log(items);

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

const InfiniteSliderGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
            sans-serif;
        background: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        cursor: url("https://github.com/chenglou/react-motion/raw/master/demos/demo8-draggable-list/cursor.png") 39 39, auto;
    }

    #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        background: #171720;
    }
`;

const StyledSliderDemo = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-color: whitesmoke;
`;

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
 * Main
 */
export function GestureSliderDemo() {
    return(<>
        <DemoGlobalStyle />
        <StyledSliderDemo>
            <GestureSlider />
        </StyledSliderDemo>
    </>);
}

/**
 * IMPORTANT!!: InfiniteSlider only works for specific versions of the following packages
 * @package react-spring: 9.0.0-rc.2
 * @package react-use-gesture: 8.0.0-beta.1
 */
export function InfiniteSliderDemo() {
    return (<>
        <DemoGlobalStyle />
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
    </>);
}