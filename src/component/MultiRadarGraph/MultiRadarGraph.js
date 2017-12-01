import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip
} from 'recharts'

const radarData = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const otherData = [
  { indicator: 'indicator1', scenario1: 100, scenario2: 9 },
  { indicator: 'indicator2', scenario1: 102, scenario2: 99 },
  { indicator: 'indicator3', scenario1: 103, scenario2: 113 },
  { indicator: 'indicator4', scenario1: 45, scenario2: 72 },
  { indicator: 'indicator5', scenario1: 12, scenario2: 150 },
]

const radarElements = (data) => {
  return _.map(data, d => {
    const keyNames = _.filter(Object.keys(d), keyName => !(keyName === 'id' || keyName === 'name'))

    return _.map(keyNames, (keyName, index) => {
      const opacity = Math.random()

      console.log(opacity)

      return (
        <Radar key={index} dataKey={keyName} stroke="#82ca9d" fill="#82ca9d" fillOpacity={opacity} />
      )
    })
  })
}

const MultiRadarGraph = ({ data, ...props }) =>  {
  console.log(data)

  // console.log(radarElements(data))

  // return (
  //   <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={otherData}>
  //     <Radar dataKey="scenario1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
  //     <Radar dataKey="scenario2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
  //     <PolarGrid />
  //     <Legend />
  //     <PolarAngleAxis dataKey="indicator" />
  //     <PolarRadiusAxis angle={30} domain={[0, 150]}/>
  //   </RadarChart>
  // )
  //
  // return null

  return (
    <RadarChart data={data} {...props}>
      <PolarGrid />
      {/*<Radar dataKey='IEP' stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.8}/>*/}
      {/*<Radar dataKey='MuS' stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>*/}
      {/*<Radar dataKey='PuS' stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4}/>*/}
      {/*<Radar dataKey='SNT' stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2}/>*/}
      {radarElements(data)}
      <PolarAngleAxis dataKey='name' />
      <PolarRadiusAxis />
      <Tooltip />
      <Legend />
    </RadarChart>
  )


}

MultiRadarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

MultiRadarGraph.defaultProps = {
  outerRadius: 150,
  width: 500,
  height: 500
}

export default MultiRadarGraph
