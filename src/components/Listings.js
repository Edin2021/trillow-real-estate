import { useGlobalContext } from "../context";
import Listing from "./Listing";

function Listings() {
  const { listings } = useGlobalContext();

  return (
    <div className="listings">
      {listings.map((listing) => (
        <Listing key={listing.property_id} listing={listing} />
      ))}
    </div>
  );
}

export default Listings;
