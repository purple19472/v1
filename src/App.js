import React, {useRef, useEffect} from 'react';
import TitleText from './components/TitleText';
import {useSpring, animated, config} from 'react-spring';
import './App.css';

function App() {

  const animation1 = useSpring({opacity: 1, marginTop: 0, config: {friction: 40}, from: {opacity: 0, marginTop: 500}});
  const animation2 = useSpring({opacity: 1, marginLeft: 0, config: {friction: 40}, from: {opacity: 0, marginLeft: 500}});

  return (
    <div className="App">

      <div className="wrapper">

        <div className="slide one">
          <div class="landing-box">     
              <animated.p style={animation1} class="small-text pink">Hi, my name is</animated.p>
              <animated.p style={animation1} class="large-text yellow">Elaina Smith.</animated.p>
              <animated.p style={animation1} class="large-text gold">Scroll to move right.</animated.p>      
          </div>
        </div>

        <div className="slide two">
          <div class="about-box">
            <div class="large-text yellow">About</div>
            <animated.p style={animation1} class="small-text gold">
              I'm currently a senior at the University of Minnesota pursuing 
              a degree in management information systems with a minor in computer science. 
              Outside of school and work, I enjoy spending time with family and being outdoors.
            </animated.p>
            <br/>
            <ul>
              <li class="small-text pink"><a class="small-text pink" href="https://www.linkedin.com/in/elaina-smith-b51a8a150/" target="_blank">LinkedIn</a></li>
              <li class="small-text pink"><a class="small-text pink" href="https://github.com/purple19472" target="_blank">Github</a></li>
            </ul>
          </div>
          <div class="empty-box">
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
