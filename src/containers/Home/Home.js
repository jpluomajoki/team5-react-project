import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Home.scss'
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

import * as MenuOptions from 'constants/MenuOptions'

import RadarGraph from 'component/RadarGraph'
import BarGraph from 'component/BarGraph'
import Table from 'component/Table'

const initialState = {
  graphOption: MenuOptions.MULTI_GRAPHS
}

const radarData = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 }
]

const barData = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
]

const tableData = [

]

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

  get header () {
    return (
      <Navbar className={styles.header}>
        <Nav pullRight>
          <NavDropdown title='Menu'>
            <MenuItem onClick={this.handleMenuGraphOptionClick(MenuOptions.MULTI_GRAPHS)}>Multi graphs</MenuItem>
            <MenuItem onClick={this.handleMenuGraphOptionClick(MenuOptions.POLAR_GRAPH)}>Polar graphs</MenuItem>
            <MenuItem onClick={this.handleMenuGraphOptionClick(MenuOptions.BAR_GRAPH)}>Bar graphs</MenuItem>
            <MenuItem onClick={this.handleMenuGraphOptionClick(MenuOptions.TABLE)}>Table</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={this.handlePrintClick}>Print</MenuItem>
            <MenuItem onClick={this.handleDownloadClick}>Download</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }

  get sidebar () {
    return (
      <div className={styles.sidebar}>
        <FormGroup>
          <ControlLabel>Region level</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Region</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Scenario collection</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Scenario</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Indicators</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Period</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Graph type</ControlLabel>
          <FormControl componentClass='select'>
            <option value='option1'>option 1</option>
            <option value='option2'>option 2</option>
            <option value='option3'>option 3</option>
          </FormControl>
        </FormGroup>
      </div>
    )
  }

  get innerContent () {
    let element = null
    switch (this.state.graphOption) {
      case MenuOptions.MULTI_GRAPHS: {
        element = (
          <div>
            <RadarGraph data={radarData} />
            <RadarGraph data={radarData} />
            <RadarGraph data={radarData} />
          </div>
        )
        break
      }
      case MenuOptions.POLAR_GRAPH: {
        element = <RadarGraph data={radarData} />
        break
      }
      case MenuOptions.BAR_GRAPH: {
        element = <BarGraph data={barData} />
        break
      }
      case MenuOptions.TABLE: {
        element = <Table data={tableData} />
        break
      }
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
