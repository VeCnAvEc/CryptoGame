import React from 'react'
import coralWebp from '../../../../assets/coral.webp';
import coralPng from '../../../../assets/coral.png';
import coralPng2x from '../../../../assets/coral@2x.png';

const TopIcon: React.FC = () => {
  return (
    <picture>
          <source srcSet={coralWebp} type="image/webp" />
          <img
            src={coralPng}
            alt="coral"
            srcSet={`${coralPng} 1x, ${coralPng2x} 2x`}
          />
        </picture>
  )
}

export default TopIcon