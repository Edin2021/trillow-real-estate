const fetchOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  },
};

export default {
  fetchListings: async (params) => {
    const { realEstateFor, stateCode, city, beds, baths, priceMin, priceMax } =
      params;

    const endpoint = `https://realty-in-us.p.rapidapi.com/properties/v2/${realEstateFor}?state_code=${stateCode}&city=${city}&limit=200&offset=0${
      beds ? `&beds_min=${beds}` : ""
    }${baths ? `&baths_min=${baths}` : ""}${
      priceMin ? `&price_min=${priceMin}` : ""
    }${priceMax ? `&price_max=${priceMax}` : ""}`;

    return await fetch(endpoint, fetchOptions);
  },

  fetchSingleListing: async (id) => {
    const endpoint = `https://realty-in-us.p.rapidapi.com/properties/v2/detail?property_id=${id}`;

    return await (await fetch(endpoint, fetchOptions)).json();
  },
};
