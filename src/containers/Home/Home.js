import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './Home.scss'

import * as DataUtils from 'utils/data'
import * as MenuOptions from 'constants/MenuOptions'
import * as FormControlNames from 'constants/FormControls'
import {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData
} from 'actions/data'
import Header from 'component/Header'
import Sidebar from 'component/Sidebar'
import MultiRadarGraph from 'component/MultiRadarGraph'
import RadarGraph from 'component/RadarGraph'
import BarGraph from 'component/BarGraph'
import Table from 'component/Table'

const initialState = {
  graphOption: MenuOptions.RADAR_GRAPH,
  selectedValues: {
    [FormControlNames.REGION_LEVEL]: '',
    [FormControlNames.REGION]: '',
    [FormControlNames.SCENARIO_COLLECTION]: '',
    [FormControlNames.SCENARIOS]: [],
    [FormControlNames.INDICATORS]: [],
    [FormControlNames.TIME_PERIOD]: ''
  }
}

export class Home extends Component {
  static propTypes = {
    regionLevels: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
    scenarios: PropTypes.array.isRequired,
    indicatorCategories: PropTypes.array.isRequired,
    timePeriods: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.object,
    pending: PropTypes.bool.isRequired,

    fetchRegionLevels: PropTypes.func.isRequired,
    fetchRegions: PropTypes.func.isRequired,
    fetchScenarioCollectionData: PropTypes.func.isRequired
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

  // Post sidebar value change
  // Depending on the target a next action might be acquired
  // 1. REGION_LEVEL value change         -> fetch regions
  // 2. SCENARIO_COLLECTION value change  -> fetch scenario collection data
  postSidebarValueChange = (targetName) => {
    const { selectedValues } = this.state

    switch (targetName) {
      case FormControlNames.REGION_LEVEL: {
        const regionLevelId = selectedValues[FormControlNames.REGION_LEVEL]
        this.props.fetchRegions(regionLevelId)
        break
      }
      case FormControlNames.SCENARIO_COLLECTION: {
        const regionId = selectedValues[FormControlNames.REGION]
        const collectionId = selectedValues[FormControlNames.SCENARIO_COLLECTION]
        this.props.fetchScenarioCollectionData(collectionId, regionId)
      }
    }
  }

  // Note: in order to use this event handler
  // the target needs to have a name and value!
  handleSidebarValueChange = (event) => {
    let { selectedValues } = this.state
    const targetName = event.target.name
    const targetValue = event.target.value

    selectedValues[targetName] = targetValue

    this.setState({ selectedValues }, this.postSidebarValueChange(targetName))
  }

  isValid = () => {
    const { selectedValues } = this.state

    if (selectedValues.scenarios.length === 0 ||
      selectedValues.indicators.length === 0 ||
      selectedValues.timePeriod === '') {
      return false
    }

    return true
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
        {...this.props}
        selectedValues={this.state.selectedValues}
        onSelectValueChange={this.handleSidebarValueChange} />
    )
  }

  // Returns graph element(s) depending on the chosen menu option
  // data is being formatted on the go
  get innerContent () {
    const { selectedValues, graphOption } = this.state
    const { scenarios, indicators, timePeriod } = selectedValues

    if (!this.isValid()) {
      return null
    }

    let data
    if (graphOption === MenuOptions.SEPARATED_GRAPHS) {
      data = DataUtils.formatDataSeparatedGraphs({
        data: this.props.data,
        indicatorsIds: indicators,
        scenarioIds: scenarios,
        timePeriodId: timePeriod
      })

      return _.map(data, (data, index) => {
        return (
          <RadarGraph key={index} data={data} />
        )
      })
    }

    data = DataUtils.formatDataCombinedGraph({
      data: this.props.data,
      indicatorsIds: indicators,
      scenarioIds: scenarios,
      timePeriodId: timePeriod
    })

    if (graphOption === MenuOptions.RADAR_GRAPH) {
      return (
        <MultiRadarGraph data={data} />
      )
    }

    if (graphOption === MenuOptions.BAR_GRAPH) {
      return (
        <BarGraph data={data} />
      )
    }

    return (
      <Table data={data} />
    )
  }

  constructor (props) {
    super(props)

    this.state = initialState
  }

  componentWillMount () {
    this.props.fetchRegionLevels()
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
          <div id='section-to-print' className={styles.innerContent}>
            {this.innerContent}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  regionLevels: state.data.regionLevels,
  regions: state.data.regions,
  scenarios: state.data.scenarios,
  indicatorCategories: state.data.indicatorCategories,
  timePeriods: state.data.timePeriods,
  data: state.data.data,
  error: state.data.error,
  pending: state.data.pending
})

const mapActionsToProps = {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
