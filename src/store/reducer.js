import {
  DEFAULT_CITY,
  DEFAULT_SORTING_TYPE,
  AuthorizationStatus,
} from "../const";

const initialState = {
  ads: [],
  activeCity: DEFAULT_CITY,
  adSortingType: DEFAULT_SORTING_TYPE,
  focusedAdId: null,
  adsAreLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
  fullAdInfoLoaded: false,
  fullAdInfo: {},
  adComments: [],
  adsNearby: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_CITY":
      return {
        ...state,
        activeCity: payload,
      };

    case "CHANGE_FOCUSED_AD_ID":
      return {
        ...state,
        focusedAdId: payload,
      };

    case "CHANGE_SORTING_TYPE":
      return {
        ...state,
        adSortingType: payload,
      };
    case "LOAD_ADS":
      return {
        ...state,
        ads: payload,
      };

    case "ADS_ARE_LOADED":
      return {
        ...state,
        adsAreLoaded: payload,
      };

    case "SET_AUTH_STATUS":
      return {
        ...state,
        authorizationStatus: payload,
      };

    case "LOGIN":
      return {
        ...state,
        authInfo: payload,
      };

    case "LOGOUT":
      return {
        ...state,
        authInfo: {},
      };
    case "LOAD_AD_DETAILS":
      return {
        ...state,
        currentAdDetails: payload,
      };

    case "FULL_AD_INFO_LOADED":
      return {
        ...state,
        fullAdInfoLoaded: payload,
      };
    case "LOAD_FULL_AD_INFO":
      return {
        ...state,
        fullAdInfo: payload,
      };

    case "LOAD_AD_COMMENTS":
      return {
        ...state,
        adComments: payload,
      };

    case "LOAD_ADS_NEARBY":
      return {
        ...state,
        adsNearby: payload,
      };

    default:
      return state;
  }
};

export { reducer };
