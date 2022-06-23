import React from 'react'

const PartnerBonus: React.FC<{value: number | string}> = ({value}) => {
  return (
    <div className="item_info_li flex__center">
            <div className="item_label">Партнерский бонус</div>
            <span>{value}BNB</span>
        </div>
  )
}

export default PartnerBonus;