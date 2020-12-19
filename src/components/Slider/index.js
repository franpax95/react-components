import React, { useState, useRef, useCallback } from 'react';
import { useSpring, interpolate, useTransition } from 'react-spring';
import { useGesture as useGestureWith } from 'react-with-gesture';

import { useSprings, animated } from 'react-spring-rc';
import { useGesture } from 'react-use-gesture-beta';

import { 
    StyledGestureSlider, StyledItem, StyledFg, StyledAv,
    StyledSimpleSlider, StyledSimpleSlide
} from './style';

export function GestureSlider({
    width           =   '500px',
    height          =   '250px',
    backgroundColor =   '#f0f0f0',
    border          =   'none'
}) {
    /** react-with-gesture */
    const [bind, { delta, down }] = useGestureWith();

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

/**
 * Calculates a spring-physics driven infinite slider
 *
 * @param {Array} items - display items
 * @param {Function} children - render child
 * @param {number} width - fixed item with
 * @param {number} visible - number of items that must be visible on screen
 *
 * IMPORTANT!!: InfiniteSlider only works for specific versions of the following packages
 * @package react-spring: 9.0.0-rc.2
 * @package react-use-gesture: 8.0.0-beta.1
 */
export function InfiniteSlider({
    slides  =   [],
    visible =   4,
    width   =   600,
    style   =   {},
    children
}) {
    const styles = {
        container: { position: 'relative', height: '100%', width: '100%' },
        item: { position: 'absolute', height: '100%', willChange: 'transform' }
    };

    const idx = useCallback((x, l = slides.length) => {
        return ((x < 0 ? x + l : x) % l);
    }, [slides]);

    const getPos = useCallback((i, firstVis, firstVisIdx) => {
        return idx(i - firstVis + firstVisIdx);
    }, [idx]);


    const [springs, set] = useSprings(slides.length, i => {
        return { x: (i < slides.length - 1 ? i : -1) * width };
    });


    const prev = useRef([0, 1]);

    const runSprings = useCallback((y, vy) => {
        const firstVis = idx(Math.floor(y / width) % slides.length)
        const firstVisIdx = vy < 0 ? slides.length - visible - 1 : 1;

        set(i => {
            const position = getPos(i, firstVis, firstVisIdx);
            const prevPosition = getPos(i, prev.current[0], prev.current[1]);
            const rank = firstVis - (y < 0 ? slides.length : 0) + position - firstVisIdx;
            const configPos = vy > 0 ? position : slides.length - position;

            return {
                x: (-y % (width * slides.length)) + width * rank,
                immediate: vy < 0 ? prevPosition > position : prevPosition < position,
                config: {
                    tension: (1 + slides.length - configPos) * 100,
                    friction: 30 + configPos * 40 
                }
            };
        });

        prev.current = [firstVis, firstVisIdx];
    }, [idx, getPos, width, visible, set, slides.length]);

    const wheelOffset = useRef(0);
    const dragOffset = useRef(0);

    const bind = useGesture({
        onDrag: ({ offset: [x], vxvy: [vx] }) => {
            return vx && ((dragOffset.current = -x), runSprings(wheelOffset.current + -x, -vx))
        },
        onWheel: ({ offset: [, y], vxvy: [, vy] }) => {
            return vy && ((wheelOffset.current = y), runSprings(dragOffset.current + y, vy));
        }
    });

    return (
        <div {...bind()} style={{ ...style, ...styles.container }}>
            {springs.map(({ x, vel }, i) => (
                <animated.div key={i} style={{ ...styles.item, width, x }} children={children(slides[i], i)} />
            ))}
        </div>
    );
}


export function SimpleSlider({
    width   =   '500px',
    height  =   '500px',
    slides  =   ['red', 'yellow', 'green']
}) {
    /** States */
    const [index, set] = useState(0);

    /** Springs */
    const transitions = useTransition(index, p => p, {
        from: {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0%, 0, 0)'
        },
        leave: {
            opacity: 0,
            transform: 'translate3d(-50%, 0, 0)'
        }
    });

    /** Events */
    const onClick = useCallback(() => {
        set(state => (state + 1) % 3);
    }, []);


    return (
        <StyledSimpleSlider onClick={onClick} height={height} width={width}>
            {transitions.map(({ item, props, key }) => (
                <StyledSimpleSlide 
                    key={key}
                    style={props} 
                    bc={slides[item]}
                >
                    {item}
                </StyledSimpleSlide>
            ))}
        </StyledSimpleSlider>
    );
}