import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import FrameCompoSlider from './FrameCompoSlider';
import FrameComponent7 from './FrameComponent7';
import ParenChildCarousel from './ParenChildCarousel';

function ParentCarosul() {
  return (
    <Carousel style={{width:"100%"}}>
      <Carousel.Item interval={5000}>
       <FrameCompoSlider/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <FrameComponent7/>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <ParenChildCarousel/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ParentCarosul;
