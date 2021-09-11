import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {box.map((square, i) => {
          return (
            <div
              key={i}
              className="bounding-box"
              title={square.celebrity}
              style={{
                top: square.topRow,
                right: square.rightCol,
                bottom: square.bottomRow,
                left: square.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
