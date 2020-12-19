import React from 'react';
import ReactDOM from 'react-dom';

import ChainAnimationDemo from './components/ChainAnimation/demo';
import FlipCardDemo from './components/FlipCard/demo';
import FlipImageCardDemo from './components/FlipImageCard/demo';
import { GestureSliderDemo, InfiniteSliderDemo, SimpleSliderDemo } from './components/Slider/demo';
import { OpacityCarouselDemo } from './components/Carousel/demo';


ReactDOM.render(
    <React.StrictMode>
    
        {/* <ChainAnimationDemo /> */}

        {/* <FlipCardDemo /> */}

        {/* <FlipImageCardDemo /> */}

        {/* <GestureSliderDemo />  */}

        {/* <OpacityCarouselDemo /> */}

        {/**
        * IMPORTANT!!: InfiniteSlider only works for specific versions of the following packages
        * @package react-spring: 9.0.0-rc.2
        * @package react-use-gesture: 8.0.0-beta.1
        */}
        {/* <InfiniteSliderDemo /> */}

        <SimpleSliderDemo />

    </React.StrictMode>,
    document.getElementById('root')
);
