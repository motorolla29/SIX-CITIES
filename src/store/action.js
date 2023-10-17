const ActionCreator = {
  changeCity: (newCity) => ({
    type: "CHANGE_CITY",
    payload: newCity,
  }),
  changeFocusedAdId: (newId) => ({
    type: "CHANGE_FOCUSED_AD_ID",
    payload: newId,
  }),
  changeSortingType: (newType) => ({
    type: "CHANGE_SORTING_TYPE",
    payload: newType,
  }),
  loadAds: (ads) => ({
    type: "LOAD_ADS",
    payload: ads,
  }),
  adsAreLoaded: (bool) => ({
    type: "ADS_ARE_LOADED",
    payload: bool,
  }),
  setAuthStatus: (bool) => ({
    type: "SET_AUTH_STATUS",
    payload: bool,
  }),
  login: (userData) => ({
    type: "LOGIN",
    payload: userData,
  }),
  logout: (userData) => ({
    type: "LOGOUT",
    payload: userData,
  }),
  loadAdDetails: (data) => ({
    type: "LOAD_AD_DETAILS",
    payload: data,
  }),
  fullAdInfoLoaded: (bool) => ({
    type: "FULL_AD_INFO_LOADED",
    payload: bool,
  }),
  loadFullAdInfo: (info) => ({
    type: "LOAD_FULL_AD_INFO",
    payload: info,
  }),
  loadAdComments: (comments) => ({
    type: "LOAD_AD_COMMENTS",
    payload: comments,
  }),
  loadAdsNearby: (ads) => ({
    type: "LOAD_ADS_NEARBY",
    payload: ads,
  }),

  redirectTo: (path) => ({
    type: "REDIRECT_TO",
    payload: path,
  }),
};

export { ActionCreator };
