import React from 'react'
import './Socials.scss';
import { socials } from './socialsList';

const Socials: React.FC = () => {
  return (
    <div className="page_bar_soc">
        <ul className="social flex__align">
          {socials.map(({link, icon}, i) => <li key={'social_' + i}><a href={link}>{icon}</a></li>)}
        </ul>
      </div>
  )
}

export default Socials;