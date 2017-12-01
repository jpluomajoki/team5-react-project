import _ from'lodash'

export const getIndicatorValuesPerScenarioForEachScenario = (data, scenarioIds, indicatorIds, timePeriodId) => {
  const scenarios = _.filter(data.scenarios, scenario => scenarioIds.indexOf(String(scenario.id)) !== -1)
  let indicators = []

  _.forEach(data.indicatorCategories, category => {
    indicators = _.concat(indicators, category.indicators)
  })

  _.forEach(data.values, value => {
    const belongsToScenarios = scenarioIds.indexOf(String(value.scenarioId)) !== -1
    const belongsToTimePeriod = timePeriodId === String(value.timePeriodId)

    if (belongsToScenarios && belongsToTimePeriod) {
      const scenario = _.find(scenarios, scenario => scenario.id === value.scenarioId)
      const indicator = _.find(indicators, indicator => indicator.id === value.indicatorId)

      if (!scenario.indicators) {
        scenario.indicators = []
      }

      if (!_.find(scenario.indicators, i => i.id === indicator.id)) {
        indicator.value = value.value
        scenario.indicators.push(indicator)
      } else {
        indicator.value = indicator.value + value.value
      }
    }
  })

  return scenarios
}

export const getIndicatorScenarioValuesPerIndicator = (data, scenarioIds, indicatorIds, timePeriodId) => {
  const scenarios = _.filter(data.scenarios, scenario => scenarioIds.indexOf(String(scenario.id)) !== -1)
  const indicatorCategories = _.filter(data.indicatorCategories, indicatorCategory=> indicatorIds.indexOf(indicatorCategory) !== -1)
  let indicators = []

  _.forEach(indicatorCategories, category => {
    indicators = _.concat(indicators, _.map(category.indicators, indicator => ({
      id: indicator.id,
      name: indicator.name
    })))
  })

  _.forEach(indicators, indicator => {
    _.forEach(scenarios, scenario => {
      scenario.value = 0

      _.forEach(data.values, value => {
        const belongsToIndicator = indicator.id === value.indicatorId
        const belongsToScenario = scenario.id === value.scenarioId
        const belongsToTimePeriod = timePeriodId === String(value.timePeriodId)

        if (belongsToIndicator && belongsToScenario && belongsToTimePeriod) {
          scenario.value += value.value
        }
      })

      if (!indicator[`${scenario.name}`]) {
        indicator[`${scenario.name}`] = scenario.value
      }
    })
  })

  return indicators
}
