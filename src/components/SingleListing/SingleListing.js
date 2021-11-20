import ListingPictures from "./ListingPictures";
import Logo from "../Logo";
import { FaRegHeart } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";

import { useGlobalContext } from "../../context";
import { useState, useEffect } from "react";
import Overview from "./Overview";
import Features from "./Features";
import Contact from "./Contact";
import TopInfo from "./TopInfo";

function SingleListing() {
  const { singleListing, closeSingleListing } = useGlobalContext();
  const [displayPictures, setDisplayPictures] = useState(false);

  useEffect(() => {
    setDisplayPictures(false);
    if (singleListing) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [singleListing, closeSingleListing]);

  if (!singleListing) {
    return <></>;
  }

  return (
    <div
      onClick={(e) => {
        if (e.target.classList.contains("bcg-blur")) {
          closeSingleListing();
        }
      }}
      className={`bcg-blur ${singleListing && "show"}`}
    >
      <section
        className={`single-listing ${displayPictures && "expand-pictures"}`}
      >
        <h2 className="visually-hidden">single listing</h2>
        <ListingPictures
          photos={singleListing.photos}
          setDisplayPictures={setDisplayPictures}
        />
        <aside className="info">
          <header className="info-header">
            <div className="top-bar">
              <Logo />
              <div className="btns">
                <button>
                  <span className="icon" aria-hidden="true">
                    <FaRegHeart />
                  </span>
                  Save
                </button>
                <button>
                  <span className="icon" aria-hidden="true">
                    <TiArrowForwardOutline />
                  </span>
                  Share
                </button>
                <button onClick={() => closeSingleListing()}>
                  <span className="icon" aria-hidden="true">
                    <IoCloseOutline />
                  </span>
                  <span className="visually-hidden">close singleListing</span>
                </button>
              </div>
            </div>
            <TopInfo singleListing={singleListing} />
          </header>
          <hr className="seperator-line"></hr>
          <div className="info-body">
            <Overview singleListing={singleListing} />
            <hr className="seperator-line"></hr>
            <Features singleListing={singleListing} />
            <hr className="seperator-line"></hr>
            <Contact singleListing={singleListing} />
          </div>
        </aside>
      </section>
    </div>
  );
}

export default SingleListing;
