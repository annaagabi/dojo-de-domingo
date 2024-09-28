import "./style.css";

import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Membership1, Membership2, Membership3,  } from "../../assets/images";

export default function OurClients() {
  return (
    <section className="OurClients-container">
      <div className="Text-clients">
        <div className="content">
          <h3>Our Clients</h3>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="Img-clients">
          <img src={Client1} alt="" />
          <img src={Client2} alt="" />
          <img src={Client3} alt="" />
          <img src={Client4} alt="" />
          <img src={Client5} alt="" />
          <img src={Client6} alt="" />
          <img src={Client7} alt="" />
        </div>
      </div>

      <div className="text-clients2">
        <h2>Manage your entire community in a single system</h2>

        <p>Who is Nextcent suitable for?</p>
      </div>

      <div className="members-group">
        <div>
          <img src={Membership1} alt="" />
          <h3>Membership Organisations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div>
          <img src={Membership2} alt="" />
          <h3>National Associations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div>
          <img src={Membership3} alt="" />
          <h3>Clubs And Groups</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

      </div>
    </section>
  );
}
