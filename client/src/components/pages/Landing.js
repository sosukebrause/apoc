import React, { useState } from "react";
import ParticlesBg from "particles-bg";
// import "./style.css";

const Landing = () => {
  //   constructor() {
  //     super();
  //     this.state = {
  //       name: "React"
  //     };
  //   }

  const [name, setName] = useState("React");

  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    // body: "import some image"
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15,
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }

  return (
    <div>
      <h1>New Landing Page</h1>
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
};

export default Landing;
