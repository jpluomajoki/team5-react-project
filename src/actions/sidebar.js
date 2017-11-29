import * as ActionTypes from 'constants/ActionTypes'

export function fetchRegionLevels () {
  return {
    type: ActionTypes.SIDEBAR_FETCH_REGION_LEVELS,
    payload: {
      request: {
        url: '/regionLevels'
      }
    }
  }
}

export function selectRegionLevel (regionLevelId) {
  return {
    type: ActionTypes.SIDEBAR_SELECT_REGION_LEVEL,
    payload: {
      id: regionLevelId
    }
  }
}
