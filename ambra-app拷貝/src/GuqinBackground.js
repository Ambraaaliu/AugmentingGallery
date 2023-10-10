import React from 'react';
import { ReactP5Wrapper as P5Wrapper } from 'react-p5-wrapper';

class Guqin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      particles: [],
      isMoving: true,
    };
  }

  setup = (p5, canvasParentRef) => {
    p5.colorMode(p5.HSB, 100);
    let canvas = p5.createCanvas(window.width, window.height); // Corrected lowercase
    canvas.parent("canvasContainer1");
    for (let i = 0; i < 100; i++) {
      this.state.particles.push(new Particle(p5.random(0, window.width), p5.random(0, window.height), 20, p5));
    }
  };

  draw = (p5) => {
    // draw background
    p5.background(15, 10, 90, 55);

    // Loop through particles and display them
    for (let particle of this.state.particles) {
      particle.display(p5);
      particle.verticalmove();
      particle.reappear(p5);
    }
  };

  render() {
    return (
      <div>
        <P5Wrapper setup={this.setup} draw={this.draw} />
        {/* Your other React components and content */}
      </div>
    );
  }
}

class Particle {
  constructor(x, y, s, p5) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.size = p5.random(5, 8);
    this.circlepo = p5.random(-10, 10);
    this.color = p5.random(55, 58);
    this.colorsaturation = p5.random(0, 30);
    this.xSpd = 0;
    this.ySpd = p5.random(5, 9);
  }

  display(p5) {
    p5.push();
    p5.translate(this.x, this.y);
    p5.fill(this.color, this.colorsaturation, 100);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(this.s * 0.5, 0);
    p5.vertex(this.s * 1, 0);
    p5.vertex(this.s * 1.3, 8);
    p5.vertex(this.s * 1, this.s * 0.5);
    p5.vertex(this.s * 1.2, 0);
    p5.endShape();
    p5.pop();
  }

  verticalmove() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  reappear(p5) {
    if (this.x < 0) {
      this.x = p5.width;
    } else if (this.x > p5.width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = p5.height;
    } else if (this.y > p5.height) {
      this.y = 0;
    }
  }
}

export default Guqin;
