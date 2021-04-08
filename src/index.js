import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './style';


import ChainAnimationDemo from './components/ChainAnimation/demo';
import { FlipCardDemo, FlipImageCardDemo } from './components/FlipCard/demo';
// import FlipImageCardDemo from './components/FlipImageCard/demo';
import { GestureSliderDemo, InfiniteSliderDemo, SimpleSliderDemo } from './components/Slider/demo';
import { OpacityCarouselDemo } from './components/Carousel/demo';
import { TextDisappearEffectDemo } from './components/Text/demo';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-gap: 5px;

    & a {
        
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Wrapper>
                        <h1>React components</h1>
                        <Link to="/chainAnimation">Chain Animation Demo</Link>
                        <Link to="/flipCard">Flip Card Demo</Link>
                        <Link to="/flipImageCard">Flip Image Card Demo</Link>
                        <Link to="/gestureSlider">Gesture Slider Demo</Link>
                        <Link to="/opacityCarousel">Opacity Carousel Demo</Link>

                        {/**
                        * IMPORTANT!!: InfiniteSlider only works for specific versions of the following packages
                        * @package react-spring: 9.0.0-rc.2
                        * @package react-use-gesture: 8.0.0-beta.1
                        */}
                        <Link to="/infiniteSlider">Infinite Slider Demo</Link>

                        <Link to="/simpleSlider">Simple Slider Demo</Link>
                        <Link to="/textDisappearEffect">Text Disappear Effect</Link>
                    </Wrapper>
                </Route>

                <Route path="/chainAnimation" component={ChainAnimationDemo} />
                <Route path="/flipCard" component={FlipCardDemo} />
                <Route path="/flipImageCard" component={FlipImageCardDemo} />
                <Route path="/gestureSlider" component={GestureSliderDemo} />
                <Route path="/opacityCarousel" component={OpacityCarouselDemo} />
                <Route path="/infiniteSlider" component={InfiniteSliderDemo} />
                <Route path="/simpleSlider" component={SimpleSliderDemo} />
                <Route path="/textDisappearEffect" component={TextDisappearEffectDemo} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
