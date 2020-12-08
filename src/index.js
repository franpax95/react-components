import React from 'react';
import ReactDOM from 'react-dom';

import ChainAnimationDemo from './components/ChainAnimation/demo';
import FlipCardDemo from './components/FlipCard/demo';


ReactDOM.render(
    <React.StrictMode>
        <ChainAnimationDemo />
        <FlipCardDemo />
    </React.StrictMode>,
    document.getElementById('root')
);
