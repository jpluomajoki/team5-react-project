import * as ActionTypes from 'constants/ActionTypes'

export const fetchRegionLevels = () => ({
  type: ActionTypes.FETCH_REGION_LEVELS,
  payload: {
    request: {
      url: '/regionLevels'
    }
  }
})

export const fetchRegions = (regionLevelId) => ({
  type: ActionTypes.FETCH_REGIONS,
  payload: {
    request: {
      url: `/regionLevels/${regionLevelId}/regions`
    }
  }
})

export const fetchScenarioCollectionData = (scenarioCollectionId, regionId) => ({
  type: ActionTypes.FETCH_SCENARIOS,
  payload: {
    request: {
      url: `/scenarioCollection/${scenarioCollectionId}/region/${regionId}`
    }
  }
})
