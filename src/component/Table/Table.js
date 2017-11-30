import React from 'react'
import PropTypes from 'prop-types'
import styles from './Table.scss'
import { Table } from 'react-bootstrap'

const TableElement = ({ }) => (
  <div className={styles.component}>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan='2'>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

TableElement.propTypes = {
  data: PropTypes.array.isRequired
}

TableElement.defaultProps = {
  // Empty
}

export default TableElement
