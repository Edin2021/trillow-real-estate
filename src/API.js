const fetchOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
    "x-rapidapi-key": "c18dcc53e4msh27211998967b56dp1473bdjsnedeb976c1b23",
  },
};

export default {
  fetchListings: async (params) => {
    const { realEstateFor, stateCode, city, beds, baths, priceMin, priceMax } =
      params;

    const endpoint = `https://realty-in-us.p.rapidapi.com/properties/v2/${realEstateFor}?state_code=${stateCode}&city=${city}&limit=500&offset=0${
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
