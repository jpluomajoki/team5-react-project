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

const Header = ({ onLanguageItemClickHandler, onMenuGraphItemClickHandler, onPrintClickHandler, translate }) => (
  <Navbar className={styles.component}>
    <Nav pullRight>
      <NavDropdown title={translate('language')} id='language-dropdown'>
        <MenuItem onClick={onLanguageItemClickHandler(MenuOptions.ENGLISH)}>English</MenuItem>
        <MenuItem onClick={onLanguageItemClickHandler(MenuOptions.FINNISH)}>Suomi</MenuItem>
      </NavDropdown>
      <NavDropdown title={translate('menu')} id='menu-dropdown'>
        <MenuItem onClick={onMenuGraphItemClickHandler(MenuOptions.SEPARATED_GRAPHS)}>{translate('separated graphs')}</MenuItem>
        <MenuItem onClick={onMenuGraphItemClickHandler(MenuOptions.RADAR_GRAPH)}>{translate('radar graph')}</MenuItem>
        <MenuItem onClick={onMenuGraphItemClickHandler(MenuOptions.BAR_GRAPH)}>{translate('bar graph')}</MenuItem>
        <MenuItem onClick={onMenuGraphItemClickHandler(MenuOptions.TABLE)}>{translate('table')}</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={onPrintClickHandler}>{translate('print')}</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  onLanguageItemClickHandler: PropTypes.func.isRequired,
  onMenuGraphItemClickHandler: PropTypes.func.isRequired,
  onPrintClickHandler: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired
}

Header.defaultProps = {
  // Empty
}

export default Header
