import { createAction } from "@reduxjs/toolkit";

const changeCity = createAction(`CHANGE_CITY`, (newCity) => ({
  payload: newCity,
}));
const changeFocusedAdId = createAction(`CHANGE_FOCUSED_AD_ID`, (newId) => ({
  payload: newId,
}));
const changeSortingType = createAction(`CHANGE_SORTING_TYPE`, (newType) => ({
  payload: newType,
}));
const loadAds = createAction(`LOAD_ADS`, (ads) => ({ payload: ads }));
const adsAreLoaded = createAction(`ADS_ARE_LOADED`, (bool) => ({
  payload: bool,
}));
const loadAdDetails = createAction(`LOAD_AD_DETAILS`, (data) => ({
  payload: data,
}));
const loadFullAdInfo = createAction(`LOAD_FULL_AD_INFO`, (info) => ({
  payload: info,
}));
const fullAdInfoLoaded = createAction(`FULL_AD_INFO_LOADED`, (bool) => ({
  payload: bool,
}));
const loadAdComments = createAction(`LOAD_AD_COMMENTS`, (comments) => ({
  payload: comments,
}));
const loadAdsNearby = createAction(`LOAD_ADS_NEARBY`, (ads) => ({
  payload: ads,
}));
const login = createAction(`LOGIN`, (userData) => ({ payload: userData }));
const logout = createAction(`LOGOUT`, (userData) => ({ payload: userData }));
const setAuthStatus = createAction(`SET_AUTH_STATUS`, (bool) => ({
  payload: bool,
}));
const setCommentIsPosted = createAction(`SET_COMMENT_IS_POSTED`, (bool) => ({
  payload: bool,
}));
const redirectTo = createAction(`REDIRECT_TO`, (path) => ({ payload: path }));

export {
  changeCity,
  changeFocusedAdId,
  changeSortingType,
  loadAds,
  adsAreLoaded,
  setAuthStatus,
  login,
  logout,
  loadAdDetails,
  fullAdInfoLoaded,
  loadFullAdInfo,
  loadAdComments,
  loadAdsNearby,
  redirectTo,
  setCommentIsPosted,
};
