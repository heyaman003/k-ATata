import "./FrameComponent6.css";
import React, { useEffect, useRef } from 'react';
const FrameComponent6 = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const container2 = containerRef2.current;
    const container3 = containerRef3.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class to trigger the animation when in view
            container.classList.add('animate-in');
            container2.classList.add('animate-in');
            container3.classList.add('animate-in-last');
          } 
        });
      },
      { threshold: 0.9 } // Adjust the threshold based on when you want the animation to start
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div className="line">
      <div className="ellipse">
        <div className="rectangle-awards">
          <div className="awards-stars">
            <img
              className="ppc-colour-block6"
              alt=""
              src="/ppc-colour-block.svg"
            />
          </div>
          <div  ref={containerRef} className="the-pillars-of-container">
          <p className="the-pillars-of">
        <span>T</span>
        <span>H</span>
        <span>E</span>
        <span>&nbsp;</span>
        <span>P</span>
        <span>I</span>
        <span>L</span>
        <span>L</span>
        <span>A</span>
        <span>R</span>
        <span>S</span>
        <span>&nbsp;</span>
        <span>O</span>
        <span>F</span>
      </p>
      <p className="the-pillars-of">
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>&nbsp; </span>
        <span>S</span>
        <span>T</span>
        <span>R</span>
        <span>A</span>
        <span>T</span>
        <span>E</span>
        <span>G</span>
        <span>Y</span>
      </p>
          </div>
        </div>
        <b ref={containerRef2} className="our-sustainability-strategy-container">
      <span className="strategy-text">
        Our sustainability strategy has a 360-degree focus, comprising three
        dimensions –
      </span>
      <span className="people1">People,</span>
      <span className="delayed-span">{` `}</span>
      <span className="planet1">Planet</span>
      <span className="delayed-span">{` `}</span>
      <span className="community1"><span style={{color:"#123c61"}}>and</span> Community.</span>
    </b>
      </div>
      <div ref={containerRef3} className="frame-sustainable-growth">
        <div className="rectangle-certificate">
          <div className="te-vitiore-serrora-container">
            <p className="te-vitiore-serrora">
              Te vitiore serrora que enihillab inverferum fuga. Nem lam volupta
              spitia consect emporit ea de nes esequis verro dolorioritas
              estrunt et molorat.
            </p>
            <p className="te-vitiore-serrora">&nbsp;</p>
            <p className="nem-repudam-que">
              Nem repudam que intiore mporepe rspeles sin necum reptibu
              sanducietur, coreped molupta veratin nimus parchilit quodi qui bea
              corioss imenit, sustius aut quaecea tuscitas peruptatur acimagnim
              dia comnist plaut apedisint fuga. Ulpa iditium nobis a inctur.
            </p>
            <p className="nem-repudam-que"></p>
            <p className="nem-repudam-que">
              Venditae non pliquibusdae ipsam verfernat aperibusdani quatur
            </p>
            <p className="nem-repudam-que">
              Vendite mpella is simpore nditate mperiorum remoluptatio ex
              everemquodis eatem fugia netur as aut archilit qui il iumqui
              omniscidio molent eatiore, consequia vero earitae porpos seque cum
              qui repuda quos ullabore voluptaepero
            </p>
          </div>
        </div>
        <div className="corporatesocialresponsibility" >
         {/*  <img
            className="corporatesocialresponsibility-child"
            alt=""
            src="/rectangle-1113.svg"
          /> */}
          <img className="group-icon3" alt="" src="/group.svg" />
          <div className="post-e-ccompliance">
            <img
              className="ppcg-triangle-shadow"
              alt=""
              src="/ppcg-triangle-shadow.svg"
            />
            <img className="group-icon4" alt="" src="/group1.svg" />
            <img
              className="clip-path-group"
              alt=""
              src="/clip-path-group.svg"
            />
            <img className="group-icon5" alt="" src="/group2@2x.png" />
          </div>
          <div className="awards-block">
            <b className="people2">people</b>
            <div className="sustainable-growth1">
              <b className="corporate-governance">corporate governance</b>
            </div>
          </div>
          <div className="certifications-public-consulta">
            <div className="environmental-clearance">
              <div className="post-e-c-compliance-report1">
                <b className="planet2">planet</b>
                <div className="awards-stars-frame1">
                  <b className="community2">community</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
