import { createReducer } from "@reduxjs/toolkit";
import {
  addComment,
  adsAreLoaded,
  fullAdInfoLoaded,
  loadAdComments,
  loadAds,
  loadAdsNearby,
  loadFullAdInfo,
  loadFavoriteAds,
  setFavoriteAdsAreLoaded,
  setIsFavorite,
} from "../action";
import { mapIsFavoriteToState } from "../../util";

const initialState = {
  ads: [],
  adsAreLoaded: false,
  fullAdInfoLoaded: false,
  fullAdInfo: {},
  adComments: [],
  adsNearby: [],
  favoriteAds: [],
  favoriteAdsAreLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAds, (state, action) => {
      state.ads = action.payload;
    })
    .addCase(adsAreLoaded, (state, action) => {
      state.adsAreLoaded = action.payload;
    })
    .addCase(fullAdInfoLoaded, (state, action) => {
      state.fullAdInfoLoaded = action.payload;
    })
    .addCase(loadFullAdInfo, (state, action) => {
      state.fullAdInfo = action.payload;
    })
    .addCase(loadAdComments, (state, action) => {
      state.adComments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.adComments = action.payload;
    })
    .addCase(loadAdsNearby, (state, action) => {
      state.adsNearby = action.payload;
    })
    .addCase(loadFavoriteAds, (state, action) => {
      state.favoriteAds = action.payload;
    })
    .addCase(setFavoriteAdsAreLoaded, (state, action) => {
      state.favoriteAdsAreLoaded = action.payload;
    })
    .addCase(
      setIsFavorite,
      ({ fullAdInfo, ads, adsNearby, favoriteAds }, { payload }) => {
        mapIsFavoriteToState(fullAdInfo, ads, adsNearby, favoriteAds, payload);
      }
    );
});

export { data };
