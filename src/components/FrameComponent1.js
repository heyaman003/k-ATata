import { useState } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const [awardArray,setAwardsArray]=useState(3);
  return (
    <div className="sustainability-landing-page-inner1">
      <div className="rectangle-parent5">
        <div className="frame-child7" />
{/*         <div className="borderless-frame">
          <div className="borderless-frame-child"/>
          <img className="awards-stars-icon" alt="" src="/awards-stars.svg" />
          <div className="child-frame">
            <b className="platinum-award">Platinum Award</b>
            <div className="rectangle-node">
              <img className="child-frame-child" alt="" src="/vector-337.svg" />
              <div className="in-telecom-sector-container">
                <span>{` in Telecom Sector at `}</span>
                <b>13th Exceed Occupational Health and Safety Award 2022</b>
              </div>
            </div>
          </div>
        </div> */}
        <div className="colour-block-instance">
         {/*  <div className="split-frame">
            <div className="borderless-frame-child" />
            <div className="parent-frame">
              <img
                className="awards-stars-icon1"
                alt=""
                src="/awards-stars.svg"
              />
            </div>
            <div className="child-frame2">
              <b className="sustainable-growth2">
                <span className="sustainable-growth-txt-container">
                  <p className="sustainable">Sustainable</p>
                  <p className="sustainable">Growth</p>
                </span>
              </b>
              <div className="rectangle-node">
                <img
                  className="child-frame-child"
                  alt=""
                  src="/vector-337.svg"
                />
                <div className="in-telecom-sector-container">
                  <span>{`Award for organisation in `}</span>
                  <b>Telecom Ecosystem 2022</b>
                  <span> at India Mobile Congress (IMC) 2022</span>
                </div>
              </div>
            </div>
          </div> */}
          <div className="split-frame1">
            <div className="split-frame-item" />
            <img className="awards-stars-icon" alt="" src="/awards-stars.svg" />
            <div className="recognised-as-the-container">
              <p className="sustainable">
                <span>
                  <span className="recognised-as1">Recognised as</span>
                </span>
                <b className="b">
                  <span></span>
                </b>
              </p>
              <p className="the-economic-times-sustainable">
                <b className="b">
                  <span>
                    ‘The Economic Times Sustainable Organisations 2023’
                  </span>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div className="text8">
          <div className="text-item" />
          <img className="text-inner" alt="" src="/vector-339.svg" />
        </div>
        <div className="text9">
          <div className="ellipse-div" />
          <img className="text-child1" alt="" src="/vector-340.svg" />
        </div>
      </div>
     
    </div>
  );
};

export default FrameComponent1;
