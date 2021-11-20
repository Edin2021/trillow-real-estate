import img1 from "../images/illustrations/buy-a-home.png";
import img2 from "../images/illustrations/rent-a-home.png";

import { Link } from "react-router-dom";

function CardSection() {
  return (
    <section className="cards-section">
      <h2>Whether you’re buying or renting, we can help you move forward.</h2>
      <div className="cards">
        <article className="card">
          <div className="img-wrapper">
            <img src={img1} alt="" />
          </div>
          <h3 className="title">Buy a home</h3>
          <p className="desc">
            Find your place with an immersive photo experience and most
            listings, including things you won't find anywhere else.
          </p>
          <button className="card-btn">
            <Link to="/homes/for-sale">Search homes</Link>
          </button>
        </article>
        <article className="card">
          <div className="img-wrapper">
            <img src={img2} alt="" />
          </div>
          <h3 className="title">Rent a home</h3>
          <p className="desc">
            We are creating a seamless online experience - from shopping on the
            largenst rental network, to applying, to paying rent.
          </p>
          <button className="card-btn">
            <Link to="/homes/for-rent">Find rentals</Link>
          </button>
        </article>
      </div>
    </section>
  );
}

export default CardSection;
