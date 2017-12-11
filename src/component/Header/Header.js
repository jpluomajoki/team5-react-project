import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss'
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  NavItem
} from 'react-bootstrap'

import * as MenuOptions from 'constants/MenuOptions'
import { GENERAL_INFORMATION_INDICATOR } from 'constants/InformationHTML'

const Header = ({ onLanguageItemClickHandler, onMenuGraphItemClickHandler, onPrintClickHandler, translate, onToggleInformationModalClick }) => (
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
      <NavItem href="mailto:metsamittari@luke.fi">
        {translate('feedback')}
      </NavItem>
      <NavItem name={GENERAL_INFORMATION_INDICATOR} onClick={onToggleInformationModalClick}>
        {translate('help')}
      </NavItem>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  onLanguageItemClickHandler: PropTypes.func.isRequired,
  onMenuGraphItemClickHandler: PropTypes.func.isRequired,
  onPrintClickHandler: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  onToggleInformationModalClick: PropTypes.func.isRequired
}

Header.defaultProps = {
  // Empty
}

export default Header
