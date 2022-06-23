import React from 'react'
import logo from '../../../assets/svg/logo.svg';
const Logo: React.FC = () => {
  return (
    <picture><source srcSet={logo} type="image/webp"/><img src={logo} alt="logo"/></picture>
  )
}

export default Logo;