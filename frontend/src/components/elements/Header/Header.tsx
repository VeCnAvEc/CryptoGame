import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'
import HeaderMenu from '../HeaderMenu';
import './Header.scss';

const Header: React.FC = function () {
  return (
    <div className="header">
		<div className="bone">
			<div className="header_net flex__center">
				<Link className="header_logo" to="/">
					<Logo/>
				</Link>
        <HeaderMenu />
			</div>
		</div>	
	</div>
  )
}

export default Header