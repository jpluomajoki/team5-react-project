import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const BarGraph = ({ data, ...props }) => (
  <BarChart data={data} {...props} >
    <XAxis dataKey='name' />
    <YAxis />
    <CartesianGrid strokeDasharray='3 3' />
    <Legend />
    {/*<Tooltip />*/}
    <Bar dataKey='pv' fill='#8884d8' />
    <Bar dataKey='uv' fill='#82ca9d' />
  </BarChart>
)

BarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

BarGraph.defaultProps = {
  outerRadius: 150,
  width: 500,
  height: 500
}

export default BarGraph
