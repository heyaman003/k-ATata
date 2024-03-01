import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import FrameComponent3 from './FrameComponent3';
import Slidercomponent2 from './Slidercomponent2';
import SliderComponet3 from './SliderComponet3';
import "./Carosule.css"
function Carosule2() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
       <FrameComponent3/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Slidercomponent2/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <SliderComponet3/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosule2;
