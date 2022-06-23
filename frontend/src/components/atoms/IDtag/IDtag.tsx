import React from 'react'
import s from './IDtag.module.scss';
const IDtag: React.FC<{children: string}> = ({children}) => {
  return (
    <span className={s._id}>{children}</span>
  )
}

export default IDtag;