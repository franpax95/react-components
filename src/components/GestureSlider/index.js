import React from 'react';
import { useSpring, interpolate } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import { StyledGestureSlider, StyledItem, StyledFg, StyledAv } from './style';

function GestureSlider({
    width           =   '500px',
    height          =   '250px',
    backgroundColor =   '#f0f0f0',
    border          =   'none'
}) {
    /** react-with-gesture */
    const [bind, { delta, down }] = useGesture();

    /** springs */
    const { x, bg, size } = useSpring({
        x: down ? delta[0] : 0,
        bg: `linear-gradient(120deg, ${delta[0] < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f9f586'} 100%)`,
        size: down ? 1.1 : 1,
        immediate: name => down && name === 'x'
    });

    const avSize = x.interpolate({ 
        map: Math.abs, 
        range: [50, 300], 
        output: ['scale(0.5)', 'scale(1)'], 
        extrapolate: 'clamp' 
    });


    return (
        <StyledGestureSlider style={{ width, height, backgroundColor, border }}>
            <StyledItem {...bind()} style={{ background: bg }}>
                <StyledAv style={{ transform: avSize, justifySelf: delta[0] < 0 ? 'end' : 'start' }} />
                <StyledFg style={{ transform: interpolate([x, size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`) }} />
            </StyledItem>
        </StyledGestureSlider>
    );
}

export default GestureSlider;