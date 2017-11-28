import fetch from "cross-fetch";

export const receiveRegionLevels = regionLevels => {
  return {
    type: "RECEIVE_REGION_LEVELS",
    data: regionLevels
  };
};

export function fetchRegionLevels() {
  return (dispatch, getState) => {
    console.log(getState());
  };
}
