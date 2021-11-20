import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";
import footerImg from "../images/illustrations/footer-city.png";
import Logo from "./Logo";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <nav className="dropdown-links">
          <button>
            Real Estate
            <span aria-hidden="true">
              <MdKeyboardArrowDown />
            </span>
          </button>
          <button>
            Rentals
            <span aria-hidden="true">
              <MdKeyboardArrowDown />
            </span>{" "}
          </button>
          <button>
            Mortage Rates
            <span aria-hidden="true">
              <MdKeyboardArrowDown />
            </span>{" "}
          </button>
          <button>
            Browse Homes
            <span aria-hidden="true">
              <MdKeyboardArrowDown />
            </span>{" "}
          </button>
        </nav>
        <hr className="seperator-line"></hr>
        <nav className="regular-links">
          <a href="#addLink">about</a>
          <a href="#addLink">zestimateds</a>
          <a href="#addLink">research</a>
          <a href="#addLink">careers</a>
          <a href="#addLink">help</a>
          <a href="#addLink">advertise</a>
          <a href="#addLink">fair housing guide</a>
          <a href="#addLink">terms of use</a>
          <a href="#addLink">AI</a>
          <a href="#addLink">blog</a>
          <a href="#addLink">trulia</a>
          <a href="#addLink">our east</a>
          <a href="#addLink">HotPads</a>
          <a href="#addLink">cookie preference</a>
          <a href="#addLink">privacy portal</a>
          <a href="#addLink">StreetEasy</a>
          <a href="#addLink">mobile apps</a>
        </nav>
        <a href="#addLink">
          Do Not Sell My Personal Information{" "}
          <span aria-hidden="true">
            <CgArrowRight />
          </span>
        </a>
        <hr className="seperator-line"></hr>
        <p>
          Trillow Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please <a href="#addLink">let us know</a>.
        </p>
        <p>
          Trillow, Inc. holds real estate brokerage licenses in multiple states.
          Trillow (US), Inc. holds real estate brokerage licenses in multiple
          provinces. A list of our real estate licenses is available{" "}
          <a href="#addLink">here</a>. <br />
          TREC: <a href="#addLink">
            Information about brokerage services
          </a>, <a href="#addLink">Consumer protection notice</a> <br />
          California DRE #addLink1522444
        </p>
        <a href="#">Contact Trillow, Inc. Brokerage</a>
        <p>
          For listings in the US, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by The Canadian Real Estate Association
          (CREA) and identify real estate professionals who are members of CREA.
          The trademarks MLS®, Multiple Listing Service® and the associated
          logos are owned by CREA and identify the quality of services provided
          by real estate professionals who are members of CREA. Used under
          license.
        </p>
        <aside>
          <Logo />
          <div className="media-links">
            Follow us:
            <a href="#facebook">
              <span className="visually-hidden">facebook</span>
              <FaFacebook aria-hidden="true" />
            </a>
            <a href="#instagram">
              <span className="visually-hidden">instagram</span>
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="#tiktok">
              <span className="visually-hidden">tiktok</span>
              <FaTiktok aria-hidden="true" />
            </a>
            <a href="#twitter">
              <span className="visually-hidden">twitter</span>
              <FaTwitter aria-hidden="true" />
            </a>
          </div>
          <span className="copyright">
            <FaRegCopyright aria-hidden="true" />
            Copyright {new Date().getFullYear()}
          </span>
        </aside>
        <img className="city-img" src={footerImg} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
