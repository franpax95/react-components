import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledOpacityCarousel = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};

    position: relative;

    background-color: ${props => props.bc};

    font-family: sans-serif;
    text-align: center;
`;

const StyledOpacitySlide = styled(animated.div)`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    
    background-image: ${props => props.bi};
    background-size: ${props => props.bs};
    background-repeat: no-repeat;
    background-position: center;

    will-change: opacity;
`;

export { StyledOpacityCarousel, StyledOpacitySlide };