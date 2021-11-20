import { useGlobalContext } from "../context";
import notAvailable from "../images/other/not-available.jpg";
import {
  setupListingAddress,
  setupListingBaths,
  setupListingBeds,
  setupListingFor,
  setupListingPrice,
  setupListingSize,
  setupListingType,
} from "../util";

function Listing({ listing }) {
  const { openSingleListing, loadingSingle, singleListingId } =
    useGlobalContext();

  const { photos, last_update, property_id } = listing;

  const showLoader =
    loadingSingle && singleListingId === property_id ? true : "";

  // Changing url char "s" to "x" at the end of the url if it exists to increase photo resolution
  const photoUrl =
    photos && photos.length > 0
      ? `${
          photos[0].href.split("")[photos[0].href.length - 5] === "s"
            ? photos[0].href.slice(0, -5) + "x.jpg"
            : photos[0].href
        }`
      : listing.thumbnail
      ? listing.thumbnail
      : notAvailable;

  const lastUpdated = () => {
    const milliseconds = new Date() - new Date(last_update);
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);
    if (hours > 23) {
      const formatDays =
        Math.floor(hours / 24) > 1
          ? `${(hours / 24).toFixed(0)} days ago`
          : `${(hours / 24).toFixed(0)} day ago`;
      return formatDays;
    } else if (hours >= 1 && hours < 24) {
      const formatHours =
        hours > 1 ? `${hours} hours ago` : `${hours} hour ago`;
      return formatHours;
    } else if (hours < 1) {
      return "Less than an hour ago";
    }
  };

  const updatedAgo = lastUpdated();

  const price = setupListingPrice(listing);
  const size = setupListingSize(listing);
  const beds = setupListingBeds(listing);
  const baths = setupListingBaths(listing);
  const listingType = setupListingType(listing);
  const listingFor = setupListingFor(listing);
  const address = setupListingAddress(listing);

  return (
    <article
      className={`listing ${showLoader && "is-loading"}`}
      onClick={() => {
        if (loadingSingle) return;
        openSingleListing(property_id);
      }}
      tabIndex="0"
    >
      {showLoader && <div className="loader"></div>}

      <div className="img-wrapper">
        <img src={photoUrl} alt="" />
        <span className="updated-ago">{updatedAgo}</span>
      </div>
      <div className="info">
        <h3 className="cost">
          {price && price}{" "}
          {listing.prop_status === "for_rent" && price && <span> /mo</span>}
          {!price && "Price not specified."}
        </h3>
        <p>
          {beds && `${beds}bd | `}
          {baths && `${baths}ba | `}
          {size && `${size} sqft | `}
          {listingType} | {listingFor}
        </p>
        <p>{address}</p>
      </div>
    </article>
  );
}

export default Listing;
