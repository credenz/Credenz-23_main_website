// // import React from 'react'
// // import Particles from "react-particles";
// // import { loadTrianglesPreset } from "tsparticles-preset-triangles";

// // export default class ParticlesContainer extends React.PureComponent{
// //   // this customizes the component tsParticles installation
// //   async customInit(engine){
// //     // this adds the preset to tsParticles, you can safely use the
// //     await loadTrianglesPreset(engine);
// //   }

// //   render() {
// //     const options = {
// //       preset: "triangles",
// //     };

// //     return <Particles options={options} init={this.customInit} />;
// //   }
// // }


// // import React from "react";
// // import WAVES from "vanta/dist/vanta.waves.min";
// // Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag


// import React, { useState, useEffect, useRef } from 'react'
// import CLOUDS from 'vanta/dist/vanta.clouds.min'
// // Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

//  const EventSky = ({children}) => {
//   const [vantaEffect, setVantaEffect] = useState(0)
//   const myRef = useRef(null)
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(CLOUDS({
//         el: myRef.current,
//         THREE: window.THREE,
//         mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   backgroundColor: 0x161414,
//   skyColor: 0x2a0216,
//   cloudColor: 0x591037,
//   cloudShadowColor: 0x134493,
//   sunColor: 0x0,
//   sunGlareColor: 0xfcb6ce,
//   sunlightColor: 0x0,
//   speed: 1.60
//   //       color1: 0x1beded,
//   // color2: 0x6060c
//       }))
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])
//   return <div ref={myRef}>
//     {children}
//   </div>
// }

// export default EventSky;

