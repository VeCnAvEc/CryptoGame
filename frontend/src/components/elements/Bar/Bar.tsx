import classNames from 'classnames';
import React from 'react'
import Navigation from '../Navigation';
import Socials from '../Socials';
import './Bar.scss';
const Bar: React.FC<{active: boolean}> = ({active}) => {
  return (
    <div className={classNames("bar", active && 'active')}>
      <div className="bar_wrapper">
        <div className="bar_net">
          <div className="bar_top flex__center">
            <h2 className="bar_title">Wallet</h2>
            <div className="bar_logout hover__line">Disconnect</div>
          </div>
          <div className="bar_line flex__center">
            <span className="_white icon icon-wallet">0xA4...3C</span>
            <span className="copy" data-copy="0x4c9safsdfafsd3C">
              Copy
            </span>
          </div>
          <div className="bar_line flex__center">
            <span className="icon icon-smart">Smart Chain</span>
          </div>
          <div className="bar_label">Current Wallet Balance</div>
          <div className="bar_line flex__center">
            <span className="_white icon icon-busd">0.00 BUSD</span>
          </div>
          <div className="bar_line flex__center">
            <span className="icon icon-bnb">0.000 BNB</span>
          </div>
          <h2 className="bar_title">Меню</h2>
          <div className="page_bar" id="nav-table">
            <Navigation />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar
