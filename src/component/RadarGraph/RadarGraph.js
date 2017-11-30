import React from 'react'
import PropTypes from 'prop-types'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from 'recharts'

const RadarGraph = ({ data, ...props }) => (
  <RadarChart data={data} {...props}>
    <PolarGrid />
    <PolarAngleAxis dataKey='subject' />
    <Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
  </RadarChart>
)

RadarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

RadarGraph.defaultProps = {
  outerRadius: 150,
  width: 500,
  height: 500
}

export default RadarGraph
