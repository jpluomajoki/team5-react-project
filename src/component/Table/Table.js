import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './Table.scss'
import { Table } from 'react-bootstrap'

const TableElement = ({ data }) => {
  const differentScenarios = []
  _.forOwn(data[0], (value, key) => { // every data object has the same key so just use the first one
    if (key !== 'id' && key !== 'name' && key !== 'values' && key !== 'scenarios') {
      differentScenarios.push(key)
    }
  })

  return (
    <div className={styles.component}>
      <Table>
        <thead>
          <tr>
            <th>Indicator</th>
            {_.map(differentScenarios, (scenario, index) => (
              <th key={index}>{scenario}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {_.map(data, (indicator, index) => (
            <tr key={index}>
              <td>{indicator.name}</td>
              {_.map(indicator.scenarios, (scenario, index) => (
                <td key={index}>{scenario.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

TableElement.propTypes = {
  data: PropTypes.array.isRequired
}

TableElement.defaultProps = {
  // Empty
}

export default TableElement
