import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { scaleOrdinal, schemeCategory10 } from 'd3-scale'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip
} from 'recharts'

const colors = scaleOrdinal(schemeCategory10).range()

const MultiRadarGraph = ({ data, ...props }) => {
  const differentScenarios = []
  _.forOwn(data[0], (value, key) => { // every data object has the same key so just use the first one
    if (key !== 'id' && key !== 'name' && key !== 'values' && key !== 'scenarios') {
      differentScenarios.push(key)
    }
  })

  return (
    <RadarChart data={data} {...props}>
      {_.map(differentScenarios, (scenario, index) => {
        const color = colors[index % 10]

        return (
          <Radar key={index} dataKey={scenario} stroke={color} fill={color} fillOpacity={0.2} />
        )
      })}
      <PolarGrid />
      <Legend />
      <Tooltip />
      <PolarAngleAxis dataKey='name' />
      <PolarRadiusAxis angle={45} />
    </RadarChart>
  )
}

MultiRadarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

MultiRadarGraph.defaultProps = {
  outerRadius: 150,
  width: 500,
  height: 500,
  // margin: { top: 50, right: 50, bottom: 50, left: 50 }
}

export default MultiRadarGraph
