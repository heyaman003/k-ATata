import "./FrameComponent4.css";
import React,{useState,useEffect,useRef} from "react";
const FrameComponent4 = () => {
  const elementRef = useRef(null);
  const elementImg1 = useRef(null);
  const elementImg2 = useRef(null);
  const elementImg3 = useRef(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleMouseEnter = () => {
    setRotationAngle(10); // Adjust the initial rotation angle on mouse enter
  };

  const handleMouseMove = (event) => {
    // Adjust the tilt factor based on the desired tilt effect
    const tiltFactor = 40;
    const tiltX = (event.clientY / window.innerHeight - 0.5) * tiltFactor;
    const tiltY = (event.clientX / window.innerWidth - 0.5) * tiltFactor;

    if (elementImg1.current) {
      elementImg1.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
   if (elementImg2.current) {
      elementImg2.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
    if (elementImg3.current) {
      elementImg3.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    setRotationAngle(0); // Reset rotation angle on mouse leave
    if (elementImg1.current) {
      elementImg1.current.style.transform = "rotate(0deg)";
    }
   if (elementImg2.current) {
      elementImg2.current.style.transform = "rotate(0deg)";
    }
   if (elementImg3.current) {
      elementImg3.current.style.transform = "rotate(0deg)";
    }
  };
  
  useEffect(() => {
    const element = elementRef.current;
    const element1 = elementImg1.current;
    const element2 = elementImg2.current;
    const element3 = elementImg3.current;
   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the "active" class when a certain percentage of the element is in the viewport
            entry.target.classList.add('active');
          } else {
            // Remove the "active" class when the element is not in the viewport
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold based on when you want the animation to start
    );

    if (element) {
      observer.observe(element);
      observer.observe(element1);
      observer.observe(element2);
      observer.observe(element3);
    }

    return () => {
      if (element) {
        observer.observe(element);
      observer.observe(element1);
      observer.observe(element2);
      observer.observe(element3); 
      }
    };
  }, []);
  return (
    <div ref={elementRef} className="group-parent">
      <img className="group-icon6" alt="" src="/group3.svg" />
      <div className="text5">
        <img 
          className="ppcg-triangle-shadow1"
          alt=""
          src="/ppcg-triangle-shadow1.svg"
        />
        <img
        ref={elementImg1}
        className="group-icon7"
        alt=""
        src="/group4.svg"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          zIndex: 100,
          transform: `rotate(${rotationAngle}deg)`,
          transition: "transform 0.5s ease-in-out"
        }}
      />
      <img
        ref={elementImg2}
        className="clip-path-group1"
        alt=""
        src="/clip-path-group1.svg"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          zIndex: 100,
          transform: `rotate(${rotationAngle}deg)`,
          transition: "transform 0.5s ease-in-out"
        }}
      />
      <img
        ref={elementImg3}
        className="group-icon8"
        alt=""
        src="/group5@2x.png"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          zIndex: 100,
          transform: `rotate(${rotationAngle}deg)`,
          transition: "transform 0.5s ease-in-out"
        }}
      />
      </div>
      <div className="people-group">
        <b className="people4">people</b>
        <div className="text6">
          <b className="corporate-governance1">corporate governance</b>
        </div>
      </div>
      <div className="rectangle-wrapper">
        <div className="rectangle2">
          <div className="planet-parent">
            <b className="planet3">planet</b>
            <div className="awards-section">
              <b className="community3">community</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
