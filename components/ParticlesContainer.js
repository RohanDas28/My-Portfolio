import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // Initialize
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);
  return <Particles className="w-full h-full absolute translate-z-0"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: { enable: false },
      background: {
        color: {
          value: ''
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'grab'
          },
          resize: true,
        },
        mode: {
          push: {
            quantity: 90
          },
          grab: {
            distance: 300, // The distance at which particles start to follow the mouse pointer
            line_linked: {
              opacity: 0.4 // Opacity of the lines connecting particles in grab mode
            }
          }
        }
      },
      particles:{
        color:{
          value: '#e68e2e'
        },
        links: {
          color:'f5d393',
          distance:150,
          enable: true,
          opacity: 0.4,
          width:1
        },
        collisions: {
          enable: true
        },
        move:{
          directions: 'none',
          enable: true,
          outModes:{
            default:'bounce'
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number:{
          density:{
            enable: true,
            area: 800
          },
          value:80
        },
        opacity:{
          value: 0.4
        },
        shape:{
          type: 'circle'
        },
        size:{
          value: {min: 1, max: 5},
        },
      },
      detectRetina: true,
    }}
  />
};

export default ParticlesContainer;
