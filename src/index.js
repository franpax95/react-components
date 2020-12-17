import React from 'react';
import ReactDOM from 'react-dom';

import ChainAnimationDemo from './components/ChainAnimation/demo';
import FlipCardDemo from './components/FlipCard/demo';
import FlipImageCardDemo from './components/FlipImageCard/demo';
import GestureSliderDemo from './components/GestureSlider/demo';


ReactDOM.render(
    <React.StrictMode>
    
        <ChainAnimationDemo />

        <FlipCardDemo />

        <FlipImageCardDemo />

        <GestureSliderDemo /> 

    </React.StrictMode>,
    document.getElementById('root')
);
