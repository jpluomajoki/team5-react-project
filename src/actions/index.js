export const receiveRegionLevels = (regionLevels) => {
  return {
    type: 'RECEIVE_REGION_LEVELS',
    data: regionLevels
  }
}

export function fetchRegionLevels () {
  return {
    type: 'FETCH_REGION_LEVELS',
    payload: {
      request: {
        url: '/regionLevels'
      }
    }
  }
}
