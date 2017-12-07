import _ from 'lodash'

export const formatDataSeparatedGraphs = ({ data, scenarioIds, indicatorsIds, timePeriodId }) => {
  const scenarios = _.filter(data.scenarios, scenario => scenarioIds.indexOf(String(scenario.id)) !== -1)
  let indicators = []

  _.forEach(data.indicatorCategories, category => {
    indicators = _.concat(indicators, _.filter(category.indicators, indicator => indicatorsIds.indexOf(String(indicator.id)) !== -1))
  })

  _.forEach(scenarios, scenario => {
    scenario.indicators = []

    _.forEach(indicators, indicator => {
      const belongingValues = _.filter(data.values, value => {
        if (timePeriodId !== String(value.timePeriodId)) { // value doesn't belong to time period
          return false
        }

        if (scenario.id !== value.scenarioId) { // value doesn't belong to scenario
          return false
        }

        if (indicator.id !== value.indicatorId) { // value doesn't belong to one of the indicator
          return false
        }

        return true
      })

      let totalValue = 0
      _.forEach(belongingValues, v => {
        totalValue += v.value
      })

      scenario.indicators.push({
        id: indicator.id,
        name: indicator.name,
        values: belongingValues,
        value: totalValue
      })
    })
  })

  return scenarios
}

export const formatDataCombinedGraph = ({ data, scenarioIds, indicatorsIds, timePeriodId }) => {
  const scenarios = _.filter(data.scenarios, scenario => scenarioIds.indexOf(String(scenario.id)) !== -1)
  let indicators = []

  _.forEach(data.indicatorCategories, category => {
    indicators = _.concat(indicators, _.filter(category.indicators, indicator => indicatorsIds.indexOf(String(indicator.id)) !== -1))
  })

  indicators = _.map(indicators, indicator => ({
    id: indicator.id,
    name: indicator.name,
    scenarios: []
  }))

  _.forEach(indicators, indicator => {
    _.forEach(scenarios, scenario => {
      const belongingValues = _.filter(data.values, value => {
        if (timePeriodId !== String(value.timePeriodId)) { // value doesn't belong to time period
          return false
        }

        if (scenario.id !== value.scenarioId) { // value doesn't belong to scenario
          return false
        }

        if (indicator.id !== value.indicatorId) { // value doesn't belong to one of the indicator
          return false
        }

        return true
      })

      let totalValue = 0
      _.forEach(belongingValues, v => {
        totalValue += v.value
      })

      indicator.values = belongingValues // <-- used for development (just to check things)
      indicator[`${scenario.name}`] = totalValue // <-- used for bar and radar graphs
      indicator.scenarios.push({ // <-- used for table
        name: scenario.name,
        value: totalValue
      })
    })
  })

  return indicators
}
