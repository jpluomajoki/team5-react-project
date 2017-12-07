import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss'
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'

import * as MenuOptions from 'constants/MenuOptions'

const Header = ({ onMenuItemClickHandler, onPrintClickHandler }) => (
  <Navbar className={styles.component}>
    <Nav pullRight>
      <NavDropdown title='Menu' id='menu-dropdown'>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.SEPARATED_GRAPHS)}>Separated graphs</MenuItem>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.RADAR_GRAPH)}>Radar graph</MenuItem>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.BAR_GRAPH)}>Bar graph</MenuItem>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.TABLE)}>Table</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={onPrintClickHandler}>Print</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  onMenuItemClickHandler: PropTypes.func.isRequired,
  onPrintClickHandler: PropTypes.func.isRequired
}

Header.defaultProps = {
  // Empty
}

export default Header
