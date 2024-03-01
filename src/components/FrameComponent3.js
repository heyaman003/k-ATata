import React, { useState, useRef,useEffect } from 'react';
import "./FrameComponent3.css";
import { useInView } from 'react-intersection-observer';

const FrameComponent3 = () => {
  const [visible, setVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    onLeave: () => setImageVisible(false),
    rootMargin: '-100px 0px', // Adjust as needed
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust as needed
  });

  // Update state when components are in view
  if (inView && !visible) {
    setVisible(true);
  }

  if (imageInView && !imageVisible) {
    setImageVisible(true);
  }
  const sustainabilityContainerRef = useRef(null);

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
    }, { threshold: 0.9 }); // Adjust the threshold as needed

    observer.observe(sustainabilityContainer);

    return () => {
      observer.disconnect();
    };
  }, [sustainabilityContainerRef]);

  return (
    <div className="frame-vector-awardfororganisat">
      <div className="frame-awards-stars-frame">
        <img className="ppc-colour-block7" alt="" src="/ppc-colour-block.svg" />
      </div>
      <div className="header-frame4">
        <div ref={sustainabilityContainerRef} className="message-from-managing-container">
          <p className="managing-director delay1">Message from</p>
          <p className="managing-director delay2">Managing director</p>
        </div>
      </div>
      <div className={`title-frame ${visible ? 'visible' : ''}`} ref={ref}  style={{
          backgroundImage: `url('/rectangle-1093@2x.png')`,
        }}>
     {/*  <img
        className={`title-frame-child ${visible ? 'visible' : ''}`}
        alt=""
        src="/rectangle-1093@2x.png"
      /> */}
      <img
        className={`layer-1-icon4 ${visible ? 'visible' : ''}`}
        alt=""
        src="/layer-1.svg"
      />
      <div className={`instance1 ${visible ? 'visible' : ''}`}>
        <div className={`sustainable-growth-frame1 ${visible ? 'visible' : ''}`}>
          <div className={`duciendantum-ad-mil2 ${visible ? 'visible' : ''}`}>
            Duciendantum ad mil earchil minctem qui ommos untia dunt eate dus
            delis veni ducium quatetusam aut officim quid quostendam nonem
            quiduciatem. Ant harum sim quate pa velecab orepelit dolorit labo.
            Sum harum quae as nienime niscitia.
          </div>
          <img
            className={`layer-1-icon5 ${visible ? 'visible' : ''}`}
            alt=""
            src="/layer-11.svg"
          />
        </div>
        <div
          className={`amur-s-lakshminarayanan-managi-parent ${
            visible ? 'visible' : ''
          }`}
        >
          <div
            className={`amur-s-lakshminarayanan-container ${
              visible ? 'visible' : ''
            }`}
          >
            <p className="managing-director">
              <b className={`amur-s-lakshminarayanan1 ${visible ? 'visible' : ''}`}>
                Amur S Lakshminarayanan
              </b>
              <span>
                <span className="span2"></span>
              </span>
            </p>
            <p className={`managing-director1 ${visible ? 'visible' : ''}`}>
              <span>
                <span className="managing-director2">Managing Director</span>
              </span>
            </p>
          </div>
          <div
            className={`post-e-c-compliance-report-fra ${
              visible ? 'visible' : ''
            }`}
          >
            <div className="rectangle-parent4">
              <div className="frame-child6" />
              <b className={`watch-video2 ${visible ? 'visible' : ''}`}>
                watch video
              </b>
            </div>
            <img
              className={`post-e-c-compliance-report-fra-child ${
                imageVisible ? 'visible' : ''
              }`}
              alt=""
              src="/group-55.svg"
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FrameComponent3;
