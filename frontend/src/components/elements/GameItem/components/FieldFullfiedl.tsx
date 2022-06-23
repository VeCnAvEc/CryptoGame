import React from 'react'

const FieldFullfiedl: React.FC<{value: number | string}> = ({value}) => {
  return (
    <div className="item_center">
        <div className="item_label">Заполнение текущей строки</div>
        <div className="item_star icon icon-star">{value}</div>
    </div>
  )
}

export default FieldFullfiedl;