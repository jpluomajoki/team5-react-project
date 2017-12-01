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
  graphOption: MenuOptions.POLAR_GRAPH,

  selectedValues: {
    regionLevel: '',
    region: '',
    scenarioCollection: '',
    scenarios: [],
    indicatorCategories: [],
    timePeriod: ''
  },

  data: null
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
    console.log('print')
  }

  handleDownloadClick = () => {
    console.log('Download')
  }

  // // Format data when required fields are chosen
  // postOnSidebarValueChange = () => {
  //   const { selectedValues } = this.state
  //   const { scenarios, indicatorCategories, timePeriod } = selectedValues
  //
  //   // Tmp 'validation'
  //   if (scenarios.length === 0
  //     || indicatorCategories.length === 0
  //     || timePeriod === '') {
  //     return
  //   }
  //
  //   this.setState({
  //     data: DataUtils.getIndicatorValuesPerScenarioForEachScenario(DUMMY_DATA[0], scenarios, indicatorCategories, timePeriod)
  //   })
  // }

  // Note: in order to use this event handler
  // the target needs to have a name and value!
  handleSidebarValueChange = (event) => {
    const { selectedValues } = this.state

    selectedValues[event.target.name] = event.target.value

    this.setState({ selectedValues })

    // this.setState({
    //   selectedValues
    // }, this.postOnSidebarValueChange)
  }

  get header () {
    return (
      <Header
        onMenuItemClickHandler={this.handleMenuGraphOptionClick}
        onPrintClickHandler={this.handlePrintClick}
        onDownloadClickHandler={this.handleDownloadClick} />
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
    const { scenarios, indicatorCategories, timePeriod } = selectedValues


    // Tmp 'validation'
    if (scenarios.length === 0
      || indicatorCategories.length === 0
      || timePeriod === '') {
      return
    }

    // return (
    //   <div className={styles.innerContent}>
    //     <RadarGraph data={this.state.data[0]} />
    //   </div>
    // )

    let element
    let data
    switch (this.state.graphOption) {
      case MenuOptions.MULTI_GRAPHS: {
        data = DataUtils.getIndicatorValuesPerScenarioForEachScenario(DUMMY_DATA[0], scenarios, indicatorCategories, timePeriod)
        element = _.map(data, (data, index) => {
          return (
            <RadarGraph key={index} data={data} />
          )
        })
        break
      }
      case MenuOptions.POLAR_GRAPH: {
        data = DataUtils.getIndicatorScenarioValuesPerIndicator(DUMMY_DATA[0], scenarios, indicatorCategories, timePeriod)
        element = <MultiRadarGraph data={data} />
        break
      }
      // case MenuOptions.BAR_GRAPH: {
      //   element = <BarGraph data={barData} />
      //   break
      // }
      // case MenuOptions.TABLE: {
      //   element = <Table data={tableData} />
      //   break
      // }
      default: {
        element = null
      }
    }

    return (
      <div className={styles.innerContent}>
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
