const setupListingPrice = (listing) => {
  const priceMin = listing.community && listing.community.price_min;
  const priceMax = listing.community && listing.community.price_max;

  const priceRange =
    priceMin && priceMax && priceMin !== priceMax
      ? `$${priceMin} - $${priceMax}`
      : "";

  const priceCommunity =
    (priceMin || priceMax) && !priceRange
      ? priceMin
        ? `$${priceMin}`
        : priceMax && `$${priceMax}`
      : "";

  const priceListing = listing.price && `$${listing.price}`;

  const formatPrice = () => {
    if (priceRange) return priceRange;
    if (priceCommunity) return priceCommunity;
    if (priceListing) return priceListing;
  };
  return formatPrice();
};

const setupListingSize = (listing) => {
  const sqftMin = listing.community && listing.community.sqft_min;
  const sqftMax = listing.community && listing.community.sqft_max;

  const sqftRange =
    sqftMin && sqftMax && sqftMin !== sqftMax ? `${sqftMin} - ${sqftMax}` : "";

  const sqftCommunity =
    (sqftMin || sqftMax) && !sqftRange
      ? sqftMin
        ? sqftMin
        : sqftMax && sqftMax
      : "";

  const sqftListing = listing.sqft && listing.sqft;

  const formatSqft = () => {
    if (sqftRange) return sqftRange;
    if (sqftCommunity) return sqftCommunity;
    if (sqftListing) return sqftListing;
    return;
  };
  return formatSqft();
};

const setupListingBeds = (listing) => {
  const bedsMin = listing.community && listing.community.beds_min;
  const bedsMax = listing.community && listing.community.beds_max;

  const bedsRange =
    bedsMin && bedsMax && bedsMin !== bedsMax ? `${bedsMin} - ${bedsMax}` : "";

  const bedsCommunity =
    (bedsMin || bedsMax) && !bedsRange
      ? bedsMin
        ? bedsMin
        : bedsMax && bedsMax
      : "";

  const bedsListing = listing.beds && listing.beds;

  const formatBeds = () => {
    if (bedsRange) return bedsRange;
    if (bedsCommunity) return bedsCommunity;
    if (bedsListing) return bedsListing;
  };

  return formatBeds();
};

const setupListingBaths = (listing) => {
  const bathsMin = listing.community && listing.community.baths_min;
  const bathsMax = listing.community && listing.community.baths_max;

  const bathsRange =
    bathsMin && bathsMax && bathsMin !== bathsMax
      ? `${bathsMin} - ${bathsMax}`
      : "";

  const bathsCommunity =
    (bathsMin || bathsMax) && !bathsRange
      ? bathsMin
        ? bathsMin
        : bathsMax && bathsMax
      : "";

  const bathsListing = listing.baths && listing.baths;

  const formatBaths = () => {
    if (bathsRange) return bathsRange;
    if (bathsCommunity) return bathsCommunity;
    if (bathsListing) return bathsListing;
  };

  return formatBaths();
};

const setupListingType = (listing) => {
  return listing.prop_type && listing.prop_type.split("_").join(" ");
};

const setupListingFor = (listing) => {
  return listing.prop_status && listing.prop_status.split("_").join(" ");
};

const setupListingAddress = (listing) => {
  if (!listing.address) return;
  const line = listing.address.line ? `${listing.address.line},` : "";
  const city = listing.address.city ? `${listing.address.city},` : "";
  const stateCode = listing.address.state_code
    ? listing.address.state_code
    : "";
  const postalCode = listing.address.postal_code
    ? listing.address.postal_code
    : "";

  return `${line} ${city} ${stateCode} ${postalCode}`;
};

export {
  setupListingPrice,
  setupListingSize,
  setupListingBeds,
  setupListingBaths,
  setupListingType,
  setupListingFor,
  setupListingAddress,
};
