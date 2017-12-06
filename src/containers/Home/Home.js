import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './Home.scss'

import * as DataUtils from 'utils/data'
import * as MenuOptions from 'constants/MenuOptions'
import { DUMMY_DATA } from 'constants/Constants'

import Header from 'component/Header'
import Sidebar from 'component/Sidebar'
import MultiRadarGraph from 'component/MultiRadarGraph'
import RadarGraph from 'component/RadarGraph'
import BarGraph from 'component/BarGraph'
import Table from 'component/Table'

const initialState = {
  graphOption: MenuOptions.RADAR_GRAPH,

  selectedValues: {
    regionLevel: '',
    region: '',
    scenarioCollection: '',
    scenarios: [],
    indicators: [],
    timePeriod: ''
    // scenarios: ['10', '11', '12'],
    // indicators: ['120', '122', '123'],
    // timePeriod: '21'
  }
}

export class Home extends Component {
  static propTypes = {
    // Empty
  }

  static defaultProps = {
    // Empty
  }

  handleMenuGraphOptionClick = (graphOption) => () => {
    this.setState({ graphOption })
  }

  handlePrintClick = () => {
    window.print()
  }

  // Note: in order to use this event handler
  // the target needs to have a name and value!
  handleSidebarValueChange = (event) => {
    const { selectedValues } = this.state

    selectedValues[event.target.name] = event.target.value

    this.setState({ selectedValues }, () => {
      console.log(this.state.selectedValues)
    })
  }

  get header () {
    return (
      <Header
        onMenuItemClickHandler={this.handleMenuGraphOptionClick}
        onPrintClickHandler={this.handlePrintClick} />
    )
  }

  get sidebar () {
    return (
      <Sidebar
        options={DUMMY_DATA[0]}
        onSelectValueChange={this.handleSidebarValueChange} />
    )
  }

  get innerContent () {
    const { selectedValues } = this.state
    const { scenarios, indicators, timePeriod } = selectedValues

    // Tmp 'validation'
    if (scenarios.length === 0 ||
      indicators.length === 0 ||
      timePeriod === '') {
      return null
    }

    let element = null
    let data = DataUtils.formatDataCombinedGraph({
      data: DUMMY_DATA[0],
      indicatorsIds: indicators,
      scenarioIds: scenarios,
      timePeriodId: timePeriod
    })

    switch (this.state.graphOption) {
      case MenuOptions.SEPARATED_GRAPHS: {
        data = DataUtils.formatDataSeparatedGraphs({
          data: DUMMY_DATA[0],
          indicatorsIds: indicators,
          scenarioIds: scenarios,
          timePeriodId: timePeriod
        })
        element = _.map(data, (data, index) => {
          return (
            <RadarGraph key={index} data={data} />
          )
        })
        break
      }
      case MenuOptions.RADAR_GRAPH: {
        element = <MultiRadarGraph data={data} />
        break
      }
      case MenuOptions.BAR_GRAPH: {
        element = <BarGraph data={data} />
        break
      }
      case MenuOptions.TABLE: {
        element = <Table data={data} />
        break
      }
    }

    return (
      <div id='section-to-print' className={styles.innerContent}>
        {element}
      </div>
    )
  }

  constructor (props) {
    super(props)

    this.state = initialState
  }

  componentWillMount () {
    // Empty
  }

  componentWillReceiveProps (nextProps) {
    // Empty
  }

  render () {
    return (
      <div className={styles.component}>
        {this.header}
        <div className={styles.content}>
          {this.sidebar}
          {this.innerContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapActionsToProps = {

}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
