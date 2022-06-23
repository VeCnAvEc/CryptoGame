import React from 'react'
import Navigation from '../Navigation';
import Socials from '../Socials';
import './PageBar.scss';
const PageBar: React.FC = () => {
  return (
    <div className="page_bar_sticky">
        <Navigation />
        <Socials />
    </div>
  )
}

export default PageBar;