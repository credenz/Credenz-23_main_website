import { Html, useProgress } from "@react-three/drei";
import React from "react";
import "../loader/Loader.css"
import rocket from "../../images/rocket.png"

export default function R3FLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  // return <Html center>{progress} % loaded</Html>
  return (
    <Html center>
      <div class="loader-container">
        <div class="rocket-container">
          <div class="structure">
            <img
              src={rocket}
              style={{
                transform: "rotate(90deg)",
                left: "0",
                position: "absolute",
              }}
            />
          </div>
          <div class="text-container">
            <h2>{Math.round(progress)}%</h2>
          </div>
          <div class="smoke">
            <span hidden></span>
            <span hidden></span>
            <span hidden></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <span></span><span></span> */}
          </div>
        </div>
        <div class="meteors-container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Html>
  );
}
