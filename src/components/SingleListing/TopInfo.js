import {
  setupListingAddress,
  setupListingFor,
  setupListingPrice,
  setupListingSize,
  setupListingType,
} from "../../util";

function TopInfo({ singleListing }) {
  const price = setupListingPrice(singleListing);

  const size = setupListingSize(singleListing);

  const buildingSize = singleListing.building_size
    ? singleListing.building_size.size
      ? singleListing.building_size.size !== 0 &&
        singleListing.building_size.size
      : ""
    : "";
  const lotSize = singleListing.lot_size
    ? singleListing.lot_size.size
      ? singleListing.lot_size.size !== 0 && singleListing.lot_size.size
      : ""
    : "";

  const address = setupListingAddress(singleListing);

  const listingType = setupListingType(singleListing);
  const listingFor = setupListingFor(singleListing);

  return (
    <div className="top-info">
      <div className="cost">
        {price}
        {singleListing.prop_status === "for_rent" && price && <span> /mo</span>}
        {!price && "Price not specified."}
      </div>{" "}
      <div className="sqft">
        {size ? <span className="row"> {`Size: ${size} sqft`}</span> : ""}

        {buildingSize ? (
          <span className="row"> {`Building size: ${buildingSize} sqft`}</span>
        ) : (
          ""
        )}

        {lotSize ? (
          <span className="row"> {`Lot size: ${lotSize} sqft`}</span>
        ) : (
          ""
        )}
      </div>
      <p>{address}</p>
      <div>
        {listingType ? <p>{listingType}</p> : ""}
        {listingFor ? <p>{listingFor}</p> : ""}
      </div>
    </div>
  );
}

export default TopInfo;
