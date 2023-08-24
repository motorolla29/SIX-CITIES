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
  adsNotLoaded: () => ({
    type: "ADS_NOT_LOADED",
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
};

export { ActionCreator };
