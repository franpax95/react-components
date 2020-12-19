import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';
import { StyledContainer, StyledCard } from './style';

export function FlipCard({
    width   =   '400px',
    height  =   '400px',
    front   =   <></>,
    back    =   <></>
}) {
    
    /** Subfunctions */
    function inverseOpacity(o) {
        return 1 - o;
    }

    function inverseTransform(t) {
        return `${t} rotateY(180deg)`;
    }

    function transformCard(x, y, scale) {
        return `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;
    }


    /** States */
    const [selected, setSelected] = useState(false);


    /** Springs */
    const [props, set] = useSpring(() => ({ state: [0, 0, 1] }));

    const { opacity, transform } = useSpring({
        opacity: selected ? 1 : 0,
        transform: `rotateY(${selected ? 180 : 0}deg)`,
        config: {
            friction: 22,
            tension: 500
        }
    });

    
    return (
        <animated.div
            className="__FlipCard"
            style={{
                width,
                height,
                transform: !selected && props.state.interpolate(transformCard)
            }}
            onClick={() => setSelected(!selected)}
        >
            <animated.div style={{
                opacity: opacity.interpolate(inverseOpacity),
                transform,
                zIndex: selected ? 1 : 10
            }}>
                {front}
            </animated.div>

            <animated.div style={{ 
                opacity, 
                transform: transform.interpolate(inverseTransform),
                zIndex: selected ? 10 : 1
            }}>
                {back}
            </animated.div>
        </animated.div>
    );
}

export function FlipImageCard({
    width       =   '500px',
    height      =   '500px',
    srcFront    =   'https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop',
    srcBack     =   'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop'
}) {
    /** States */
    const [flipped, set] = useState(false);
    
    /** Springs */
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: {
            mass: 5,
            tension: 500,
            friction: 80
        }
    });


    return (
        <StyledContainer style={{ width, height }} onClick={() => set(state => !state)}>
            <StyledCard style={{
                opacity: opacity.interpolate(o => 1 - o),
                transform,
                backgroundImage: `url(${srcFront})`
            }} />

            <StyledCard style={{
                opacity,
                transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                backgroundImage: `url(${srcBack})`
            }} />
        </StyledContainer>
    );
}