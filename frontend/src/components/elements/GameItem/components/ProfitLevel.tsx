import React from 'react'

const ProfitLevel: React.FC<{value: number | string}> = ({value}) => {
  return (
    <div className="item_info_li flex__center">
            <div className="item_label">Уровень прибыли</div>
            <span>{value}BNB</span>
        </div>
  )
}

export default ProfitLevel