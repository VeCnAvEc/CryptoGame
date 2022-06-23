import React from 'react'

const ItemLevel: React.FC<{level: number | string, price: number | string}> = ({level, price}) => {
  return (
    <div className="item_top flex__center">
        <div className="item_top_level">{level} Уровень</div>
        <div className="item_top_price icon icon-bnb">{price}</div>
      </div>
  )
}

export default ItemLevel