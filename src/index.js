import React from 'react';
import ReactDOM from 'react-dom';

import ChainAnimationDemo from './components/ChainAnimation/demo';
import FlipCardDemo from './components/FlipCard/demo';
import FlipImageCardDemo from './components/FlipImageCard/demo';
import GestureSliderDemo from './components/GestureSlider/demo';
import { OpacityCarouselDemo } from './components/Carousel/demo';


ReactDOM.render(
    <React.StrictMode>
    
        <ChainAnimationDemo />

        <FlipCardDemo />

        <FlipImageCardDemo />

        <GestureSliderDemo /> 

        <OpacityCarouselDemo />

    </React.StrictMode>,
    document.getElementById('root')
);
