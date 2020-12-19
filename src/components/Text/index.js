import React, { useState } from 'react';
import { useTrail } from 'react-spring';
import { StyledTextDisappearTrailsMain, StyledTextDisappearTrailsText, StyledTextDisappearTrailsEffect } from './style';

export function TextDisappearEffect({
    text            =   'Lorem ipsum dolor sit',
    width           =   '100%',
    height          =   '100%',
    backgroundColor =   'transparent',
    color           =   'palevioletred',
    fontSize        =   '5em',
    lineHeight      =   '80px',
    letterEffect    =   false
}) {
    /** Initial config */
    const items = letterEffect ? text.split('') : text.split(' ');
    const config = letterEffect 
        ? { mass: 3, tension: 200, friction: 100 }
        : { mass: 5, tension: 2000, friction: 200 };

    /** States */
    const [toggle, set] = useState(true);

    /** Springs */
    const trail = useTrail(items.length, {
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { 
            opacity: 0, 
            x: 20, 
            height: 0 
        },
        config
    });


    return (
        <StyledTextDisappearTrailsMain 
            onClick={() => set(state => !state)}
            style={{
                width,
                height,
                backgroundColor
            }}
        >
            <div style={{ display: 'flex', flexDirection: letterEffect ? 'row' : 'column' }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <StyledTextDisappearTrailsText
                        key={index}
                        style={{
                            ...rest,
                            color,
                            fontSize,
                            lineHeight,
                            height: lineHeight,
                            transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)
                        }}
                        w={`${letterEffect ? 'auto' : '100%'}`}
                    >
                        <StyledTextDisappearTrailsEffect style={{ 
                            height, 
                            minWidth: (letterEffect && items[index] === " ") ? '30px' : 'initial' 
                        }}>
                            {items[index]}
                        </StyledTextDisappearTrailsEffect>
                    </StyledTextDisappearTrailsText> 
                ))}
            </div>
        </StyledTextDisappearTrailsMain>
    );
}