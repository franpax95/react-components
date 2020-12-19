import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledTextDisappearTrailsMain = styled.div`
    padding: 10px 10px 5px 10px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    cursor: pointer;

    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
    segoe ui, arial, sans-serif;
`;

const StyledTextDisappearTrailsText = styled(animated.div)`
    width: ${props => props.w};

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    
    font-weight: 800;
    text-transform: uppercase;

    will-change: transform, opacity;
`;

const StyledTextDisappearTrailsEffect = styled(animated.div)`
    overflow: hidden;
    width: 100%;
`;

export { StyledTextDisappearTrailsMain, StyledTextDisappearTrailsText, StyledTextDisappearTrailsEffect };