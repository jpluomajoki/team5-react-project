import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.scss'
import _ from 'lodash'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'
import * as FormControlNames from 'constants/FormControls'
import * as queryStringUtils from 'utils/queryString'
import * as InformationHTML from "constants/InformationHTML";

export default class Sidebar extends Component {
  static propTypes = {
    regionLevels: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
    scenarios: PropTypes.array.isRequired,
    indicatorCategories: PropTypes.array.isRequired,
    timePeriods: PropTypes.array.isRequired,
    selectedValues: PropTypes.object.isRequired,
    onSelectValueChange: PropTypes.func.isRequired,
    onToggleInformationModalClick: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  };

  static defaultProps = {
    // Empty
  };

  _scenariosInput = null;
  _indicatorsInput = null;

  // Note: In order to get all the values from a multiple select when the value changes
  // we need to handle this a bit differently.
  // This handler gets all the selected values on every value change.
  // Afterwards it will recreate a 'fake' event so that we can pass it along to the parent container
  // which can handle it on it's turn, like a normal on change event.
  handleMultipleSelectValueChange = ref => event => {
    const values = [].map.call(
      this[ref].selectedOptions,
      option => option.value
    );

    const fakeEvent = {};
    fakeEvent.target = {};
    fakeEvent.target.value = values;
    fakeEvent.target.name = event.target.name;

    this.props.onSelectValueChange(fakeEvent);
  };

  // Get scenario collections from chosen region
  get scenarioCollections() {
    if (
      !this.props.regions ||
      !this.props.selectedValues[FormControlNames.REGION]
    ) {
      return null;
    }

    const chosenRegion = _.find(
      this.props.regions,
      r => String(r.id) === this.props.selectedValues[FormControlNames.REGION]
    );

    return chosenRegion ? chosenRegion.scenarioCollections : null;
  }

  get melaTupaLink() {
    const { selectedValues: {
      region,
      scenarioCollection,
      scenarios,
      indicators,
      timePeriod
    } } = this.props

    if (!region || !scenarioCollection || !scenarios || !indicators || !timePeriod) {
      return null
    }

    const url = queryStringUtils.getMeluTupaUrl({
      scenarioCollectionId: scenarioCollection,
      regionId: region,
      scenarioIds: scenarios,
      indicatorIds: indicators,
      timePeriodId: timePeriod,
      language: 'fi'
    })

    console.log(url)

    return (
      <a disabled href={`http://mela2.metla.fi/mela/tupa/index.php?${url}`} target='_blank'>
        Mela Tupa
      </a>
    )
  }

  render() {
    const {
      regionLevels,
      regions,
      scenarios,
      indicatorCategories,
      timePeriods,
      onSelectValueChange,
      onToggleInformationModalClick,
      translate
    } = this.props;
    return (
      <div className={styles.component}>
        <FormGroup>
          <ControlLabel>
            {translate('region level')}
            <Button
              bsStyle="link"
              name={InformationHTML.REGIONLEVEL_INDICATOR}
              onClick={onToggleInformationModalClick}
            >
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.REGION_LEVEL}
            componentClass="select"
            onChange={onSelectValueChange}
          >
            <option disabled selected>
              select
            </option>
            {_.map(regionLevels, (level, index) => {
              return (
                <option key={index} value={level.id} title={level.description}>
                  {level.name}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('region')}
            <Button
              bsStyle="link"
              name={InformationHTML.REGION_INDICATOR}
              onClick={onToggleInformationModalClick}
            >
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.REGION}
            componentClass="select"
            onChange={onSelectValueChange}
          >
            <option disabled selected>
              select
            </option>
            {_.map(regions, (region, index) => {
              return (
                <option key={index} value={region.id} title={region.description}>
                  {region.name}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('scenario collection')}
            <Button
              bsStyle="link"
              name={InformationHTML.SCENARIOCOLLECTION_INDICATOR}
              onClick={onToggleInformationModalClick}
            >
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.SCENARIO_COLLECTION}
            componentClass="select"
            onChange={onSelectValueChange}
          >
            <option disabled selected>
              select
            </option>
            {_.map(this.scenarioCollections, (collection, index) => {
              return (
                <option key={index} value={collection.id} title={collection.description}>
                  {collection.name}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('scenario')}
            <Button
              bsStyle="link"
              name={InformationHTML.SCENARIOS_INDICATOR}
              onClick={onToggleInformationModalClick}
            >
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            multiple
            name="scenarios"
            componentClass="select"
            inputRef={ref => (this._scenariosInput = ref)}
            onChange={this.handleMultipleSelectValueChange("_scenariosInput")}
          >
            <option disabled selected>
              select
            </option>
            {_.map(scenarios, (scenario, index) => {
              return (
                <option key={index} value={scenario.id} title={scenario.description}>
                  {scenario.name}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('indicators')}
            <Button
              bsStyle="link"
              name={InformationHTML.INDICATORS_INDICATOR}
              onClick={onToggleInformationModalClick}
            >
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            multiple
            name={FormControlNames.INDICATORS}
            componentClass='select'
            inputRef={ref => this._indicatorsInput = ref}
            onChange={this.handleMultipleSelectValueChange('_indicatorsInput')}>
            <option disabled selected>select</option>
            {_.map(indicatorCategories, (indicatorCategory, index) => {
              return [
                <option
                  disabled
                  key={indicatorCategory.id}
                  value={indicatorCategory.id}
                  title={indicatorCategory.description}
                >
                  {"---" + indicatorCategory.name + "---"}
                </option>,
                _.map(indicatorCategory.indicators, (indicator, index) => {
                  return (
                    <option key={indicator.id} value={indicator.id} title={indicator.description}>
                      {indicator.name}
                    </option>
                  );
                })
              ];
            })}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>
            {translate('time period')}
            <Button
              bsStyle="link"
              name={InformationHTML.TIMEPERIOD_INDICATOR}
              onClick={onToggleInformationModalClick}
            >
              [?]
            </Button>
          </ControlLabel>
          <FormControl
            name={FormControlNames.TIME_PERIOD}
            componentClass="select"
            onChange={onSelectValueChange}
          >
            <option disabled selected>
              select
            </option>
            {_.map(timePeriods, (period, index) => {
              return (
                <option key={index} value={period.id} title={period.description}>
                  {`${period.yearStart}-${period.yearEnd}`}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>
        {this.melaTupaLink}
      </div>
    );
  }
}
