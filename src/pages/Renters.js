import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../images/illustrations/browse-listings.png";
import img2 from "../images/illustrations/apply.png";
import img3 from "../images/illustrations/sign-lease.png";
import img4 from "../images/illustrations/pay-rent-online.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Renters() {
  return (
    <>
      <Header />
      <section className="hero-renters">
        <div className="hero-center">
          <h1 className="title">Buying a home has never been easier.</h1>
          <p className="sub-title">
            From search to sign, you can do everything online.
          </p>
        </div>
        <div className="bcg-blur-renters"></div>
      </section>
      <main>
        <div className="cards-renters">
          <article>
            <div className="img-wrapper">
              <img src={img1} alt="" />
            </div>
            <div className="card-info">
              <h3 className="title">Browse millions of listings</h3>
              <p className="desc">
                Search over 1.4 million listings, including apartments, houses,
                condos and townhomes. With the most listings to choose from,
                you'll find your perfect fit.
              </p>
              <a href="#addLink">
                Learn more about searching
                <span aria-hidden="true">
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </div>
          </article>
          <article>
            <div className="img-wrapper">
              <img src={img2} alt="" />
            </div>
            <div className="card-info">
              <h3 className="title">Apply in minutes</h3>
              <p className="desc">
                For $29, you can apply to 10 properties. Each application
                includes secure credit and background reports by TransUnion™.{" "}
                <br />
                <a href="#addLink">See a sample application and reports.</a>
              </p>
              <a href="#addLink">
                Learn more about applications{" "}
                <span aria-hidden="true">
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </div>
          </article>
          <article>
            <div className="img-wrapper">
              <img src={img3} alt="" />
            </div>
            <div className="card-info">
              <h3 className="title">Sign your lease</h3>
              <p className="desc">
                Digitally review and sign a lease crafted by lawyers, designed
                to protect you and the property owner.
                <br />
                <a href="#addLink">See a sample lease.</a>
              </p>
              <a href="#addLink">
                Learn more about leases
                <span aria-hidden="true">
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </div>
          </article>
          <article>
            <div className="img-wrapper">
              <img src={img4} alt="" />
            </div>
            <div className="card-info">
              <h3 className="title">Pay rent online</h3>
              <p className="desc">
                Easily set up monthly rent and one-time fees to be paid
                automatically online.
              </p>
              <a href="#addLink">
                Learn more about setting up payments
                <span aria-hidden="true">
                  <MdKeyboardArrowRight />
                </span>
              </a>
            </div>
          </article>
        </div>
        <section>
          <h2>Ready to get started?</h2>
          <p>
            Choose from over 1.4 million apartments, houses, condos, and
            townhomes.
          </p>
          <button>
            <Link to="/homes">start browsing</Link>{" "}
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Renters;
