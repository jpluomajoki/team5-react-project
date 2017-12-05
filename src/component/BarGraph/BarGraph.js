import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { scaleOrdinal, schemeCategory10 } from 'd3-scale'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const colors = scaleOrdinal(schemeCategory10).range()

const BarGraph = ({ data, ...props }) => {
  const differentScenarios = []
  _.forOwn(data[0], (value, key) => { // every data object has the same key so just use the first one
    if (key !== 'id' && key !== 'name' && key !== 'values' && key !== 'scenarios') {
      differentScenarios.push(key)
    }
  })

  return (
    <BarChart data={data} {...props} >
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Legend />
      <Tooltip />
      {_.map(differentScenarios, (scenario, index) => {
        const color = colors[index % 10]

        return (
          <Bar key={index} dataKey={scenario} fill={color} />
        )
      })}
    </BarChart>
  )
}

BarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

BarGraph.defaultProps = {
  outerRadius: 150,
  width: 500,
  height: 500
}

export default BarGraph
