import { Helping1, Helping2, Helping3, Helping4 } from "../../assets/images";
import "./style.css";

import React from "react";

export default function Helping() {
  return (
    <section className="helping-container">
      <div className="heplping-text">
        <h2>
          Helping a local <br/><span>business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="helpingItens">
        <div>
          <img src={Helping1} alt="" />

          <div className="helpItenContent">
            <h3>2,245,341</h3>

            <p>Members</p>
          </div>
        </div>

        <div>
          <img src={Helping2} alt="" />

          <div className="helpItenContent">
            <h3>46,328</h3>

            <p>Clubs</p>
          </div>
        </div>

        <div>
          <img src={Helping3} alt="" />

          <div className="helpItenContent">
            <h3>828,867</h3>

            <p>Event Bookings</p>
          </div>
        </div>

        <div>
          <img src={Helping4} alt="" />

          <div className="helpItenContent">
            <h3>1,926,436</h3>

            <p>Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
