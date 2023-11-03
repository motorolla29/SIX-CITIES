import { createSelector } from "reselect";
import { MAX_ADS_NEARBY, MAX_REVIEWS_IN_AD } from "../../const";
import { sortByDate } from "../../util";
import { NameSpace } from "../root-reducer";

const getAds = (state) => state[NameSpace.DATA].ads;
const getAdsAreLoaded = (state) => state[NameSpace.DATA].adsAreLoaded;
const getFullAdInfoLoaded = (state) => state[NameSpace.DATA].fullAdInfoLoaded;
const getFullAdInfo = (state) => state[NameSpace.DATA].fullAdInfo;
const getAdComments = (state) => state[NameSpace.DATA].adComments;
const getAdsNearby = (state) => state[NameSpace.DATA].adsNearby;
const getFavoriteAds = (state) => state[NameSpace.DATA].favoriteAds;
const favoriteAdsAreLoaded = (state) =>
  state[NameSpace.DATA].favoriteAdsAreLoaded;

const getLimitedAdsNearby = createSelector(getAdsNearby, (ads) =>
  ads.slice(0, MAX_ADS_NEARBY)
);

const getLimitedSortedComments = createSelector(getAdComments, (comments) => ({
  totalReviewsAmount: comments.length,
  trimmedReviews: sortByDate(comments.slice(-MAX_REVIEWS_IN_AD)),
}));

export {
  getAds,
  getAdsAreLoaded,
  getFullAdInfoLoaded,
  getFullAdInfo,
  getAdComments,
  getAdsNearby,
  getLimitedAdsNearby,
  getLimitedSortedComments,
  getFavoriteAds,
  favoriteAdsAreLoaded,
};
