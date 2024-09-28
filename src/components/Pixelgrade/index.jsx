import React from "react";
import "./style.css";
import { Frame35 } from "../../assets/images";

export default function PixelGrade() {
  return (
    <section className="pixel-grade-container">
      <div className="imgPixel-grade">
        <img src={Frame35} alt="" />
      </div>
      <div className="learn-More">
        <div className="content-lean-more">
          <h3>The unseen of spending three years at Pixelgrade</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>
        <button>Learn More</button>
      </div>
    </section>
  );
}
