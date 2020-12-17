import React, { useState, useEffect } from 'react';
import { useTransition, config } from 'react-spring';
import { StyledOpacityCarousel, StyledOpacitySlide } from './style';

/**
 * Carousel with opacity effect
 */
function OpacityCarousel({
    timeInterval    =   4,
    slides          =   [],

    width           = '500px',
    height          = '500px',

    backgroundColor = 'none',
    backgroundSize  = 'cover'
}) {

    /** States */
    const [index, set] = useState(0);


    /** Effects */
    useEffect(() => {
        setInterval(() => {
            set(state => (state + 1) % slides.length)
        }, (timeInterval * 1000));
    }, []);


    /** Springs */
    const transitions = useTransition(slides[index], item => item.id, {
        from: { 
            opacity: 0 
        },
        enter: { 
            opacity: 1 
        },
        leave: { 
            opacity: 0 
        },
        config: config.molasses,
    });



    return (
        <StyledOpacityCarousel width={width} height={height} bc={backgroundColor}>
            {transitions.map(({ item, props, key }) => (
                <StyledOpacitySlide 
                    style={{ ...props }}
                    key={key} 
                    bi={`url('${item.url}')`} 
                    bs={backgroundSize}
                />
            ))}
        </StyledOpacityCarousel>
    );
}

export { OpacityCarousel };