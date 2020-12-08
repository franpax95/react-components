import { animated } from 'react-spring';
import styled from 'styled-components';

const StyledContainer = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    user-select: none;

    border-radius: 20px;
    background-color: ${props => props.backgroundColor};
`;

const StyledList = styled(animated.div)`
    padding: 25px;

    position: relative;

    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-gap: 25px;
    
    background: white;
    border-radius: 5px;
    cursor: pointer;

    will-change: width, height;
`;

const StyledItem = styled(animated.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    text-align: center;
    
    will-change: transform, opacity;
`;

export { StyledContainer, StyledList, StyledItem };