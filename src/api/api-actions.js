import {
  loadAds,
  adsAreLoaded,
  login as userLogin,
  setAuthStatus as setAuth,
  logout as userLogout,
  loadFullAdInfo,
  fullAdInfoLoaded,
  redirectTo,
  loadAdsNearby,
  setCommentIsPosted,
  setIsFavorite,
  loadAdComments,
  loadFavoriteAds,
  setFavoriteAdsAreLoaded,
} from "../store/action";
import { APIRoute, AuthorizationStatus } from "../const";
import { getIsFavoriteStatusCode } from "../util";
import adaptAdFormat from "../adapters/ads";
import adaptCommentFormat from "../adapters/comments";

const fetchOffers = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.ADS)
    .then(({ data }) => {
      dispatch(loadAds(data.map(adaptAdFormat)));
      dispatch(adsAreLoaded(true));
    })
    .catch((e) => {
      dispatch(adsAreLoaded(false));
    });

const setAuthStatus = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then(({ data }) => {
      dispatch(userLogin(data));
      dispatch(setAuth(AuthorizationStatus.AUTH));
    })
    .catch((e) => {
      dispatch(setAuth(AuthorizationStatus.NO_AUTH));
    });

const login = (userInput) => (dispatch, _getState, api) =>
  api
    .post(APIRoute.LOGIN, userInput)
    .then(({ data }) => {
      localStorage.token = data.token;
      dispatch(userLogin(data));
      dispatch(setAuth(AuthorizationStatus.AUTH));
    })
    .catch((e) => {
      dispatch(setAuth(AuthorizationStatus.NO_AUTH));
    });

const logout = () => (dispatch, _getState, api) =>
  api.delete(APIRoute.LOGOUT).then(() => {
    localStorage.removeItem("token");
    dispatch(userLogout());
    dispatch(setAuth(AuthorizationStatus.NO_AUTH));
  });

const fetchFullAdInfo = (adId) => (dispatch, _getState, api) =>
  api
    .get(`${APIRoute.ADS}/${adId}`)
    .then(({ data }) => {
      dispatch(loadFullAdInfo(adaptAdFormat(data)));
      dispatch(fullAdInfoLoaded(true));
    })
    .catch((e) => {
      dispatch(redirectTo(APIRoute.NOT_FOUND));
      dispatch(fullAdInfoLoaded(false));
    });

const fetchAdComments = (adId) => (dispatch, _getState, api) =>
  api.get(`${APIRoute.COMMENTS}/${adId}`).then(({ data }) => {
    dispatch(loadAdComments(data.map(adaptCommentFormat)));
  });

const fetchAdsNearby = (adId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.ADS}/${adId}${APIRoute.ADS_NEARBY}`).then(({ data }) => {
    dispatch(loadAdsNearby(data.map(adaptAdFormat)));
  });
};

const postComment = (userComment, adId) => (dispatch, _getState, api) => {
  api
    .post(`${APIRoute.COMMENTS}/${adId}`, userComment)
    .then(({ data }) => {
      dispatch(setCommentIsPosted(true));
      dispatch(loadAdComments(data.map(adaptCommentFormat)));
    })
    .catch((e) => {
      dispatch(setCommentIsPosted(true));
    });
};
const fetchFavoriteAds = () => (dispatch, _getState, api) => {
  api.get(`${APIRoute.FAVORITE}`).then(({ data }) => {
    dispatch(loadFavoriteAds(data.map(adaptAdFormat)));
    dispatch(setFavoriteAdsAreLoaded(true));
  });
};

const setIsFavoriteAd = (hotelId, isFavorite) => (dispatch, _getState, api) => {
  api
    .post(
      `${APIRoute.FAVORITE}/${hotelId}/${getIsFavoriteStatusCode(isFavorite)}`
    )
    .then(() => {
      dispatch(setIsFavorite(hotelId, isFavorite));
    })
    .catch((e) => {
      dispatch(redirectTo(APIRoute.LOGIN));
    });
};

export {
  fetchOffers,
  setAuthStatus,
  login,
  logout,
  fetchAdsNearby,
  fetchFullAdInfo,
  fetchAdComments,
  postComment,
  fetchFavoriteAds,
  setIsFavoriteAd,
};
