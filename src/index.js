import React from 'react';
import ReactDOM from 'react-dom';

import ChainAnimationDemo from './components/ChainAnimation/demo';
import FlipCardDemo from './components/FlipCard/demo';
import FlipImageCardDemo from './components/FlipImageCard/demo';


ReactDOM.render(
    <React.StrictMode>
    
        <ChainAnimationDemo />

        <FlipCardDemo />

        <FlipImageCardDemo />

    </React.StrictMode>,
    document.getElementById('root')
);
