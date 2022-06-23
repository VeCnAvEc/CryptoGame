import classNames from 'classnames';
import React from 'react'
import './HeaderItemsWrapper.scss';
const HeaderItemWrapper: React.FC<React.HTMLProps<HTMLDivElement>> = ({children, className, style, ...otherProps}) => {
  return (
    <div style={{...style}} className={classNames("header__items", className)} {...otherProps}>{children}</div>
  )
}

export default HeaderItemWrapper;