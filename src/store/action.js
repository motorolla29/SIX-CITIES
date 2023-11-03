import { createAction } from "@reduxjs/toolkit";

//ui

const changeCity = createAction(`CHANGE_CITY`, (newCity) => ({
  payload: newCity,
}));
const changeFocusedAdId = createAction(`CHANGE_FOCUSED_AD_ID`, (newId) => ({
  payload: newId,
}));
const changeSortingType = createAction(`CHANGE_SORTING_TYPE`, (newType) => ({
  payload: newType,
}));
const redirectTo = createAction(`REDIRECT_TO`, (path) => ({ payload: path }));
const setError = createAction(`SET_ERROR`, (error) => ({ payload: error }));
const setIsCommentPostError = createAction(
  `SET_COMMENT_POST_ERROR`,
  (bool) => ({
    payload: bool,
  })
);

//data

const loadAds = createAction(`LOAD_ADS`, (ads) => ({ payload: ads }));
const adsAreLoaded = createAction(`ADS_ARE_LOADED`, (bool) => ({
  payload: bool,
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
const loadFavoriteAds = createAction(`LOAD_FAVORITE_ADS`, (ads) => ({
  payload: ads,
}));
const setFavoriteAdsAreLoaded = createAction(
  `FAVORITE_ADS_ARE_LOADED`,
  (ads) => ({ payload: ads })
);
const addComment = createAction(`ADD_USER_COMMENT`, (newComments) => ({
  payload: newComments,
}));

//user

const login = createAction(`LOGIN`, (userData) => ({ payload: userData }));
const logout = createAction(`LOGOUT`, (userData) => ({ payload: userData }));
const setAuthStatus = createAction(`SET_AUTH_STATUS`, (bool) => ({
  payload: bool,
}));
const setCommentSendStatus = createAction(
  `SET_COMMENT_IS_DONE_SENDING`,
  (bool) => ({
    payload: bool,
  })
);
const setIsFavorite = createAction(
  `SET_IS_FAVORITE`,
  (hotelId, isFavorite) => ({
    payload: { hotelId, isFavorite },
  })
);

export {
  changeCity,
  changeFocusedAdId,
  changeSortingType,
  loadAds,
  adsAreLoaded,
  setAuthStatus,
  login,
  logout,
  fullAdInfoLoaded,
  loadFullAdInfo,
  loadAdComments,
  loadAdsNearby,
  loadFavoriteAds,
  redirectTo,
  setCommentSendStatus,
  setIsFavorite,
  setFavoriteAdsAreLoaded,
  addComment,
  setError,
  setIsCommentPostError,
};
