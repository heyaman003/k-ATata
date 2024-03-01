import React, { useEffect, useState } from 'react';
import FrameComponent3 from './FrameComponent3';
import Slidercomponent2 from './Slidercomponent2';
import SliderComponet3 from './SliderComponet3';

const Carousel = () => {
  const components = [
    <FrameComponent3 key={1} />,
    <Slidercomponent2 key={2} />,
    <SliderComponet3 key={3} />,
  ];

  const [counter, setCounter] = useState(0);

  const displayImage = () => {
    // You can use refs to access the DOM elements in a functional component
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const prev = () => {
    if (counter >= 1) {
      setCounter((prevCounter) => prevCounter - 1);
      displayImage();
    } else {
      setCounter(components.length - 1);
      displayImage();
    }
  };

  const next = () => {
    if (counter < components.length - 1) {
      setCounter((prevCounter) => prevCounter + 1);
      displayImage();
    } else {
      setCounter(0);
      displayImage();
    }
  };

  useEffect(() => {
    // Initial setup
    displayImage();
  }, [counter, components.length]);

  return (
    <div className='carousel-container'>
      {components.map((component, index) => (
        <div
          key={index}
          style={{
            transform: `translateX(${100 * (counter - index)}%)`,
          }}
          className={`carousel-item ${index === counter ? 'active' : 'unactive'}`}
        >
          {component}
        </div>
      ))}
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Carousel;
