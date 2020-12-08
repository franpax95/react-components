import React, { useState, useRef } from 'react';
import { useTransition, useSpring, useChain, config } from 'react-spring';
import { StyledContainer, StyledList, StyledItem } from './style';

function ChainAnimation({
    data                      =   [],

    containerHeight           =   '400px',
    containerWidth            =   '600px',
    containerBackgroundColor  =   'whitesmoke',

    listFromColor             =   'hotpink',
    listEnterColor            =   'rgba(0, 0, 0, 0)',
}) {

    // State to manage if animation open
    const [open, set] = useState(false);

    // Animations config
    const springRef = useRef();
    const transRef = useRef();

    const { size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: {
            size: '20%',
            background: listFromColor
        },
        to: {
            size: open ? '100%' : '20%',
            background: open ? listEnterColor : listFromColor
        }
    });

    const transitions = useTransition(open ? data: [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 400 / data.length,
        from: {
            opacity: 0,
            transform: 'scale(0)'
        },
        enter: {
            opacity: 1,
            transform: 'scale(1)'
        },
        leave: {
            opacity: 0,
            transform: 'scale(0)'
        }
    });

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

    return (
        <StyledContainer 
            width={containerWidth} 
            height={containerHeight} 
            backgroundColor={containerBackgroundColor}
        >
            <StyledList 
                style={{ ...rest, width: size, height: size }} 
                onClick={() => set(open => !open)}
            >
                {transitions.map(({ item, key, props }) => (
                    <StyledItem 
                        key={key} 
                        style={{ ...props, background: item.css }}
                    >
                        {item.name}
                    </StyledItem>
                ))}
            </StyledList>
        </StyledContainer>
    );
}

export default ChainAnimation;