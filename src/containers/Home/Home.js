import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './Home.scss'
import { getTranslate, setActiveLanguage, getActiveLanguage } from 'react-localize-redux'

import * as DataUtils from 'utils/data'
import { setLanguageHeader } from 'utils/axios'
import * as MenuOptions from 'constants/MenuOptions'
import * as FormControlNames from 'constants/FormControls'
import * as InformationHTML from 'constants/InformationHTML'

import {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData,
  selectScenarioCollection
} from 'actions/data'
import Header from 'component/Header'
import Sidebar from 'component/Sidebar'
import MultiRadarGraph from 'component/MultiRadarGraph'
import RadarGraph from 'component/RadarGraph'
import BarGraph from 'component/BarGraph'
import Table from 'component/Table'
import InformationModal from 'component/InformationModal'

const initialState = {
  graphOption: MenuOptions.BAR_GRAPH,
  informationModal: {
    showModal: false,
    data: InformationHTML.DEFAULT_INFORMATION
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
    translate: PropTypes.func.isRequired,

    setActiveLanguage: PropTypes.func.isRequired,
    fetchRegionLevels: PropTypes.func.isRequired,
    fetchRegions: PropTypes.func.isRequired,
    fetchScenarioCollectionData: PropTypes.func.isRequired
  }

  static defaultProps = {
    // Empty
  }

  handleLanguageOptionClick = (language) => () => {
    this.props.setActiveLanguage(language)
    setLanguageHeader(language)
    this.props.fetchRegionLevels()
  }

  handleMenuGraphOptionClick = (graphOption) => () => {
    this.setState({ graphOption })
  }

  handlePrintClick = () => {
    window.print()
  }

  isValid = () => {
    const { selectedValues } = this.props

    if (
      selectedValues.scenarios.length === 0 ||
      selectedValues.indicators.length === 0 ||
      selectedValues.timePeriod === '') {
      return false
    }

    return true
  }

  onToggleInformationModalClick = (event) => {
    let { informationModal } = this.state

    if (event.target.name !== InformationHTML.CLOSE_INDICATOR) {
      switch (this.props.activeLanguage.code) {
        case ('en'):
          informationModal.data = InformationHTML.INFORMATION_EN[event.target.name]
          break
        case ('fi'):
          informationModal.data = InformationHTML.INFORMATION_FI[event.target.name]
          break
      }
    }

    informationModal.showModal = !this.state.informationModal.showModal

    this.setState({ informationModal })
  }

  get header () {
    return (
      <Header
        onLanguageItemClickHandler={this.handleLanguageOptionClick}
        onMenuGraphItemClickHandler={this.handleMenuGraphOptionClick}
        onPrintClickHandler={this.handlePrintClick}
        translate={this.props.translate}
        onToggleInformationModalClick={this.onToggleInformationModalClick} />
    )
  }

  get sidebar () {
    return (
      <Sidebar
        onToggleInformationModalClick={this.onToggleInformationModalClick} />
    )
  }

  get informationModal () {
    return (
      <div id='modal'>
        <InformationModal
          informationModal={this.state.informationModal}
          onToggleInformationModalClick={this.onToggleInformationModalClick} />
      </div>
    )
  }

  // Returns graph element(s) depending on the chosen menu option
  // data is being formatted on the go
  get innerContent () {
    const { graphOption } = this.state
    const { scenarios, indicators, timePeriod } = this.props.selectedValues

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
        return <RadarGraph key={index} data={data} />
      })
    }

    data = DataUtils.formatDataCombinedGraph({
      data: this.props.data,
      indicatorsIds: indicators,
      scenarioIds: scenarios,
      timePeriodId: timePeriod
    })

    if (graphOption === MenuOptions.RADAR_GRAPH) {
      return <MultiRadarGraph data={data} />
    }

    if (graphOption === MenuOptions.BAR_GRAPH) {
      return <BarGraph data={data} />
    }

    return <Table data={data} />
  }

  get moreIdealGraphIndicator () {
    return this.props.selectedValues.indicators.length < 3 &&
    (this.state.graphOption === MenuOptions.RADAR_GRAPH || this.state.graphOption === MenuOptions.SEPARATED_GRAPHS)
      ? (<p>Be aware that this kind of graph is ideal using more indicators</p>)
      : null
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
            {this.moreIdealGraphIndicator}
            {this.innerContent}
          </div>
        </div>
        {this.informationModal}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedValues: state.data.selectedValues,
  regions: state.data.regions,
  scenarios: state.data.scenarios,
  indicatorCategories: state.data.indicatorCategories,
  timePeriods: state.data.timePeriods,
  data: state.data.data,
  error: state.data.error,
  pending: state.data.pending,
  translate: getTranslate(state.locale),
  activeLanguage: getActiveLanguage(state.locale)
})

const mapActionsToProps = {
  fetchRegionLevels,
  fetchRegions,
  fetchScenarioCollectionData,
  setActiveLanguage,
  selectScenarioCollection
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home)
