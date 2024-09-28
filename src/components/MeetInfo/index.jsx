import "./style.css";
import {
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client7,
  Image999,
} from "../../assets/images";

export default function MeetInfo() {
  return (
    <div className="meetInfo-container">
      <img className="meet-info-image" src={Image999} alt="" />
      <div className="wrapperMeet">
        <div className="Meet-content">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h5>Tim Smith</h5>
          <p className="text-meet">British Dragon Boat Racing Association</p>
        </div>

        <div className="icon-items">
          <img src={Client1} alt="" />
          <img src={Client7} alt="" />
          <img src={Client2} alt="" />
          <img src={Client5} alt="" />
          <img src={Client4} alt="" />
          <img src={Client3} alt="" />
          <p>Meet all customers →</p>
        </div>
      </div>
    </div>
  );
}
