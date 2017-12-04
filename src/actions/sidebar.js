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

export function fetchRegions (regionLevelId) {
  return {
    type: ActionTypes.SIDEBAR_FETCH_REGIONS,
    payload: {
      request: {
        url: `/regionLevels/${regionLevelId}/regions`
      }
    }
  }
}

export function selectRegion (regionId) {
  return {
    type: ActionTypes.SIDEBAR_SELECT_REGION,
    payload: {
      id: regionId
    }
  }
}

export function selectScenarioCollection (scenarioCollection) {
  return {
    type: ActionTypes.SIDEBAR_SELECT_SCENARIO_COLLECTION,
    payload: {
      id: scenarioCollection
    }
  }
}

export function fetchScenarios (scenarioCollectionId, regionId) {
  return {
    type: ActionTypes.SIDEBAR_FETCH_SCENARIOS,
    payload: {
      request: {
        url: `/scenarioCollection/${scenarioCollectionId}/region/${regionId}`
      }
    }
  }
}

export function selectScenarios (scenarios) {
  return {
    type: ActionTypes.SIDEBAR_SELECT_SCENARIOS,
    payload: {
      ids: scenarios
    }
  }
}

export function selectIndicators (indicators) {
  return {
    type: ActionTypes.SIDEBAR_SELECT_INDICATORS,
    payload: {
      ids: indicators
    }
  }
}

export function selectPeriod (period) {
  return {
    type: ActionTypes.SIDEBAR_SELECT_PERIOD,
    payload: {
      id: period
    }
  }
}
