const convertRatingToStars = (rating, isRound = true) => {
  const RATING_MULTIPLIER = 20;
  return `${(isRound ? Math.round(rating) : rating) * RATING_MULTIPLIER}%`;
};

const getSettingsVariantNames = (variants) =>
  Object.keys(variants).reduce((acc, it) => {
    acc[
      it
        .replace(/[A-Z]/g, (uppercaseLetter) => `_${uppercaseLetter}`)
        .toUpperCase()
    ] = it;
    return acc;
  }, {});

const generateMonthYearDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.toLocaleString("en", {
    month: "long",
  })} ${newDate.getFullYear()}`;
};

const filterAdsByCity = (ads, city) => ads.filter((it) => it.city === city);

const getPluralNoun = (int, noun) => `${noun}${int === 1 ? "" : "s"}`;

const sortByKey = (arr, adSortingType) => {
  switch (adSortingType) {
    case "priceAscending":
      return arr.slice().sort((a, b) => a.price - b.price);

    case "priceDescending":
      return arr.slice().sort((a, b) => b.price - a.price);

    case "ratingDescending":
      return arr.slice().sort((a, b) => b.rating - a.rating);

    default:
      return arr;
  }
};

const getAdsByCityObj = (ads) =>
  ads.reduce((acc, it) => {
    if (!acc[it.city]) {
      acc[it.city] = [];
    }
    acc[it.city].push(it);
    return acc;
  }, {});

const sortByDate = (arr) =>
  arr.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

const getIsFavoriteStatusCode = (bool) => (bool ? 1 : 0);

const mapIsFavoriteToState = (
  fullAdInfo,
  ads,
  adsNearby,
  favoriteAds,
  payload
) => {
  const matchId = (item) => item.id === payload.hotelId;

  const favoriteFromPageIndex = favoriteAds.findIndex(matchId);
  const favoriteNearby = adsNearby.find(matchId);
  const favFromTotal = ads.find(matchId);

  if (favoriteFromPageIndex > -1) {
    favoriteAds.splice(favoriteFromPageIndex, 1);
  }
  if (favoriteNearby) {
    favoriteNearby.isFavorite = payload.isFavorite;
  }
  if (favFromTotal) {
    favFromTotal.isFavorite = payload.isFavorite;
  }
  if (fullAdInfo.id === payload.hotelId) {
    fullAdInfo.isFavorite = payload.isFavorite;
  }
};

export {
  convertRatingToStars,
  getSettingsVariantNames,
  generateMonthYearDate,
  getPluralNoun,
  filterAdsByCity,
  sortByKey,
  getAdsByCityObj,
  sortByDate,
  getIsFavoriteStatusCode,
  mapIsFavoriteToState,
};
