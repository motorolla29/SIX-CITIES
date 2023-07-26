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
};

export { ActionCreator };
