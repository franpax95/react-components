import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledGestureSlider = styled.div`
    margin: 0;
    padding: 20px;

    overflow: hidden;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledItem = styled(animated.div)`
    box-sizing: border-box;

    width: 300px;
    height: 300px;
    padding-left: 32px;
    padding-right: 32px;

    position: relative;
    
    display: grid;
    align-items: center;

    pointer-events: auto;
    border-radius: 5px;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, .2);

    text-align: center;

    transform-origin: 50% 50% 0px;
`;

const StyledFg = styled(animated.div)`
    height: 100%;
    width: 100%;

    position: absolute;

    display: grid;
    align-items: center;

    cursor: -webkit-grab;
    border-radius: 5px;
    background-color: #272727;
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.2);

    font-size: 3em;
    font-weight: 600;
    text-align: center;

    transition: box-shadow 0.75s;

    &:active {
        cursor: -webkit-grabbing;
        box-shadow: 0px 15px 30px -5px rgba(0, 0, 0, .4);
    }

    & > * {
        pointer-events: none;
    }
`;

const StyledAv = styled(animated.div)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
`;

const StyledSimpleSlider = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
`;

const StyledSimpleSlide = styled(animated.div)`
    width: 100%;
    height: 100%;
    cursor: pointer;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.bc};
    color: white;

    text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
    font-weight: 800;
    font-size: 25em;

    will-change: transform, opacity;
`;



export { StyledGestureSlider, StyledItem, StyledFg, StyledAv, StyledSimpleSlider, StyledSimpleSlide };
