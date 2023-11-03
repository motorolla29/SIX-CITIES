import { data } from "./data";

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

describe("Reducer: data", () => {
  it("without additional parameters should return initial state", () => {
    const state = { ...initialState };
    expect(data(undefined, {})).toEqual(state);
  });

  it('should update "ads" by a given value', () => {
    const state = { ...initialState };
    const payload = [
      { id: 10, title: "test" },
      { id: 12, title: "test2" },
    ];
    const adsLoadAction = { type: `LOAD_ADS`, payload };

    expect(data(state, adsLoadAction)).toEqual({ ...state, ads: payload });
  });

  it('should update "adsAreLoaded" by a given value', () => {
    const state = { ...initialState };
    const payload = true;
    const adsAreLoadedAction = { type: `ADS_ARE_LOADED`, payload };

    expect(data(state, adsAreLoadedAction)).toEqual({
      ...state,
      adsAreLoaded: payload,
    });
  });

  it('should update "fullAdInfoLoaded" by a given value', () => {
    const state = { ...initialState };
    const payload = true;
    const fillAdInfoIsLoadedAction = { type: `FULL_AD_INFO_LOADED`, payload };

    expect(data(state, fillAdInfoIsLoadedAction)).toEqual({
      ...state,
      fullAdInfoLoaded: payload,
    });
  });

  it('should update "fullAdInfo" by a given value', () => {
    const state = { ...initialState };
    const payload = { id: 10, title: "test" };
    const fullAdInfoLoadAction = { type: `LOAD_FULL_AD_INFO`, payload };

    expect(data(state, fullAdInfoLoadAction)).toEqual({
      ...state,
      fullAdInfo: payload,
    });
  });

  it('should update "adComments" by a given value on commentsLoad action', () => {
    const state = { ...initialState };
    const payload = [{ id: 10, comment: "test" }];
    const commentsLoadAction = { type: `LOAD_AD_COMMENTS`, payload };

    expect(data(state, commentsLoadAction)).toEqual({
      ...state,
      adComments: payload,
    });
  });

  it('should update "adComments" by a given value on addComment action', () => {
    const state = { ...initialState };
    const payload = [
      { id: 10, comment: "test" },
      { id: 11, comment: "test2" },
    ];

    const addCommentAction = { type: `ADD_USER_COMMENT`, payload };

    expect(data(state, addCommentAction)).toEqual({
      ...state,
      adComments: payload,
    });
  });

  it('should update "adsNearby" by a given value', () => {
    const state = { ...initialState };
    const payload = [
      { id: 10, title: "test" },
      { id: 11, title: "test2" },
    ];

    const loadAdsNearbyAction = { type: `LOAD_ADS_NEARBY`, payload };

    expect(data(state, loadAdsNearbyAction)).toEqual({
      ...state,
      adsNearby: payload,
    });
  });

  it('should update "favoriteAds" by a given value', () => {
    const state = { ...initialState };
    const payload = [
      { id: 10, title: "test" },
      { id: 11, title: "test2" },
    ];

    const loadFavoriteAdsAction = { type: `LOAD_FAVORITE_ADS`, payload };

    expect(data(state, loadFavoriteAdsAction)).toEqual({
      ...state,
      favoriteAds: payload,
    });
  });

  it('should update "favoriteAdsAreLoaded" by a given value', () => {
    const state = { ...initialState };
    const payload = true;
    const favoriteAdsAreLoadedAction = {
      type: `FAVORITE_ADS_ARE_LOADED`,
      payload,
    };

    expect(data(state, favoriteAdsAreLoadedAction)).toEqual({
      ...state,
      favoriteAdsAreLoaded: payload,
    });
  });

  it('should toggle "isFavorite" flag on corresponding state fields and remove ad item from "favoriteAds" on id match', () => {
    const InitialState = {
      fullIdMatch: {
        ...initialState,
        fullAdInfo: { id: 20, isFavorite: false },
        ads: [
          { id: 20, isFavorite: false },
          { id: 10, isFavorite: false },
        ],
        adsNearby: [
          { id: 20, isFavorite: false },
          { id: 10, isFavorite: false },
        ],
        favoriteAds: [
          { id: 20, isFavorite: false },
          { id: 10, isFavorite: false },
        ],
      },
      partialIdMatch: {
        ...initialState,
        fullAdInfo: { id: 10, isFavorite: false },
        ads: [
          { id: 20, isFavorite: false },
          { id: 10, isFavorite: false },
        ],
        adsNearby: [
          { id: 20, isFavorite: false },
          { id: 10, isFavorite: false },
        ],
        favoriteAds: [
          { id: 10, isFavorite: false },
          { id: 5, isFavorite: false },
        ],
      },
    };

    const ExpectedState = {
      fullIdMatch: {
        ...initialState,
        fullAdInfo: { id: 20, isFavorite: true },
        ads: [
          { id: 20, isFavorite: true },
          { id: 10, isFavorite: false },
        ],
        adsNearby: [
          { id: 20, isFavorite: true },
          { id: 10, isFavorite: false },
        ],
        favoriteAds: [{ id: 10, isFavorite: false }],
      },
      partialIdMatch: {
        ...initialState,
        fullAdInfo: { id: 10, isFavorite: false },
        ads: [
          { id: 20, isFavorite: true },
          { id: 10, isFavorite: false },
        ],
        adsNearby: [
          { id: 20, isFavorite: true },
          { id: 10, isFavorite: false },
        ],
        favoriteAds: [
          { id: 10, isFavorite: false },
          { id: 5, isFavorite: false },
        ],
      },
    };

    const setIsFavoriteIdMatchAction = {
      type: `SET_IS_FAVORITE`,
      payload: { hotelId: 20, isFavorite: true },
    };
    const setIsFavoriteNoIdMatchAction = {
      type: `SET_IS_FAVORITE`,
      payload: { hotelId: 77, isFavorite: true },
    };

    expect(data(InitialState.fullIdMatch, setIsFavoriteIdMatchAction)).toEqual(
      ExpectedState.fullIdMatch
    );
    expect(
      data(InitialState.partialIdMatch, setIsFavoriteIdMatchAction)
    ).toEqual(ExpectedState.partialIdMatch);
    expect(
      data(InitialState.fullIdMatch, setIsFavoriteNoIdMatchAction)
    ).toEqual(InitialState.fullIdMatch);
  });
});
