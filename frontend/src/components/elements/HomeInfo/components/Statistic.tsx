import React from 'react'
import CopyElement from '../../../atoms/CopyElement';
import './Statistic.scss';
import StatItem from './StatItem';
const Statistic: React.FC = () => {
  return (
    <div className="home_info_stat">
            <div className="home_info_stat_line">BNB Matrix Game Contracts</div>
            <div className="home_info_stat_line flex__center">
              Express
              <CopyElement content='0x4c9...d2B' copyText='0x4c9safsdfafsd2B' link='/' />
            </div>
            <div className="home_info_stat_line flex__center">
              MaxDrive
              <CopyElement content='0x4c9...d2B' copyText='0x4c9safsdfafsd2B' link='/' />
            </div>
            <div className="home_info_stat_items">
                <StatItem title='Members total' count='136 932' increasedBy='+615' />
                <StatItem title='Transactions made' count='678 814' increasedBy='+ 415' />
                <StatItem title='Turnover,BNB' count='448 767.88' increasedBy='+ 629.54' />
            </div>
          </div>
  )
}

export default Statistic;