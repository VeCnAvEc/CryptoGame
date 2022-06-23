import classNames from 'classnames';
import React from 'react'
import s from './IconWrapper.module.scss';
const IconWrapper: React.FC<React.HTMLProps<HTMLDivElement>> = ({children, className, style, ...otherProps}) => {
  return (
    <div style={{...style}} className={classNames(s.elips, className)} {...otherProps}>{children}</div>
  )
}

export default IconWrapper;