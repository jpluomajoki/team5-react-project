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

const Header = ({
  onMenuItemClickHandler,
  onPrintClickHandler,
  onDownloadClickHandler
}) => (
  <Navbar className={styles.component}>
    <Nav pullRight>
      <NavDropdown title='Menu'>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.MULTI_GRAPHS)}>Multi graphs</MenuItem>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.POLAR_GRAPH)}>Polar graphs</MenuItem>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.BAR_GRAPH)}>Bar graphs</MenuItem>
        <MenuItem onClick={onMenuItemClickHandler(MenuOptions.TABLE)}>Table</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={onPrintClickHandler}>Print</MenuItem>
        <MenuItem onClick={onDownloadClickHandler}>Download</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  onMenuItemClickHandler: PropTypes.func.isRequired,
  onPrintClickHandler: PropTypes.func.isRequired,
  onDownloadClickHandler: PropTypes.func.isRequired
}

Header.defaultProps = {
  // Empty
}

export default Header
