import React from 'react'
import './PageInfoItem.scss'
const PageInfoItem: React.FC<{children: JSX.Element | JSX.Element[], id: string}> = ({children, id}) => {
  return <div className="page_info_item" id={id}>{children}</div>
}

export default PageInfoItem
