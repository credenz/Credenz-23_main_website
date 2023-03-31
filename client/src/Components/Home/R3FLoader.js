import { Html, useProgress } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import "../loader/Loader.css"
import rocket from "../../images/rocket.svg"

export default function R3FLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [percent, setPercent] = useState(0)
  useEffect(() => {
    setPercent(Math.max(percent,Math.round(progress)));
  }, [percent, progress])
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
            <h2>{percent}%</h2>
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
