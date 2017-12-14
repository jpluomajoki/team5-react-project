import _ from 'lodash'

const filterAlreadyExistingIndicator = (indicators) => {
  const newIndicatorsArray = []

  _.forEach(indicators, indicator => {
    if (!_.find(newIndicatorsArray, i => i.name === indicator.name)) {
      newIndicatorsArray.push(indicator)
    }
  })

  return newIndicatorsArray
}

export const formatDataSeparatedGraphs = ({ data, scenarioIds, indicatorsIds, timePeriodId }) => {
  const scenarios = _.filter(data.scenarios, scenario => scenarioIds.indexOf(scenario.id) !== -1)
  let indicators = []

  _.forEach(data.indicatorCategories, category => {
    indicators = _.concat(indicators, _.filter(category.indicators, indicator => indicatorsIds.indexOf(indicator.id) !== -1))
  })

  indicators = filterAlreadyExistingIndicator(indicators)

  _.forEach(scenarios, scenario => {
    scenario.indicators = []

    _.forEach(indicators, indicator => {
      const belongingValues = _.filter(data.values, value => {
        if (timePeriodId !== value.timePeriodId) { // value doesn't belong to time period
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
  const scenarios = _.filter(data.scenarios, scenario => scenarioIds.indexOf(scenario.id) !== -1)
  let indicators = []

  _.forEach(data.indicatorCategories, category => {
    indicators = _.concat(indicators, _.filter(category.indicators, indicator => indicatorsIds.indexOf(indicator.id) !== -1))
  })

  indicators = filterAlreadyExistingIndicator(indicators)

  console.log(indicators)

  indicators = _.map(indicators, indicator => ({
    id: indicator.id,
    name: indicator.name,
    scenarios: []
  }))

  _.forEach(indicators, indicator => {
    _.forEach(scenarios, scenario => {
      const belongingValues = _.filter(data.values, value => {
        if (timePeriodId !== value.timePeriodId) { // value doesn't belong to time period
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
