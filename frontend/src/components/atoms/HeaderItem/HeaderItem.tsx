import classNames from 'classnames';
import React from 'react'
import './HeaderItem.scss';
const HeaderItem: React.FC<React.HTMLProps<HTMLDivElement>> = ({children, className, style, ...otherProps}) => {
  return (
    <div style={style} className={classNames("header_item icon", className)} {...otherProps}>{children}</div>
  )
}

export default HeaderItem;