import React, { useState, useEffect,useRef } from "react";
import "./FrameComponent7.css";

const FrameCompoSlider = () => {
  const elementRef = useRef(null);
  const elementRefText = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const element2 = elementRefText.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "active" class when a certain percentage of the element is in the viewport
            element.classList.add('active');
            element2.classList.add('active');
          } else {
            // Remove the "active" class when the element is not in the viewport
            element.classList.remove('active');
            element2.classList.remove('active');
          }
        });
      },
      { threshold: 0.7 } // Adjust the threshold based on when you want the animation to start
    );

    if (element|| element2) {
      observer.observe(element);
      //observer.observe(element2);
    }

    return () => {
      if (element || element2) {
        observer.unobserve(element);
        //observer.unobserve(element2);
      }
    };
  }, []);
  return (
    <div className="frame-parent3">
      <div className="vector-parent">
        <div id="video-container">
          <video id="video-background" autoPlay muted loop playsInline>
            <source src="/Homepagevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div id="video-overlay">
            <div className="finely-sourced-ingredients"></div>
          </div>
        </div>
        <div className="vector" />
      </div>
      <div ref={elementRef} className="text-parent">
        <div className="text2">
          <img
            className="ppc-colour-block5"
            alt=""
            src="/ppc-colour-block.svg"
          />
        </div>
        <div  className="rectangle">
      <b className="tata-communications">tata communications</b>
    </div>
        <div className="climate-targets-approved-container">
          <p className="climate-targets">climate targets</p>
          <p className="climate-targets">approved by SBTi</p>
        </div>
      </div>
      <div ref={elementRefText} className="text3">
        <div className="text-group">
          <div className="text4">
            <div className="frame-certifications-parent">
              <div className="frame-certifications">
                <div className="iqui-ut-vel">
                  Iqui ut vel eati dolupta temquia tusciassi beris ulpa sit pra
                  doluptatur molenimus abores maiore niet doloribus ipsaepe
                  raescie nimpore rentur? Fero que eatem
                </div>
              </div>
              <div className="frame-content">
                <div className="frame-content-child" />
                <b className="view-press-release">view press release</b>
              </div>
            </div>
          </div>
        {/*   <img className="frame-child5" alt="" src="/group-60.svg" /> */}
        </div>
      </div>
    </div>
  );
};

export default FrameCompoSlider;
