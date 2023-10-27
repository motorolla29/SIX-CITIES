import { createSelector } from "reselect";
import { filterAdsByCity } from "../../util";
import { getAds } from "../data/selectors";
import { NameSpace } from "../root-reducer";

const getActiveCity = (state) => state[NameSpace.UI].activeCity;
const getAdSortingType = (state) => state[NameSpace.UI].adSortingType;
const getFocusedAdId = (state) => state[NameSpace.UI].focusedAdId;
const getAdsFilteredByCity = createSelector(
  [getAds, getActiveCity],
  (ads, city) => filterAdsByCity(ads, city)
);
const getError = (state) => state[NameSpace.UI].error;
const getIsCommentPostError = (state) => state[NameSpace.UI].isCommentPostError;

export {
  getActiveCity,
  getAdSortingType,
  getFocusedAdId,
  getAdsFilteredByCity,
  getError,
  getIsCommentPostError,
};
