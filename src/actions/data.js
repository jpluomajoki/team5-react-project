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

export const selectRegionLevel = (id) => ({
  type: ActionTypes.SELECT_REGION_LEVEL,
  payload: {
    id
  }
})

export const selectRegion = (id) => ({
  type: ActionTypes.SELECT_REGION,
  payload: {
    id
  }
})

export const selectScenarioCollection = (id) => ({
  type: ActionTypes.SELECT_SCENARIO_COLLECTION,
  payload: {
    id
  }
})

export const selectScenarios = (ids) => ({
  type: ActionTypes.SELECT_SCENARIOS,
  payload: {
    ids
  }
})

export const selectIndicators = (ids) => ({
  type: ActionTypes.SELECT_INDICATORS,
  payload: {
    ids
  }
})

export const selectPeriod = (id) => ({
  type: ActionTypes.SELECT_PERIOD,
  payload: {
    id
  }
})
