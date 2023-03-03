import React, { useRef } from "react";
import './VrCard.css'

const VrCard = () => {
  const cardRef = useRef(null);
  const mouseHandle = (event) => {
    var e = -(window.innerWidth / 2 - event.pageX) / 30,
      n = (window.innerHeight / 2 - event.pageY) / 10;
    cardRef.current.style.transform =
      "rotateY(" + e + "deg) rotateX(" + n + "deg)";
    cardRef.current.style.WebkitTransform =
      "rotateY(" + e + "deg) rotateX(" + n + "deg)";
    cardRef.current.style.MozTransformOrigin =
      "rotateY(" + e + "deg) rotateX(" + n + "deg)";
  };
  return (
    <div id="top" onMouseMove={mouseHandle}>
      <div className="perspective">
        <div className="card" ref={cardRef}>
          <div
            className="thumb"
            style={{
              backgroundImage: `url(/background.jpg)`,
            }}
          ></div>
          <h2>Virtual Reality</h2>
          <span>Dreaming with your eyes open!</span>
        </div>
      </div>
    </div>
  );
};

export default VrCard;
