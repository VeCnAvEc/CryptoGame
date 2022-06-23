import React from 'react'
import TopIcon from '../GameItem/components/TopIcon'
import About from './components/About'
import Start from './components/Start'
import Statistic from './components/Statistic'

const HomeInfo: React.FC = () => {
  return (
    <div className="home_info">
      <div className="bone">
        <div className="home_info_net grid">
          <About />
          <Statistic />
          <Start />
        </div>
      </div>
    </div>
  )
}

export default HomeInfo
