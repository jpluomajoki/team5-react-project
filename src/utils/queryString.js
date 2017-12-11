const queryString = require('query-string')

export const getMeluTupaUrl = ({
  scenarioCollectionId,
  regionId,
  scenarioIds,
  indicatorIds,
  timePeriodId,
  language
}) => {
  let url = queryString.stringify({
    lk: scenarioCollectionId,
    ko: regionId,
    // ty: scenarioIds,
    ka: timePeriodId,
    // mj: indicatorIds,
    la: language
  })

  url = url + '&ty=' + scenarioIds.join(',')
  url = url + '&mj=' + indicatorIds.join(',')

  return url
}
