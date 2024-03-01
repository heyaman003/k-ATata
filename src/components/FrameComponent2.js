import "./FrameComponent2.css";
import React, { useEffect, useRef } from "react";
const FrameComponent2 = () => {
  const sustainabilityContainerRef = useRef(null);
  const sustainabilityContainerRef2 = useRef(null);
  const sustainabilityContainerRef3 = useRef(null);

  useEffect(() => {
    const sustainabilityContainer = sustainabilityContainerRef.current;

    if (!sustainabilityContainer) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(sustainabilityContainer);
    

    return () => {
      observer.disconnect();
    };
  }, [sustainabilityContainerRef]);
  useEffect(() => {
    const sustainabilityContainer = sustainabilityContainerRef2.current;

    if (!sustainabilityContainer) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-2");
        } else {
          entry.target.classList.remove("animate-2");
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    observer.observe(sustainabilityContainer);
    

    return () => {
      observer.disconnect();
    };
  }, [sustainabilityContainerRef2]);

  return (
    <div className="star-shape-frame">
      <div className="ppc-colour-block-group">
        <img className="ppc-colour-block8" alt="" src="/ppc-colour-block.svg" />
        <div ref={sustainabilityContainerRef} className="contributing-to-un-container">
          <p className="contributing delay1">Contributing</p>
          <p className="contributing delay2">to UN SDGs</p>
        </div>
      </div>
      <div ref={sustainabilityContainerRef2} className="awards-stars-parent">
        <div className="awards-stars1" />
        <img  className="sdg-wheel-5-icon rotate-Img " alt="" src="/sdgwheel-5@2x.png" />
        <div className="subtitle-text-wrapper">
          <div className="subtitle-text">
            <div  className="our-sustainability-strategy-container1">
              <p className="contributing">
                <span className="our-sustainability-strategy">{`Our sustainability strategy, focusing on `}</span>
                <span className="people5">People,</span>
                <span className="our-sustainability-strategy">{` `}</span>
                <span className="planet4">Planet,</span>
                <span className="our-sustainability-strategy">{` `}</span>
                <span className="community4">Community,</span>
                <span className="our-sustainability-strategy">{` and `}</span>
                <span className="governance1">Governance,</span>
                <span>
                  {" "}
                  aims to create long-term stakeholder value and sustainable
                  growth for our business. It aligns with the UN Sustainable
                  Development Goals, the Tata Group Sustainability Strategy, and
                  our company’s assessment of critical issues and their impact
                  on the external environment.
                </span>
              </p>
              <p className="contributing"></p>
              <p className="contributing">
                This approach ensures we address the broad spectrum of
                sustainability, encompassing social well-being, environmental
                stewardship, community engagement, and ethical governance,
                thereby fostering a holistic development framework for enduring
                success.
              </p>
            </div>
            <div className="group">
              <div className="instance-parent3">
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1092"
                  alt=""
                  src="/ellipse-153.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
                <img
                  className="instance-child1132"
                  alt=""
                  src="/ellipse-15.svg"
                />
              </div>
              <div className="text7">
                <div className="instance-parent4">
                  <div className="instance2">
                    <div className="post-e-ccompliance1" />
                    <img
                      className="six-monthly-post-e-c-complianc"
                      alt=""
                      src="/six-monthly-post-e-c-compliance-report.svg"
                    />
                  </div>
                  <b  className="read-more4">read more</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
