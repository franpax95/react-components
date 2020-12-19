import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledCard = styled(animated.div)`
    width: 100%;
    height: 100%;

    position: absolute;

    cursor: pointer;
    background-size: cover;
    background-position: center center;
    
    will-change: transform, opacity;
`;

export { StyledContainer, StyledCard };