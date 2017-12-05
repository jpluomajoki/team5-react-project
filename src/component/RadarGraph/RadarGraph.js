import React from 'react'
import PropTypes from 'prop-types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip
} from 'recharts'

const RadarGraph = ({ data, ...props }) => {
  return (
    <RadarChart data={data.indicators} {...props}>
      <PolarGrid />
      <PolarAngleAxis dataKey='name' />
      <PolarRadiusAxis />
      <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
      <Tooltip />
      <Legend payload={[{ value: data.name, type: 'line', id: 'ID01' }]} />
    </RadarChart>
  )
}
RadarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

RadarGraph.defaultProps = {
  outerRadius: 150,
  width: 500,
  height: 500
}

export default RadarGraph
