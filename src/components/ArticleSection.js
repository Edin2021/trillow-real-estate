import { Link } from "react-router-dom";
import img1 from "../images/pictures/img-1.jpg";
import img2 from "../images/pictures/img-2.jpg";
import img3 from "../images/pictures/img-3.jpg";
import appStoreImg from "../images/other/app-store.png";
import googlePlayImg from "../images/other/google-play.png";

function ArticleSection() {
  return (
    <section className="article-section">
      <div className="wrapper">
        <article>
          <h3 className="title">Renting Made Simple</h3>
          <p>
            Browse the highest quality listings, apply online, sign your lease,
            and even pay your rent from any device.
          </p>
          <Link to="/renters">find out more</Link>
        </article>
        <div className="img-wrapper">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="wrapper">
        <article>
          <h3 className="title">Tips for Renters</h3>
          <p>
            Find answers to all of your renting questions with the best renter’s
            guide in the galaxy.
          </p>
          <a
            href="https://www.apartments.com/blog"
            target="_blank"
            rel="noreferrer"
          >
            get started
          </a>
        </article>
        <div className="img-wrapper">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="wrapper">
        <article>
          <h3 className="title">Take Us With You</h3>
          {/* Add link to domain */}
          <p>
            Keep Trillow.com in the palm of your hand throughout your rental
            journey.
          </p>
          <div className="app-btns">
            <button>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="visually-hidden">app store</span>
                <img src={appStoreImg} alt="" />
              </a>
            </button>
            <button>
              <a
                href="https://play.google.com/store/apps;"
                target="_blank"
                rel="noreferrer"
              >
                <span className="visually-hidden">google play</span>
                <img src={googlePlayImg} alt="" />
              </a>
            </button>
          </div>
        </article>
        <div className="img-wrapper">
          <img src={img3} alt="" />
        </div>
      </div>
      <h2>
        Search over 1.1 million listings including apartments, houses, condos,
        and townhomes available. You’ll find your next home, in any style you
        prefer.
      </h2>
    </section>
  );
}

export default ArticleSection;
