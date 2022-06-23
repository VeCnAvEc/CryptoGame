import React from 'react'

const ProgressBar: React.FC<{progress: number}> = ({progress}) => {
  return (
    <div className="item_line">
        <span className="item_line_yellow" style={{width: '40%'}}></span>
        <span className="item_line_coin icon icon-bnb active" style={{left: progress + '%'}}></span>
    </div>
  )
}

export default ProgressBar