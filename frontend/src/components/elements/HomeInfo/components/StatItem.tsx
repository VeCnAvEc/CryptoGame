import React from 'react'

const StatItem: React.FC<{title: string, count: string | number, increasedBy: string | number}> = ({title, count, increasedBy}) => {
  return (
    <div className="home_info_stat_item">
      <span>{title}</span>
      <span>{count}</span>
      <span>{increasedBy}</span>
    </div>
  )
}

export default StatItem
