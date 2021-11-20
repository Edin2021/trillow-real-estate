import React from "react";
import { FaRegCalendarAlt, FaBed, FaBath } from "react-icons/fa";
import { setupListingBaths, setupListingBeds } from "../../util";

function Overview({ singleListing }) {
  const beds = setupListingBeds(singleListing);

  const baths = setupListingBaths(singleListing);

  const calcDaysListed = () => {
    let listingDate;
    if (singleListing.list_date) {
      listingDate = singleListing.list_date;
    } else if (!singleListing.list_date && singleListing.last_update) {
      listingDate = singleListing.last_update;
    }
    return Math.floor(
      (new Date() - new Date(listingDate)) / 1000 / 60 / 60 / 24
    ).toFixed(0);
  };

  const daysListed = calcDaysListed();

  return (
    <section className="overview">
      <h3>Overview</h3>
      {singleListing.description && <p>{singleListing.description}</p>}
      {daysListed && (
        <label>
          <span className="icon" aria-hidden="true">
            <FaRegCalendarAlt />
          </span>
          Days listed
          <b>{daysListed}</b>
        </label>
      )}
      {beds && (
        <label>
          <span className="icon" aria-hidden="true">
            <FaBed />
          </span>
          Beds
          <b>{beds}</b>
        </label>
      )}
      {baths && (
        <label>
          <span className="icon" aria-hidden="true">
            <FaBath />
          </span>
          Baths
          <b>{baths}</b>
        </label>
      )}
    </section>
  );
}

export default Overview;
