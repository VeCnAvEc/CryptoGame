import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import IconWrapper from '../IconWrapper'
import s from './Search.module.scss'
const Search: React.FC = () => {
  const [active, setActive] = useState(false)
  const enable = useCallback(
    (event: React.MouseEvent) => {
      event.target === event.currentTarget && setActive(true)
    },
    []
  )
  const disable = useCallback(
    (event: React.MouseEvent) => {
      event.target === event.currentTarget && setActive(false)
    },
    []
  )
  return (
    <div onClick={disable} className={classNames(s.search, active && s.active)}>
      <IconWrapper className="icon icon-search"></IconWrapper>
      <div className="flex__align">
        <input type="number" placeholder="User id" />
        <button onClick={enable} className="icon icon-search"></button>
      </div>
    </div>
  )
}

export default Search
