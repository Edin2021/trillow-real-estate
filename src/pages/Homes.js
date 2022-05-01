import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import Sort from "../components/Sort";
import Listings from "../components/Listings";
import Pagination from "../components/Pagination";
import SingleListing from "../components/SingleListing/SingleListing";
import { useGlobalContext } from "../context";
import noResultsImg from "../images/illustrations/no-results-2.png";
import { useEffect } from "react";

function Homes() {
  const { fetchListings, listings, loadingListings, error } =
    useGlobalContext();

  useEffect(() => {
    if (listings.length < 1) {
      const params = {
        realEstateFor: "list-for-sale",
        stateCode: "NY",
        city: "New York City",
      };
      fetchListings(params);
    }
  }, []);

  return (
    <>
      <Header />
      <SearchForm />
      <main className="homes-main">
        {loadingListings ? (
          <div className="loader"></div>
        ) : (
          <>
            {listings && listings.length > 0 ? (
              <>
                <Sort />
                <Listings />
                <Pagination />
                <SingleListing />
              </>
            ) : (
              <div className="no-results">
                <img src={noResultsImg} alt="" />
                <h1>{error ? `${error.text}.` : "Currently Empty."}</h1>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Homes;
