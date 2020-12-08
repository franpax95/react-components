import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { StyledContainer, StyledCard } from './style';


function FlipImageCard({
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

export default FlipImageCard;