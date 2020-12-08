import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

function FlipCard({
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

export default FlipCard;