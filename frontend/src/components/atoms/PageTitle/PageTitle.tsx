import React from 'react'
import coralWebp from '../../../assets/coral.webp';
import coralPng from '../../../assets/coral.png';
import coralPng2x from '../../../assets/coral@2x.png';

const PageTitle: React.FC = () => {
  return (
    <div className="page_top_title flex__align">
      <div className="page_top_title_img">
        <picture>
          <source srcSet={coralWebp} type="image/webp" />
          <img
            src={coralPng}
            alt="coral"
            srcSet={`${coralPng} 1x, ${coralPng2x} 2x`}
          />
        </picture>
      </div>
      <h1>Партнерский бонус</h1>
      <span>ID 311628</span>
    </div>
  )
}

export default PageTitle
