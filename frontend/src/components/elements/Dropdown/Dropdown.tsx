import classNames from 'classnames';
import React, { useState } from 'react'
import './Dropdown.scss';
const Dropdown: React.FC<{text: string, children: JSX.Element}> = ({text, children}) => {
    const [opened, setOpened] = useState(false);
    const toogle = () => setOpened(!opened);
  return (
    <div className="home_dropdown">
		<div className="bone">
			<h3 onClick={toogle} className={classNames("home_dropdown_top icon icon-arrow_yellow", opened && 'active')}>{text}</h3>
			<div style={{display: 'block', maxHeight: opened ? '1000px' : '0'}} className="home_dropdown_info">
				{children}
			</div>
		</div>
	</div>
  )
}

export default Dropdown;