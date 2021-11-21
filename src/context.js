import React, { useEffect, useState } from "react";
import API from "./API";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [error, setError] = useState(false);
  const [loadingListings, setLoadingListings] = useState(false);
  const [data, setData] = useState([]);
  const [listings, setListings] = useState([]);
  const [singleListing, setSingleListing] = useState(null);
  const [singleListingId, setSingleListingId] = useState(null);
  const [loadingSingle, setLoadingSingle] = useState(false);
  const [sortParam, setSortParam] = useState("newest");
  const [pages, setPages] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  // const [params, setParams] = useState(paramsPlaceholder);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const fetchListings = async (params) => {
    setLoadingListings(true);
    try {
      const response = await API.fetchListings(params);
      if (response.ok) {
        const data = await response.json();
        setData([...data.properties]);
        setError(false);
        setLoadingListings(false);
      } else {
        setError({ error: true, text: response.statusText });
        setLoadingListings(false);
      }
    } catch (error) {
      setError(true);
      setLoadingListings(false);
    }
  };

  const fetchSingleListing = async (id) => {
    setLoadingSingle(true);
    try {
      const data = await API.fetchSingleListing(id);
      setSingleListing(...data.properties);
      setError(false);
      setLoadingSingle(false);
    } catch (error) {
      setError(true);
      setLoadingSingle(false);
    }
  };

  const sortNewest = (array) => {
    let sortedListings = [];
    if (array && array.length) {
      sortedListings = array.sort(
        (a, b) => new Date(b.last_update) - new Date(a.last_update)
      );
    }
    return sortedListings;
  };

  const sortPrice = (order, array) => {
    let sortedListings = [];
    if (array && array.length) {
      sortedListings = array.sort((a, b) => {
        const bPrice = b.community ? b.community.price_min : b.price;
        const aPrice = a.community ? a.community.price_min : a.price;
        if (order === "lowToHigh") return aPrice - bPrice;
        else if (order === "highToLow") return bPrice - aPrice;
      });
    }
    return sortedListings;
  };

  const getSortParam = (param) => {
    setSortParam("");
    setSortParam(param);
  };

  const handleSort = (param, array) => {
    let sortedListings = [];
    if (param === "newest") {
      sortedListings = sortNewest(array);
    }
    if (param === "highToLow") {
      sortedListings = sortPrice(param, array);
    }
    if (param === "lowToHigh") {
      sortedListings = sortPrice(param, array);
    }
    return sortedListings;
  };

  const openSingleListing = (id) => {
    setSingleListingId(id);
    fetchSingleListing(id);
  };

  const closeSingleListing = () => {
    setSingleListing("");
  };

  const nextPage = () => {
    if (currPage < pages.length - 1) {
      setCurrPage((prevPage) => prevPage + 1);
    } else {
      setCurrPage(pages.length - 1);
    }
  };

  const prevPage = () => {
    if (currPage > 0) {
      setCurrPage((prevPage) => prevPage - 1);
    } else {
      setCurrPage(0);
    }
  };

  useEffect(() => {
    setCurrPage((prevPage) => 0);
    const newArray = [];
    while (data.length) {
      newArray.push(data.splice(0, 50));
    }
    setPages([...newArray]);
    setListings(newArray[0]);
  }, [data]);

  useEffect(() => {
    if (loadingListings) {
      setLoadingListings(false);
      setListings(handleSort(sortParam, listings));
    }
  }, [listings]);

  useEffect(() => {
    if (pages.length) {
      const page = pages[currPage];
      const sortedListings = [...handleSort(sortParam, page)];
      setListings(sortedListings);
    }
  }, [currPage]);

  useEffect(() => {
    setListings([...handleSort(sortParam, listings)]);
  }, [sortParam]);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        toggleMenu,
        closeMenu,
        listings,
        fetchListings,
        loadingListings,
        error,
        sortNewest,
        sortPrice,
        getSortParam,
        singleListing,
        singleListingId,
        loadingSingle,
        openSingleListing,
        closeSingleListing,
        pages,
        currPage,
        nextPage,
        prevPage,
        setCurrPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => React.useContext(AppContext);
