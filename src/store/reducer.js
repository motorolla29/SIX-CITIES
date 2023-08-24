import { ActionType } from "./action";
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
        adsAreLoaded: true,
      };

    case "ADS_NOT_LOADED":
      return {
        ...state,
        adsAreLoaded: false,
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

    default:
      return state;
  }
};

export { reducer };
